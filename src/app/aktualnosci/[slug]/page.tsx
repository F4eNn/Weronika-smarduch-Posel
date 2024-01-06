import React from 'react'

import { Article } from '@/components/news/article/Article'
import { Section } from '@/components/ui/Section'
import { Wrapper } from '@/components/ui/Wrapper'

type ParamsType = {
	params: { slug: string }
}

const ArticlePage = ({ params }: ParamsType) => {
	const decodedUrl = decodeURIComponent(params.slug)
	return (
		<Section>
			<Wrapper>
				<Article param={decodedUrl} />
			</Wrapper>
		</Section>
	)
}

export default ArticlePage
