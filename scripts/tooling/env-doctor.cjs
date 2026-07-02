#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports -- standalone Node CommonJS tooling script, not bundled app code */
/*
 * scripts/tooling/env-doctor.cjs
 * Diagnoses duplicate PATH/Path environment pollution in agent shells.
 *
 * Reports:
 * 1. Which /^path$/i key variants Node's process.env enumeration sees.
 * 2. `cmd /c set path` output filtered to PATH= / Path= / PATHEXT= lines.
 * 3. Whether a child spawned through the clean-runner logic
 *    (scripts/tooling/run-clean-env.cjs) has exactly one Path key, verified
 *    via both cmd enumeration and a PowerShell Env: provider enumeration.
 *
 * Exit code: 0 when the clean child environment is healthy, 1 when the clean
 * child still shows duplicate PATH/Path (or the checks could not run).
 *
 * Usage:
 *   node scripts/tooling/env-doctor.cjs
 */
const { spawnSync } = require('child_process');
const { buildCleanEnv } = require('./run-clean-env.cjs');

const IS_WINDOWS = process.platform === 'win32';
function pathLinesFromCmdSet(env) {
  const result = spawnSync('cmd.exe', ['/d', '/s', '/c', 'set path'], { env, encoding: 'utf8' });
  if (result.error) return { error: result.error.message, lines: [] };
  const lines = String(result.stdout || '')
    .split(/\r?\n/)
    .filter((line) => /^(path|pathext)=/i.test(line));
  return { error: null, lines };
}

function main() {
  let healthy = true;

  console.log('[env-doctor] platform: ' + process.platform);

  // 1. What does Node's process.env enumeration see?
  const parentPathKeys = Object.keys(process.env).filter((key) => /^path$/i.test(key));
  console.log(`[env-doctor] process.env path-key variants: ${parentPathKeys.join(', ') || '(none)'}`);
  if (parentPathKeys.length > 1) {
    console.log('[env-doctor] parent shell is polluted (multiple PATH/Path variants).');
  }

  if (!IS_WINDOWS) {
    console.log('[env-doctor] non-Windows platform: duplicate Path pollution does not apply.');
    process.exit(parentPathKeys.length > 1 ? 1 : 0);
  }

  // 2. Raw view of the parent environment block via cmd.
  const parentCmd = pathLinesFromCmdSet(process.env);
  if (parentCmd.error) {
    console.log(`[env-doctor] parent cmd check failed: ${parentCmd.error}`);
  } else {
    console.log('[env-doctor] parent `cmd /c set path` (PATH/Path/PATHEXT lines only):');
    for (const line of parentCmd.lines) {
      console.log(`  ${line}`);
    }
    const parentPathLines = parentCmd.lines.filter((line) => /^path=/i.test(line));
    if (parentPathLines.length > 1) {
      console.log('[env-doctor] parent environment block carries duplicate PATH/Path entries.');
    }
  }

  // 3a. Clean child via cmd enumeration.
  const { env: cleanEnv, pathKeys, segmentCount, duplicatesRemoved } = buildCleanEnv();
  console.log(
    `[env-doctor] clean runner merged [${pathKeys.join(', ') || '(none)'}] into single "Path" ` +
      `(${segmentCount} segments kept, ${duplicatesRemoved} duplicate segments removed)`
  );

  const cleanCmd = pathLinesFromCmdSet(cleanEnv);
  if (cleanCmd.error) {
    console.log(`[env-doctor] clean-child cmd check failed: ${cleanCmd.error}`);
    healthy = false;
  } else {
    const cleanPathLines = cleanCmd.lines.filter((line) => /^path=/i.test(line));
    if (cleanPathLines.length === 1) {
      console.log('[env-doctor] clean-child cmd check: exactly one Path entry. OK');
    } else {
      console.log(`[env-doctor] clean-child cmd check: ${cleanPathLines.length} Path entries. FAIL`);
      healthy = false;
    }
  }

  // 3b. Clean child via PowerShell Env: provider (the enumeration that breaks
  // with "An item with the same key has already been added" in polluted shells).
  const ps = spawnSync(
    'powershell.exe',
    [
      '-NoProfile',
      '-NonInteractive',
      '-Command',
      "(Get-ChildItem Env: | Where-Object { $_.Name -match '^path$' } | ForEach-Object { $_.Name }) -join ','",
    ],
    { env: cleanEnv, encoding: 'utf8' }
  );
  if (ps.error || ps.status !== 0) {
    const detail = ps.error ? ps.error.message : String(ps.stderr || '').trim().split(/\r?\n/)[0];
    console.log(`[env-doctor] clean-child PowerShell Env: enumeration FAILED: ${detail}`);
    healthy = false;
  } else {
    const names = String(ps.stdout || '').trim();
    if (names.split(',').filter(Boolean).length === 1) {
      console.log(`[env-doctor] clean-child PowerShell Env: enumeration OK (sees: ${names})`);
    } else {
      console.log(`[env-doctor] clean-child PowerShell Env: sees duplicate keys: ${names}. FAIL`);
      healthy = false;
    }
  }

  console.log(`[env-doctor] result: ${healthy ? 'clean child environment is healthy' : 'clean child environment still broken'}`);
  process.exit(healthy ? 0 : 1);
}

main();
