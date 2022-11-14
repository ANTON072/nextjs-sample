/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // TODO: mswでエラーが出るので一時的な対応
  experimental: {
    esmExternals: false,
  },
}

module.exports = nextConfig
