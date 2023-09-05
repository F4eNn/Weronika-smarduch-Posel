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
	themeColor: '#d72748',
	keywords: ['Kandydatka', 'sejm', 'Rzeczpospolita', 'Polska', 'podhale', 'koalicja', 'obywatelska'],
	icons: {
		icon: {
			sizes: '32x32',
			url: '/icon.ico',
		},
		apple: {
			sizes: '180x180',
			url: '/apple-touch-icon.png',
		},
	},
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
