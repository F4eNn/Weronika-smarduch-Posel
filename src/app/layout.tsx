import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Footer } from '@/components/home/Footer'
import { Nav } from '@/components/nav/Nav'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
	metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
	title: {
		default: 'Weronika Smarduch',
		template: `%s | Weronika Smarduch`,
	},
	description: 'Weronika Smarduch Posłanka na Sejm RP',
	icons: {
		icon: ['/favicon.ico?v=2'],
		apple: ['/apple-touch-icon.png?v=2'],
		shortcut: ['/apple-touch-icon.png?v=2'],
	},
	manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl'>
			<body className={`${poppins.className} flex min-h-screen flex-col pt-[82px]`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
