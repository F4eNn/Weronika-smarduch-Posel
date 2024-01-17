import React from 'react'
import { Metadata } from 'next'

import { Article } from '@/components/news/article/Article'
import { Section } from '@/components/ui/Section'
import { Wrapper } from '@/components/ui/Wrapper'
import { fetchAPI } from '@/utils/fetch-api'
import { Data } from '@/types/api'
import { FALLBACK_SEO } from '@/constants/fallback-seo'

type ParamsType = {
	params: { slug: string }
}
type SeoTypes = {
	metaTitle: string
	metaDescription: string
	keywords: string[]
}
type MetadataApiTypes = {
	data: Data<{ seo: SeoTypes[] }>
}

export async function generateMetadata({ params }: ParamsType): Promise<Metadata> {
	const path = `slugify/slugs/article/${params.slug}`
	const urlParamsObject = {
		populate: {
			seo: {
				fields: ['metaTitle', 'metaDescription', 'keywords'],
			},
		},
	}
	const page = await fetchAPI<MetadataApiTypes>(path, urlParamsObject)
	if (!page.data.attributes?.seo[0]) return FALLBACK_SEO
	const metadata = page.data.attributes.seo[0]

	return {
		title: metadata.metaTitle,
		description: metadata.metaDescription,
		keywords: metadata.keywords,
		alternates: { canonical: `/aktualnosci/${params.slug}` },
	}
}


const ArticlePage = ({ params }: ParamsType) => {
	return (
		<Section className='mx-0'>
			<Wrapper>
				<Article param={params.slug} />
			</Wrapper>
		</Section>
	)
}

export default ArticlePage
