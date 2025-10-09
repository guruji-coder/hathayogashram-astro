#!/usr/bin/env node
/**
 * Constants Structure Validator
 * 
 * This script validates that all constant files follow the naming conventions
 * and directory structure standards.
 */

const fs = require('fs');
const path = require('path');

const CONSTANTS_DIR = path.join(__dirname, '../src/constants');

const errors = [];
const warnings = [];
const info = [];

// Check for uppercase folders
function checkFolderCasing(dir, relativePath = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const relPath = path.join(relativePath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if folder name has uppercase
      if (item !== item.toLowerCase()) {
        errors.push(`❌ Folder has uppercase letters: ${relPath}`);
      }
      
      // Recursively check subdirectories
      checkFolderCasing(fullPath, relPath);
    } else if (item.endsWith('.ts')) {
      // Check file naming
      if (item.includes('Constants.ts')) {
        warnings.push(`⚠️  File has 'Constants' suffix: ${relPath}`);
      }
      
      // Check for kebab-case (allow index.ts and numbers)
      const fileNameWithoutExt = item.replace('.ts', '');
      if (fileNameWithoutExt !== 'index' && 
          fileNameWithoutExt !== fileNameWithoutExt.toLowerCase()) {
        warnings.push(`⚠️  File is not lowercase: ${relPath}`);
      }
    }
  });
}

// Check that required folders exist
function checkRequiredStructure() {
  const required = [
    'shared',
    'components',
    'features',
    'pages',
    'shared/images.ts',
    'shared/routes.ts',
    'shared/ui.ts',
    'index.ts'
  ];
  
  required.forEach(item => {
    const fullPath = path.join(CONSTANTS_DIR, item);
    if (!fs.existsSync(fullPath)) {
      errors.push(`❌ Required path missing: ${item}`);
    } else {
      info.push(`✅ Found: ${item}`);
    }
  });
}

// Check for old structure remnants
function checkForOldStructure() {
  const oldPatterns = [
    'HomePage',
    'homepage',
    'TTC',
    'imageConstants.ts',
    'routesConstants.ts',
    'uiConstants.ts',
    'headerConstants.ts',
    'navbar.ts'
  ];
  
  oldPatterns.forEach(pattern => {
    const fullPath = path.join(CONSTANTS_DIR, pattern);
    if (fs.existsSync(fullPath)) {
      errors.push(`❌ Old structure found (should be removed): ${pattern}`);
    }
  });
}

// Main validation
console.log('\n🔍 Validating Constants Structure...\n');

checkRequiredStructure();
checkForOldStructure();
checkFolderCasing(CONSTANTS_DIR);

// Report results
console.log('\n📊 Validation Results:\n');

if (info.length > 0) {
  console.log('ℹ️  Info:');
  info.forEach(msg => console.log(`  ${msg}`));
  console.log('');
}

if (warnings.length > 0) {
  console.log('⚠️  Warnings:');
  warnings.forEach(msg => console.log(`  ${msg}`));
  console.log('');
}

if (errors.length > 0) {
  console.log('❌ Errors:');
  errors.forEach(msg => console.log(`  ${msg}`));
  console.log('');
  console.log('❌ Validation FAILED\n');
  process.exit(1);
} else if (warnings.length > 0) {
  console.log('⚠️  Validation passed with warnings\n');
  process.exit(0);
} else {
  console.log('✅ All checks passed! Constants structure is valid.\n');
  process.exit(0);
}
