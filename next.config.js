/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",

        hostname: "images.matas.dk",

        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
