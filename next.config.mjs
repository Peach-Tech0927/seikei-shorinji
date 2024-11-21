/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user0514.cdnw.net",
        pathname: "/shared/img/thumb/**",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
        pathname: "/th/id/**",
      },
    ],
  },
};

export default nextConfig;
