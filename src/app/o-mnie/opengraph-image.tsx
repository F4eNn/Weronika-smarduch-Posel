import { ImageResponse } from 'next/og'

import { Opengraph } from '@/components/global/ui-meta/Opengraph'
export const alt = 'Hi there!'
export const size = {
	width: 1200,
	height: 630,
}
export const runtime = 'edge'

export default function Image() {
	return new ImageResponse(
		(
			<Opengraph
				description='Dowiedz się więcej o Weronice Smarduch, jej doświadczeniu, pasjach i zaangażowaniu w życie polityczne. Poznaj jej drogę do Sejmu i główne cele działalności poselskiej.'
				title='O mnie'
			/>
		),
	)
}
