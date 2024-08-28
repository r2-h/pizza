/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.dodostatic.net",
        protocol: "https",
      },
      {
        hostname: "cdn.dodostatic.net",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
