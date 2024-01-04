/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
	images: {
		remotePatterns: [{
			protocol: 'https',
			hostname: 'res.cloudinary.com',
			port: '',
			pathname: `/${process.env.NEXT_CLOUDINARY_NAME}/image/upload/**`
		}]
	}
}

module.exports = nextConfig
