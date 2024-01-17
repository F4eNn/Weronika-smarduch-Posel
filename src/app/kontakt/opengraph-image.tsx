import { ImageResponse } from 'next/server'

import { Opengraph } from '@/components/ui/Opengraph'

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
