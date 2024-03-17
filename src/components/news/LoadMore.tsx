'use client'
import React, { useState } from 'react'

import { useErrorBoundary } from 'react-error-boundary'
import { twMerge } from 'tailwind-merge'

import type { ArticleNewsTypes } from './types'

import { NewsItem } from './components/NewsItem'
import { fetchArticles } from './utils/fetchArticles'
import { Button } from '../controls/Button'
import { LoadingSpinner } from '../global/ui/LoadingSpinner'

export const LoadMore = () => {
	const { showBoundary } = useErrorBoundary<Pick<Error, 'message'>>()
	const [pageNumber, setPageNumber] = useState(2)
	const [articles, setArticles] = useState<ArticleNewsTypes[]>([])
	const [isFull, setIsFull] = useState(false)
	const [isFetching, setIsFetching] = useState(false)

	const loadMoreArticles = async () => {
		try {
			setIsFetching(true)
			const { data, pagination } = await fetchArticles(pageNumber)
			setArticles(prev => [...prev, ...data])
			setPageNumber(prev => prev + 1)
			setIsFull(pagination.page >= pagination.pageCount)
		} catch (error) {
			showBoundary({ message: 'Nie udało się pobrać artykułów' })
		} finally {
			setIsFetching(false)
		}
	}

	return (
		<div>
			<div
				className={twMerge(
					'grid grid-flow-dense grid-cols-2 gap-10 gap-y-24',
					isFull && 'mb-48',
					articles.length > 0 && 'mt-24',
				)}
			>
				{articles.map((article, idx) => {
					return <NewsItem isNew={false} even={idx % 2 === 1} key={article.id} {...article} />
				})}
			</div>
			<div className='mt-24'>
				{!isFull && !isFetching && (
					<Button variant={'primary'} size={'small'} onClick={loadMoreArticles} className='mx-auto'>
						Załaduj więcej
					</Button>
				)}
				{isFetching && <LoadingSpinner />}
			</div>
		</div>
	)
}
