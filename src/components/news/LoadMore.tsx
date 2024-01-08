'use client'
import React, { useState, useEffect, useRef } from 'react'

import { fetchArticles } from './fetchArticles'
import { Data } from '@/types/api'
import { ArticleNewsTypes } from './News'
import { NewsItem } from './NewsItem'
import { LoadingSpinner } from '../ui/LoadingSpinner'
import { useObserver } from '@/hooks/use-observer'

export const LoadMore = () => {
	const [pageNumber, setPageNumber] = useState(2)
	const [articles, setArticles] = useState<Data<ArticleNewsTypes>[]>([])
	const [isFull, setIsFull] = useState(false)
	const [isFetching, setIsFetching] = useState(false)

	const containerRef = useRef<HTMLDivElement>(null)
	const { isVisible } = useObserver(containerRef)

	const loadMoreArticles = async () => {
		try {
			setIsFetching(true)
			const { data, meta } = await fetchArticles(pageNumber)
			setArticles(prev => [...prev, ...data])
			setPageNumber(prev => prev + 1)

			setIsFull(getTotalArticles(articles.length, meta.pagination.total))
			setIsFetching(false)
		} catch (error) {
			console.error(error)
		}
	}
	const getTotalArticles = (articlesArr: number, totalArticles: number) => {
		const initialArticles = 2
		const existingArticles = articlesArr + initialArticles
		return totalArticles <= existingArticles
	}

	useEffect(() => {
		if (isVisible && !isFull && !isFetching) {
			loadMoreArticles()
		}
		return () => {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isVisible])

	return (
		<div className=''>
			<div className='my-24 grid grid-flow-dense grid-cols-2 gap-10 gap-y-24 '>
				{articles.map(({ attributes, id }, idx) => {
					return (
						<NewsItem
							isNew={false}
							even={idx % 2 === 1}
							key={id}
							{...attributes}
							imageUrl={attributes.hero.data.attributes.formats.small.url}
						/>
					)
				})}
			</div>
			<div ref={containerRef}>{isFetching && <LoadingSpinner />}</div>
		</div>
	)
}
