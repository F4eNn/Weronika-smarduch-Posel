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
				description='Skontaktuj się z Weroniką Smarduch, Posłanką na Sejm RP. Znajdziesz tu dane kontaktowe oraz informacje o godzinach przyjęć.'
				title='Kontakt'
			/>
		),
		
	)
}
