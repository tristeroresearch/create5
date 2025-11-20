#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { chainConfig, getRpcUrl, getExplorerUrl } from '../chainconfig/chains.mjs';

// Simple CLI parsing: --out <file> (default: env_export.txt), --only <k1,k2,...>
function getArg(flag) {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === flag && i + 1 < args.length) return args[i + 1];
    if (args[i].startsWith(flag + '=')) return args[i].slice(flag.length + 1);
  }
  return null;
}

const outPath = getArg('--out') || 'env_export.txt';
const onlyArg = getArg('--only');
const onlySet = onlyArg ? new Set(onlyArg.split(',').map(s => s.trim()).filter(Boolean)) : null;

function upperSnake(s) {
  return String(s)
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toUpperCase();
}


function* iterateChains() {
  for (const key of Object.keys(chainConfig)) {
    if (onlySet && !onlySet.has(key)) continue;
    yield chainConfig[key];
  }
}

const lines = [];
for (const c of iterateChains()) {
  const KEY = upperSnake(c.key || 'CHAIN');
  const rpc = getRpcUrl(c) || '';
  const explorer = getExplorerUrl(c) || '';
  const currency = c.currency || '';
  const chainId = c.chainId != null ? String(c.chainId) : '';

  lines.push(`${KEY}_RPC="${rpc}"`);
  lines.push(`${KEY}_EXPLORER_URL="${explorer}"`);
  lines.push(`${KEY}_CURRENCY="${currency}"`);
  lines.push(`${KEY}_CHAIN_ID="${chainId}"`);
  // leave two new lines between chain keys
  lines.push('');
  lines.push('');
}

fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log(`Wrote ${lines.length} lines to ${path.resolve(outPath)}`);
