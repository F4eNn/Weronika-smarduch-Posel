import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#0d4da1',
				blue: '#295fff',
				darkBlue: '#103983',
				secondary: '#d72748',
				secondaryHover: '#d72747cd',
			},
		},
	},
	plugins: [],
}
export default config
