import React from 'react'
import { Metadata } from 'next'

import { People } from '@/components/people/People'

export const metadata: Metadata = {
	title: 'Zespół',
	description: 'Poznaj zespół wspierający Posłankę Weronikę Smarduch w Sejmie',
	keywords: ['zespół', 'Weronika Smarduch'],
}
const TeamPage = () => {
	return (
		<main>
			<People />
		</main>
	)
}

export default TeamPage
