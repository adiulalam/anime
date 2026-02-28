/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s4.anilist.co"],
    minimumCacheTTL: 604800, // 7 days in seconds
  },
  compiler: {
    styledComponents: true,
  },
  output: "standalone",
  // reactStrictMode: true,
};

module.exports = nextConfig;
