/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve AniList images as-is. Next.js's optimizer caches every resized
    // copy on disk and never deletes them (it reached ~3 GB in production).
    unoptimized: true,
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
