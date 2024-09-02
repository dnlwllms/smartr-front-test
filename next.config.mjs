/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.r114.co.kr",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
