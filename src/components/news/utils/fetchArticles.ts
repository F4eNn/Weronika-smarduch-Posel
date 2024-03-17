import { RootObject } from '@/types/api'
import { fetchApi } from '@/utils/fetch-api'

import type { ArticleNewsTypes } from '../types'

export const fetchArticles = async (pageNumber: number = 1) => {
	const path = `retrieve-all-articles/${pageNumber}`

	const { data, pagination } = await fetchApi<RootObject<ArticleNewsTypes[]>>(path)

	return { data, pagination }
}
