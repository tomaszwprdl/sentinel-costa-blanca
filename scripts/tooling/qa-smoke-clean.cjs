#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node CommonJS tooling script, not bundled app code */
/*
 * scripts/tooling/qa-smoke-clean.cjs
 * Node-only production QA smoke runner for polluted AI shells.
 *
 * Do not orchestrate this flow through PowerShell. PowerShell can fail before
 * the clean runner starts when the parent AI process has duplicate PATH/Path.
 */
const fs = require('fs');
const http = require('http');
const { spawn, spawnSync } = require('child_process');
const { buildCleanEnv } = require('./run-clean-env.cjs');

const IS_WINDOWS = process.platform === 'win32';
const BASE_URL = 'http://127.0.0.1:3100';
const CONTACT_URL = `${BASE_URL}/pl/contact`;
const OUT_PATH = 'output/qa/clean-run-contact.png';
const REPORT_PATH = 'output/qa/clean-run-contact.report.json';
const QA_PORT = 3100;

function npmCommand() {
  return IS_WINDOWS ? 'npm.cmd' : 'npm';
}

function spawnNpm(args, options = {}) {
  const { env } = buildCleanEnv();
  const command = IS_WINDOWS ? 'cmd.exe' : npmCommand();
  const commandArgs = IS_WINDOWS ? ['/d', '/s', '/c', npmCommand(), ...args] : args;

  return spawn(command, commandArgs, {
    env,
    windowsHide: true,
    ...options,
  });
}

function requestStatus(url, timeoutMs = 1000) {
  return new Promise((resolve) => {
    const request = http.get(url, { timeout: timeoutMs }, (response) => {
      response.resume();
      response.on('end', () => resolve(response.statusCode || 0));
    });

    request.on('timeout', () => {
      request.destroy();
      resolve(0);
    });
    request.on('error', () => resolve(0));
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForReady(url, server, timeoutMs = 30000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    if (server.exitCode !== null) {
      return { ready: false, status: 0, reason: `server exited with code ${server.exitCode}` };
    }

    const status = await requestStatus(url);
    if (status >= 200 && status < 500) {
      return { ready: true, status, reason: 'ready' };
    }

    await sleep(500);
  }

  return { ready: false, status: 0, reason: `timed out after ${timeoutMs}ms` };
}

function runCapture() {
  return new Promise((resolve) => {
    const child = spawnNpm(
      [
        'run',
        'qa:capture:clean',
        '--',
        `--url=${CONTACT_URL}`,
        '--full',
        `--out=${OUT_PATH}`,
        `--report=${REPORT_PATH}`,
        '--wait=2500',
      ],
      { stdio: 'inherit' },
    );

    child.on('error', (error) => {
      console.log(`[qa-smoke-clean] Capture status: failed to start (${error.message})`);
      resolve(1);
    });
    child.on('exit', (code, signal) => {
      if (signal) {
        console.log(`[qa-smoke-clean] Capture status: terminated by ${signal}`);
        resolve(1);
        return;
      }

      console.log(`[qa-smoke-clean] Capture status: exit code ${code}`);
      resolve(code === null ? 1 : code);
    });
  });
}

function stopServerTree(server) {
  const pids = new Set();

  if (server && server.pid && server.exitCode === null) {
    pids.add(server.pid);
  } else if (server && server.exitCode !== null) {
    console.log(`[qa-smoke-clean] Cleanup status: server wrapper already exited with code ${server.exitCode}`);
  }

  const listenerPid = findListeningPid(QA_PORT);
  if (listenerPid) {
    pids.add(listenerPid);
  }

  if (pids.size === 0) {
    console.log('[qa-smoke-clean] Cleanup status: no live server pid found');
    return { attempted: false, code: 0 };
  }

  let worstCode = 0;
  for (const pid of pids) {
    if (IS_WINDOWS) {
      const result = spawnSync('taskkill', ['/PID', String(pid), '/T', '/F'], {
        encoding: 'utf8',
        windowsHide: true,
      });
      console.log(`[qa-smoke-clean] Cleanup status: taskkill PID ${pid} exit code ${result.status}`);

      if (result.status !== 0 && result.status !== null) {
        try {
          process.kill(pid, 'SIGTERM');
          console.log(`[qa-smoke-clean] Cleanup status: process.kill PID ${pid} sent`);
        } catch (error) {
          console.log(`[qa-smoke-clean] Cleanup status: process.kill PID ${pid} failed (${error.code || error.message})`);
          worstCode = result.status;
        }
      } else if (result.status === null) {
        try {
          process.kill(pid, 'SIGTERM');
          console.log(`[qa-smoke-clean] Cleanup status: process.kill PID ${pid} sent`);
        } catch (error) {
          console.log(`[qa-smoke-clean] Cleanup status: process.kill PID ${pid} failed (${error.code || error.message})`);
          worstCode = 1;
        }
      }
      continue;
    }

    try {
      process.kill(pid, 'SIGTERM');
      console.log(`[qa-smoke-clean] Cleanup status: sent SIGTERM to PID ${pid}`);
    } catch (error) {
      console.log(`[qa-smoke-clean] Cleanup status: failed to SIGTERM PID ${pid} (${error.message})`);
      worstCode = 1;
    }
  }

  return { attempted: true, code: worstCode };
}

function findListeningPid(port) {
  if (!IS_WINDOWS) return null;

  const result = spawnSync('netstat', ['-ano', '-p', 'tcp'], {
    encoding: 'utf8',
    windowsHide: true,
  });

  if (result.status !== 0) {
    return null;
  }

  for (const line of String(result.stdout || '').split(/\r?\n/)) {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 5 || parts[0] !== 'TCP') {
      continue;
    }

    const localAddress = parts[1];
    const state = parts[3];
    const pid = Number(parts[4]);

    if (state === 'LISTENING' && localAddress.endsWith(`:${port}`) && Number.isInteger(pid) && pid > 0) {
      return pid;
    }
  }

  return null;
}

async function waitForDown(url, timeoutMs = 5000) {
  const started = Date.now();

  while (Date.now() - started < timeoutMs) {
    if (!(await requestStatus(url, 300))) {
      return true;
    }
    await sleep(250);
  }

  return false;
}

async function main() {
  console.log(`[qa-smoke-clean] Base URL: ${BASE_URL}`);
  fs.mkdirSync('output/qa', { recursive: true });

  const preflightStatus = await requestStatus(CONTACT_URL, 800);
  if (preflightStatus) {
    console.log(
      `[qa-smoke-clean] Readiness status: failed; ${CONTACT_URL} already responded with ${preflightStatus}`,
    );
    process.exit(1);
  }

  const server = spawnNpm(['run', 'qa:serve:clean'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const serverOutput = [];

  server.stdout.on('data', (chunk) => {
    serverOutput.push(String(chunk));
    if (serverOutput.length > 20) serverOutput.shift();
  });
  server.stderr.on('data', (chunk) => {
    serverOutput.push(String(chunk));
    if (serverOutput.length > 20) serverOutput.shift();
  });

  let exitCode = 1;

  try {
    server.on('error', (error) => {
      console.log(`[qa-smoke-clean] Readiness status: server failed to start (${error.message})`);
    });

    const ready = await waitForReady(CONTACT_URL, server);
    console.log(`[qa-smoke-clean] Readiness status: ${ready.reason}${ready.status ? ` (${ready.status})` : ''}`);

    if (!ready.ready) {
      if (serverOutput.length) {
        console.log('[qa-smoke-clean] Recent server output:');
        for (const line of serverOutput.join('').split(/\r?\n/).filter(Boolean).slice(-20)) {
          console.log(`[qa-smoke-clean]   ${line}`);
        }
      }
      exitCode = 1;
    } else {
      exitCode = await runCapture();
    }
  } finally {
    const cleanup = stopServerTree(server);
    const isDown = await waitForDown(CONTACT_URL);

    if (isDown) {
      console.log('[qa-smoke-clean] Cleanup status: port 3100 no longer responds');
    } else {
      console.log('[qa-smoke-clean] Cleanup status: port 3100 still responds');
      if (exitCode === 0) {
        exitCode = 1;
      }
    }

    if (cleanup.code !== 0 && !isDown && exitCode === 0) {
      exitCode = cleanup.code;
    }
  }

  process.exit(exitCode);
}

main().catch((error) => {
  console.log(`[qa-smoke-clean] Failed: ${error.message}`);
  process.exit(1);
});
