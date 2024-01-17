import { ImageResponse } from 'next/server'

import { Opengraph } from '@/components/ui/Opengraph'

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
