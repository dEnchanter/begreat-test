const path = require('path');
const { execSync } = require('child_process');

// Point to your main config
process.env['NEXT_CONFIG_PATH'] = path.resolve(__dirname, 'next.dashboard.config.js');

// Execute the Next.js build
execSync('next build', { stdio: 'inherit' });