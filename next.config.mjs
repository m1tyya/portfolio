/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			issuer: { and: [/\.(js|ts|md)x?$/] },
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

export default nextConfig;
