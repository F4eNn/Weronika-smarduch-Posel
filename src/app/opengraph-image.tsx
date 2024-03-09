import { ImageResponse } from 'next/og'

import { Opengraph } from '@/components/global/ui-meta/Opengraph'

export const runtime = 'edge'

export const size = {
	width: 1200,
	height: 630,
}

export default function Image() {
	return new ImageResponse(
		(
			<Opengraph
				description='Weronika Smarduch Kandydatka do Sejmu Rzeczpospolitej Polskiej z okręgu Sądecko-Podhalańskiego. Nr 1 na liście koalicji Obywatelskiej'
				title='Strona główna'
			/>
		),
	)
}
