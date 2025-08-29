# Git Performance Optimization for SEO Constants

This file provides guidance on optimizing Git performance when working with the large SEO keyword files in this repository.

## Current Issues

Large constant files with extensive keyword collections can cause:

1. Slow Git operations (status, commit, push, pull)
2. VS Code source control performance issues
3. Higher memory usage during Git operations

## Recommended Solutions

### For Developers

1. **Use Git sparse-checkout for focused work**
   
   If you're not actively modifying the SEO constants, use sparse checkout:
   ```bash
   git config core.sparseCheckout true
   echo "!src/lib/asana-keywords.ts" >> .git/info/sparse-checkout
   echo "!src/lib/pranayama-keywords.ts" >> .git/info/sparse-checkout
   echo "!src/lib/healing-keywords.ts" >> .git/info/sparse-checkout
   echo "!src/lib/philosophy-keywords.ts" >> .git/info/sparse-checkout
   git read-tree -mu HEAD
   ```

2. **Skip Git hooks for SEO files**
   
   Add to your `.git/hooks/pre-commit` script:
   ```bash
   # Skip linting large SEO files
   if [[ $file == *"keywords.ts" ]]; then
     continue
   fi
   ```

3. **Increase Git buffer size**
   ```bash
   git config --global http.postBuffer 524288000
   git config --global core.packedGitLimit 512m
   git config --global core.packedGitWindowSize 512m
   git config --global pack.deltaCacheSize 512m
   git config --global pack.packSizeLimit 512m
   git config --global pack.windowMemory 512m
   ```

### For Repository Optimization

1. **Consider moving constant data to JSON files**
   - Store large keyword collections in `.json` files
   - Import them in TypeScript with proper typing
   - Improves both Git and IDE performance

2. **Use Git LFS for keyword files**
   ```bash
   git lfs install
   git lfs track "src/lib/*keywords.ts"
   git add .gitattributes
   ```

3. **Optimize VS Code settings**
   Add to .vscode/settings.json:
   ```json
   {
     "files.watcherExclude": {
       "**/src/lib/*keywords.ts": true
     },
     "search.exclude": {
       "**/src/lib/*keywords.ts": true
     }
   }
   ```

## Long-term Recommendations

1. Consider breaking up large keyword files into smaller, more manageable files
2. Use dynamic imports for large constant collections
3. Move infrequently updated keywords to a separate package
4. Implement a data loading strategy that fetches keywords from an API or CDN
