import React from 'react'

import { Article } from '@/components/news/article/Article'
import { Section } from '@/components/ui/Section'
import { Wrapper } from '@/components/ui/Wrapper'

type ParamsType = {
	params: { slug: string }
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
