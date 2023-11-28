/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "appsbuildin2.click"
      }
    ],
  },
};

module.exports = nextConfig;
