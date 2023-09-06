import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://www.weronika-smarduch.pl/'
	const aboutMe = 'https://www.weronika-smarduch.pl/o-mnie'
	const team = 'https://www.weronika-smarduch.pl/zespol'
	const contact = 'https://www.weronika-smarduch.pl/kontakt'
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
	]
}
