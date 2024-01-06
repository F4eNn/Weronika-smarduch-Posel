import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { News } from '@/components/news/News'
import { Section } from '@/components/ui/Section'
import { Wrapper } from '@/components/ui/Wrapper'
import { Heading } from '@/components/ui/Heading'
import { Error } from '@/components/news/Error'
import { LoadMore } from '@/components/news/LoadMore'

const NewsPage = () => {
	return (
		<main>
			<Section>
				<Wrapper className='max-w-[1200px]'>
					<div className='my-24'>
						<Heading as='h1'>Aktualności</Heading>
					</div>
					<ErrorBoundary fallback={<Error />}>
						<News />
					</ErrorBoundary>
					<LoadMore />
				</Wrapper>
			</Section>
		</main>
	)
}

export default NewsPage
