/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bestjquery.com'],
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
module.exports = withMDX(nextConfig)
