/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add explicit domains for any external images used
    domains: [
      "pub-83c5db439b40468498f97946200806f7.r2.dev",
      "cdn.llm.report",
      "cdn.magicui.design",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-83c5db439b40468498f97946200806f7.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.llm.report",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.magicui.design",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
