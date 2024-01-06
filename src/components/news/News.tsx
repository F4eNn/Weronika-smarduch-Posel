import React from 'react'

import { NewsItem } from './NewsItem'
import { fetchAPI } from '@/utils/fetch-api'
import { RootObject } from '@/types/api'

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
	const path = 'articles'

	const urlParamsObject = {
		sort: ['publishedAt:desc'],
		fields: ['title', 'description', 'publishedAt'],
		populate: {
			hero: {
				fields: ['formats', 'alternativeText'],
			},
		},
	}
	const { data } = await fetchAPI<RootObject<ArticleNewsTypes>>(path, urlParamsObject)
	return (
		<div className='space-y-24'>
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
	)
}
