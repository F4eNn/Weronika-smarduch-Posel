import { Poppins } from 'next/font/google'

import { Footer } from '@/components/home/Footer'
import { Meintenance } from '@/components/meintenance/Meintenance'
import { Nav } from '@/components/nav/Nav'

import type { Metadata } from 'next'

import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
	title: {
		default: 'Weronika Smarduch',
		template: `%s | Weronika Smarduch`,
	},
	description: 'Weronika Smarduch Posłanka na Sejm RP',
	icons: {
		apple: ['/apple-touch-icon.png?v=2'],
		shortcut: ['/apple-touch-icon.png?v=2'],
		icon: ['/favicon.ico?v=2'],
	},
	manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	if (process.env.MAINTENANCE_MODE === 'true') {
		return (
			<html lang='pl'>
				<body
					className={`${poppins.className} flex min-h-screen flex-col pt-[82px] selection:bg-secondary selection:text-white`}
				>
					<Meintenance />
				</body>
			</html>
		)
	}
	return (
		<html lang='pl'>
			<body
				className={`${poppins.className} flex min-h-screen flex-col pt-[82px] selection:bg-secondary selection:text-white`}
			>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
