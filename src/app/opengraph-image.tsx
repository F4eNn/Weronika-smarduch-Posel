import { ImageResponse } from 'next/server'

import { Opengraph } from '@/components/ui/Opengraph'

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
