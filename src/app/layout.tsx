import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
	title: 'Weronika Smarduch',
	description: 'Generated by create next app',
}
import { Nav } from '@/components/nav/Nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
