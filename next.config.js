const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
}

module.exports = nextConfig
