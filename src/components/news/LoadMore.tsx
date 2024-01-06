'use client'
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { fetchArticles } from './fetchArticles'
import { Data } from '@/types/api'
import { ArticleNewsTypes } from './News'
import { NewsItem } from './NewsItem'
import { LoadingSpinner } from '../ui/LoadingSpinner'

export const LoadMore = () => {
	const { ref, inView } = useInView({rootMargin: '375px'})
    
	const [pageNumber, setPageNumber] = useState(2)
	const [articles, setArticles] = useState<Data<ArticleNewsTypes>[]>([])
	const [isFull, setIsFull] = useState(false)
	const [isFetching, setIsFetching] = useState(false)

	const loadMoreArticles = async () => {
		try {
			setIsFetching(true)
			const { data, meta } = await fetchArticles(pageNumber)
			setArticles(prev => [...prev, ...data])
			setPageNumber(prev => prev + 1)
			setIsFull(getTotalArticles(articles.length, meta.pagination.total))
		} catch (error) {
			console.error(error)
		} finally {
			setIsFetching(false)
		}
	}

	const getTotalArticles = (articlesArr: number, totalArticles: number) => {
		const initialArticles = 2
		const existingArticles = articlesArr + initialArticles
		return totalArticles <= existingArticles
	}

	useEffect(() => {
		if (inView && !isFull) {
			loadMoreArticles()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inView])

	return (
		<div className=''>
			<div className='my-24 space-y-24'>
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

			<div ref={ref}>{isFetching && <LoadingSpinner />}</div>
		</div>
	)
}
