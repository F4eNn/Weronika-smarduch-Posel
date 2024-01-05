import React from 'react'

import { NewsItem } from './NewsItem'
import { fetchAPI } from '@/utils/fetch-api'
import { getBase64 } from '@/utils/base64'

type ImageStrapi = {
	formats: {
		large: {
			url: string
		}
	}
}
type NewsSection = {
	title: string
	description: string
	slug: string
	hero: {
		data: {
			attributes: ImageStrapi
		}
	}
	publishedAt: string
}

export const News = async () => {
	const path = 'articles'

	const urlParamsObject = {
		sort: ['publishedAt:desc'],
		fields: ['title', 'description', 'slug', 'publishedAt'],
		populate: {
			hero: {
				fields: ['formats', 'alternativeText'],
			},
		},
	}
	const { data } = await fetchAPI<NewsSection>(path, urlParamsObject)
	const imageUrl = data[0].attributes.hero.data.attributes.formats.large.url
	const blurImageUrl = await getBase64(imageUrl)

	return (
		<div className='space-y-24'>
			{data.map(({ attributes, id }, idx) => {
				return (
					<NewsItem
						even={idx % 2 === 1}
						key={id}
						{...attributes}
						imageUrl={attributes.hero.data.attributes.formats.large.url}
						blurUrl={blurImageUrl ? blurImageUrl : ''}
					/>
				)
			})}
		</div>
	)
}
