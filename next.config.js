/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "appsbuildin2.click",
      },
      // s3 bucket
      {
        hostname: "s3.amazonaws.com",
      },
      {
        hostname: "ostdoramas.s3.us-east-2.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
