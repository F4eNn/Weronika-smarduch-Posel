import { RootObject } from '@/types/api'
import { fetchApi } from '@/utils/fetch-api'

import { ArticleNewsTypes } from '../News'

export const fetchArticles = async (pageNumber: number = 1) => {
	const path = 'articles'

	const urlParamsObject = {
		sort: ['publishedAt:desc'],
		fields: ['title', 'description', 'publishedAt', 'slug'],
		populate: {
			hero: {
				fields: ['formats', 'alternativeText'],
			},
		},
		pagination: {
			pageSize: 2,
			page: pageNumber,
		},
	}
	const { data, meta } = await fetchApi<RootObject<ArticleNewsTypes>>(path, urlParamsObject)
	return { data, meta }
}
