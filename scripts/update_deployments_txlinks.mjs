#!/usr/bin/env node
/**
 * Script to parse deployments.log and add transaction links to deployments.md
 * 
 * Usage: node scripts/update_deployments_txlinks.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEPLOYMENTS_LOG = path.join(__dirname, '..', 'deployments.log');
const DEPLOYMENTS_MD = path.join(__dirname, '..', 'deployments.md');

/**
 * Normalize chain name for comparison (lowercase, remove spaces/special chars)
 * @param {string} name 
 * @returns {string}
 */
function normalizeChainName(name) {
    return name.toLowerCase().replace(/[\s_-]+/g, '');
}

/**
 * Parse deployments.log and extract chain -> txLink mapping
 * @returns {Map<string, string>} Map of normalized chain name to txLink
 */
function parseDeploymentsLog() {
    const txLinksByChain = new Map();
    
    if (!fs.existsSync(DEPLOYMENTS_LOG)) {
        console.warn('deployments.log not found');
        return txLinksByChain;
    }
    
    const content = fs.readFileSync(DEPLOYMENTS_LOG, 'utf8');
    const lines = content.split('\n').filter(line => line.trim());
    
    for (const line of lines) {
        // Extract JSON part after timestamp
        const match = line.match(/^\[.*?\]\s*(.+)$/);
        if (!match) continue;
        
        try {
            const json = JSON.parse(match[1]);
            
            // Look for deploy actions with txLink
            if (json.action === 'deploy' && json.txLink && json.chain) {
                const normalizedChain = normalizeChainName(json.chain);
                txLinksByChain.set(normalizedChain, json.txLink);
            }
        } catch (e) {
            // Skip non-JSON lines or parse errors
            continue;
        }
    }
    
    return txLinksByChain;
}

/**
 * Extract address from markdown link format [address](url)
 * @param {string} mdLink 
 * @returns {string|null}
 */
function extractAddressFromMdLink(mdLink) {
    const match = mdLink.match(/\[(0x[a-fA-F0-9]+)\]/);
    return match ? match[1].toLowerCase() : null;
}

/**
 * Update deployments.md with transaction links
 */
function updateDeploymentsMd() {
    const txLinks = parseDeploymentsLog();
    
    if (txLinks.size === 0) {
        console.log('No deployment tx links found in log');
        return;
    }
    
    console.log(`Found ${txLinks.size} deployment tx links in log:`);
    for (const [chain, link] of txLinks) {
        console.log(`  - ${chain}: ${link}`);
    }
    
    if (!fs.existsSync(DEPLOYMENTS_MD)) {
        console.error('deployments.md not found');
        return;
    }
    
    const content = fs.readFileSync(DEPLOYMENTS_MD, 'utf8');
    const lines = content.split('\n');
    
    // Check if header already has Tx column
    const header = lines[0];
    const hasTxColumn = header.includes('| Tx') || header.includes('| Transaction');
    
    const newLines = [];
    let updatedCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Handle header row
        if (i === 0) {
            if (hasTxColumn) {
                newLines.push(line);
            } else {
                newLines.push(`${line} | Tx`);
            }
            continue;
        }
        
        // Handle separator row
        if (i === 1) {
            if (hasTxColumn) {
                newLines.push(line);
            } else {
                newLines.push(`${line} | ---`);
            }
            continue;
        }
        
        // Handle data rows
        if (!line.trim()) {
            newLines.push(line);
            continue;
        }
        
        const parts = line.split('|').map(p => p.trim());
        
        // Skip if already has 4+ columns with content (tx link already present)
        if (parts.length >= 4 && parts[3] && parts[3].includes('[tx]')) {
            newLines.push(line);
            continue;
        }
        
        // Get chain name from first column
        const chainName = parts[0];
        if (!chainName) {
            newLines.push(hasTxColumn ? line : `${line} |`);
            continue;
        }
        
        const normalizedChain = normalizeChainName(chainName);
        
        if (txLinks.has(normalizedChain)) {
            const txLink = txLinks.get(normalizedChain);
            const txMdLink = `[tx](${txLink})`;
            newLines.push(`${parts[0]} | ${parts[1]} | ${parts[2]} | ${txMdLink}`);
            updatedCount++;
        } else {
            // No tx link found for this chain
            newLines.push(hasTxColumn ? line : `${line} |`);
        }
    }
    
    fs.writeFileSync(DEPLOYMENTS_MD, newLines.join('\n'), 'utf8');
    console.log(`Updated ${updatedCount} rows with transaction links`);
}

// Main execution
updateDeploymentsMd();
