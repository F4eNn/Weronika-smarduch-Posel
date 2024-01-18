import { MetadataRoute } from 'next'

import { fetchAPI } from '@/utils/fetch-api'
import { RootObject } from '@/types/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://www.weronika-smarduch.pl/'
	const aboutMe = 'https://www.weronika-smarduch.pl/o-mnie'
	const team = 'https://www.weronika-smarduch.pl/zespol'
	const contact = 'https://www.weronika-smarduch.pl/kontakt'

	const path = 'articles'
	const urlParamsObject = {
		fields: ['slug', 'updatedAt'],
	}

	const articles = await fetchAPI<RootObject<{ slug: string; updatedAt: Date }>>(path, urlParamsObject)
	const articlesUrl = articles.data.map(i => {
		return {
			url: `${baseUrl}aktualnosci/${i.attributes.slug}`,
			lastModified: i.attributes.updatedAt,
		}
	}) ?? []

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: aboutMe,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: team,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: contact,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		...articlesUrl
	]
}
