/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.dodostatic.net", // Updated hostname
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
