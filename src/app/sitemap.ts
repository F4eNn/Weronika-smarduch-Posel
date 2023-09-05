import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://kandydatka-do-sejmu-strona.vercel.app/'
	const aboutMe = 'https://kandydatka-do-sejmu-strona.vercel.app/o-mnie'
	const team = 'https://kandydatka-do-sejmu-strona.vercel.app/zespol'
	const contact = 'https://kandydatka-do-sejmu-strona.vercel.app/kontakt'
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
