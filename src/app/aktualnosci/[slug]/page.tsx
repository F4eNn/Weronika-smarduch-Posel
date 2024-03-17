import React from 'react'

import { Metadata } from 'next'

import { Section } from '@/components/global/ui/Section'
import { Wrapper } from '@/components/global/ui/Wrapper'
import { Article } from '@/components/news/article/Article'
import { ArticleContentTypes } from '@/components/news/article/types'
import { FALLBACK_SEO } from '@/constants/fallback-seo'
import { fetchApi } from '@/utils/fetch-api'

type ParamsType = {
	params: { slug: string }
}

export async function generateMetadata({ params }: ParamsType): Promise<Metadata> {
	const path = `articles/${params.slug}`

	const { seo } = await fetchApi<ArticleContentTypes>(path)
	if (!seo) return FALLBACK_SEO

	return {
		title: seo.metaTitle,
		description: seo.metaDescription,
		keywords: seo.keywords,
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
