/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // if you're using server actions
  },
  webpack: (config, { isServer }) => {
    // Fix styled-components or fs module issues on client side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    return config
  },
}

export default nextConfig
