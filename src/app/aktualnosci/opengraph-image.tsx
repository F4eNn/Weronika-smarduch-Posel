import { ImageResponse } from 'next/server'

import { Opengraph } from '@/components/ui/Opengraph'

export default function Image() {
	return new ImageResponse(
		(
			<Opengraph
				description='Najświeższe informacje i bieżące wydarzenia dotyczące działalności Weroniki Smarduch, Posłanki na Sejm RP. Bądź na bieżąco z inicjatywami, wystąpieniami i pracami parlamentarnymi.'
				title='Aktualności'
			/>
		),
	)
}
