/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["s4.anilist.co"],
	},
	compiler: {
		styledComponents: true,
	},
	output: "standalone",
	// reactStrictMode: true,
};

module.exports = nextConfig;
