import React from 'react'

import { Metadata } from 'next'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from '@/components/global/ui/ErrorFallback'
import { Heading } from '@/components/global/ui/Heading'
import { Section } from '@/components/global/ui/Section'
import { Wrapper } from '@/components/global/ui/Wrapper'
import { News } from '@/components/news/News'

export const metadata: Metadata = {
	title: 'Aktualności',
	description:
		'Najświeższe informacje i bieżące wydarzenia dotyczące działalności Weroniki Smarduch, Posłanki na Sejm RP. Bądź na bieżąco z inicjatywami, wystąpieniami i pracami parlamentarnymi.',
	keywords: ['Aktualności sejmowe', 'Nowości polityczne', 'Sejm', 'Weronika Smarduch', 'Działalność poselska'],
}

const NewsPage = () => {
	return (
		<main>
			<Section>
				<Wrapper className='max-w-[1200px]'>
					<div className='my-24'>
						<Heading as='h1'>Aktualności</Heading>
					</div>
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<News />
					</ErrorBoundary>
				</Wrapper>
			</Section>
		</main>
	)
}

export default NewsPage
