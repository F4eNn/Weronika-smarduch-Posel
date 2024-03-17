import React from 'react'

import { ErrorBoundary } from 'react-error-boundary'

import { NewsItem } from './components/NewsItem'
import { LoadMore } from './LoadMore'
import { fetchArticles } from './utils/fetchArticles'
import { ErrorFallback } from '../global/ui/ErrorFallback'

export const News = async () => {
	const { data } = await fetchArticles()
	return (
		<div>
			<div className='grid grid-flow-dense grid-cols-2 gap-10 gap-y-24'>
				{data.map((article, idx) => {
					return <NewsItem isNew={idx === 0} even={idx % 2 === 1} key={article.id} {...article} />
				})}
			</div>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<LoadMore />
			</ErrorBoundary>
		</div>
	)
}
