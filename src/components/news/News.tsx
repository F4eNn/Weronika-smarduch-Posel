import React from 'react'

import { NewsItem } from './NewsItem'
import { fetchArticles } from './fetchArticles'
import { LoadMore } from './LoadMore'

type ImageUrl = {
	url: string
}

type ImageStrapi = {
	formats: {
		large: ImageUrl
		medium: ImageUrl
		small: ImageUrl
	}
}

export type ArticleNewsTypes = {
	title: string
	description: string
	hero: {
		data: {
			attributes: ImageStrapi
		}
	}
	publishedAt: string
	post: string
}

export const News = async () => {
	const { data } = await fetchArticles()
	return (
		<div className='space-y-24'>
			<div className='grid grid-flow-dense grid-cols-2 gap-10 gap-y-24'>
				{data.map(({ attributes, id }, idx) => {
					return (
						<NewsItem
							isNew={idx === 0}
							even={idx % 2 === 1}
							key={id}
							{...attributes}
							imageUrl={attributes.hero.data.attributes.formats.small.url}
						/>
					)
				})}
			</div>
			<LoadMore />
		</div>
	)
}
