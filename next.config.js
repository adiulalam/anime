/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["s4.anilist.co"],
	},
	compiler: {
		styledComponents: true,
	},
	// reactStrictMode: true,
};

module.exports = nextConfig;
