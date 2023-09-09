import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Footer } from '@/components/home/Footer'
import { Nav } from '@/components/nav/Nav'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
	title: 'Weronika Smarduch',
	description:
		'Weronika Smarduch Kandydatka do Sejmu Rzeczpospolitej Polskiej z okręgu Sądecko-Podhalańskiego. Nr 1 na liście koalicji Obywatelskiej',
	keywords: ['Kandydatka', 'sejm', 'Rzeczpospolita', 'Polska', 'podhale', 'koalicja', 'obywatelska'],
	icons: {
		icon: ['/favicon.icon?v=2'],
		apple: ['/apple-touch-icon.png?v=2'],
		shortcut: ['/apple-touch-icon.png?v=2']
	},
	manifest: '/site.webmanifest'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl'>
			<body className={`${poppins.className} flex min-h-screen flex-col`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
