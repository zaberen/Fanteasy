// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name/' : '',
}

module.exports = nextConfig

// package.json - Add these scripts
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out",
    // ... other scripts
  }
}
