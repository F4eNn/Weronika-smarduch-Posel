import { ImageResponse } from 'next/server'

import { Opengraph } from '@/components/ui/Opengraph'

export default function Image() {
	return new ImageResponse(
		(
			<Opengraph
				description='Poznaj zespół wspierający Posłankę Weronikę Smarduch w Sejmie'
				title='Zespół'
			/>
		),
	)
}
