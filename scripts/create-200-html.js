import { copyFileSync } from 'fs';
import { join } from 'path';

try {
  copyFileSync(join('dist', 'index.html'), join('dist', '200.html'));
  console.log('✓ Created dist/200.html for Surge SPA fallback');
} catch (error) {
  console.error('✗ Failed to create 200.html:', error.message);
  process.exit(1);
}
