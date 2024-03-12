import React from 'react'

import { Metadata } from 'next'

import { Section } from '@/components/global/ui/Section'
import { Wrapper } from '@/components/global/ui/Wrapper'
import { Article } from '@/components/news/article/Article'
import { FALLBACK_SEO } from '@/constants/fallback-seo'
import { Data } from '@/types/api'
import { fetchApi } from '@/utils/fetch-api'

type ParamsType = {
	params: { slug: string }
}
type SeoTypes = {
	metaTitle: string
	metaDescription: string
	keywords: string[]
}
type MetadataApiTypes = {
	data: Data<{ seo: SeoTypes }>
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
	const page = await fetchApi<MetadataApiTypes>(path, urlParamsObject)
	if (!page.data.attributes.seo) return FALLBACK_SEO
	const { keywords, metaDescription, metaTitle } = page.data.attributes.seo

	return {
		title: metaTitle,
		description: metaDescription,
		keywords,
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
