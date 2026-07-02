#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node CommonJS tooling script, not bundled app code */
/*
 * scripts/tooling/run-clean-env.cjs
 * Clean-environment command launcher for AI agent shells.
 *
 * Some agent shells (Codex, Cursor, embedded terminals) inherit a Windows
 * environment block containing BOTH `PATH` and `Path`. PowerShell's Env
 * provider then fails with "An item with the same key has already been added",
 * which breaks env checks and background server launches. That is shell
 * pollution, not an app failure.
 *
 * This runner builds a sanitized child environment (exactly one `Path` key on
 * Windows, values merged and de-duplicated case-insensitively) and spawns the
 * requested command with it. All other env vars pass through untouched. It
 * never prints env values or secrets - only key names and segment counts.
 *
 * Usage:
 *   node scripts/tooling/run-clean-env.cjs -- <command> [args...]
 *
 * Examples:
 *   node scripts/tooling/run-clean-env.cjs -- next build
 *   node scripts/tooling/run-clean-env.cjs -- next dev --hostname 127.0.0.1 --port 3000
 */
const path = require('path');
const { spawn } = require('child_process');

const IS_WINDOWS = process.platform === 'win32';

/**
 * Build a sanitized copy of `baseEnv`:
 * - collect every key matching /^path$/i
 * - merge their values, de-duplicating segments case-insensitively on Windows
 * - expose the result under exactly one key (`Path` on Windows)
 * - preserve every other variable as-is
 */
function buildCleanEnv(baseEnv = process.env) {
  const env = {};
  const pathKeys = [];
  for (const key of Object.keys(baseEnv)) {
    if (IS_WINDOWS && /^path$/i.test(key)) {
      pathKeys.push(key);
      continue;
    }
    env[key] = baseEnv[key];
  }

  if (!IS_WINDOWS) {
    return {
      env,
      pathKeys: Object.keys(baseEnv).filter((key) => /^path$/i.test(key)),
      pathKeyName: null,
      segmentCount: null,
      duplicatesRemoved: null,
    };
  }

  const segments = [];
  const seen = new Set();
  let duplicatesRemoved = 0;
  for (const key of pathKeys) {
    for (const rawSegment of String(baseEnv[key] || '').split(path.delimiter)) {
      const segment = rawSegment;
      if (!segment) continue;
      const canonical = segment.toLowerCase();
      if (seen.has(canonical)) {
        duplicatesRemoved += 1;
        continue;
      }
      seen.add(canonical);
      segments.push(segment);
    }
  }

  const pathKeyName = 'Path';
  env[pathKeyName] = segments.join(path.delimiter);

  return { env, pathKeys, pathKeyName, segmentCount: segments.length, duplicatesRemoved };
}

/** Minimal quoting for the Windows shell path: wrap args containing spaces/quotes. */
function quoteArg(value) {
  if (value === '') return '""';
  if (!/[\s"]/.test(value)) return value;
  return `"${value.replace(/"/g, '\\"')}"`;
}

function main() {
  const argv = process.argv.slice(2);
  const separator = argv.indexOf('--');
  const command = separator === -1 ? [] : argv.slice(separator + 1);

  if (command.length === 0) {
    console.error('[run-clean-env] usage: node scripts/tooling/run-clean-env.cjs -- <command> [args...]');
    process.exit(2);
  }

  const { env, pathKeys, pathKeyName, segmentCount, duplicatesRemoved } = buildCleanEnv();

  console.log(`[run-clean-env] platform: ${process.platform}`);
  console.log(`[run-clean-env] parent env path keys: ${pathKeys.join(', ') || '(none)'}`);
  if (IS_WINDOWS) {
    console.log(
      `[run-clean-env] normalized to single "${pathKeyName}" ` +
        `(${segmentCount} segments kept, ${duplicatesRemoved} duplicate segments removed)`
    );
  } else {
    console.log('[run-clean-env] Path normalization: not required on this platform');
  }
  console.log(`[run-clean-env] running: ${command.join(' ')}`);

  const child = IS_WINDOWS
    ? spawn(command.map(quoteArg).join(' '), { env, stdio: 'inherit', shell: true })
    : spawn(command[0], command.slice(1), { env, stdio: 'inherit' });

  child.on('error', (error) => {
    console.error(`[run-clean-env] failed to start command: ${error.message}`);
    process.exit(1);
  });

  child.on('exit', (code, signal) => {
    if (signal) {
      console.log(`[run-clean-env] child terminated by signal: ${signal}`);
      process.exit(1);
    }
    console.log(`[run-clean-env] child exit code: ${code}`);
    process.exit(code === null ? 1 : code);
  });
}

module.exports = { buildCleanEnv };

if (require.main === module) {
  main();
}
