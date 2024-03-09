import React from 'react'

import { Metadata } from 'next'

import { AboutMe } from '@/components/about/AboutMe'

export const metadata: Metadata = {
	title: 'O mnie',
	description: 'Dowiedz się więcej o Weronice Smarduch, jej doświadczeniu, pasjach i zaangażowaniu w życie polityczne. Poznaj jej drogę do Sejmu i główne cele działalności poselskiej.',
	keywords: ['O mnie', 'Posłanka', 'Biografia', 'Działalność poselska', 'Sejm', 'Weronika Smarduch'],
}

const aboutMePage = () => {
	return (
		<main>
			<AboutMe />
		</main>
	)
}

export default aboutMePage
