import type { ArticleNewsTypes } from '../types'

type HeroFormatTypes = {
	width: number
	height: number
	url: string
}
type HeroFormatSize = 'small' | 'medium' | 'large'

export type ArticleContentTypes = Omit<ArticleNewsTypes, 'slug' | 'thumbnail'> & {
	hero: { [key in HeroFormatSize]: HeroFormatTypes }
    seo: {
        metaTitle: string,
        metaDescription: string,
        keywords: string
    }
}

type ReletedLink = {
	id: number
	slug: string
	title: string
}

export type ResponseReletedLink = {
	nextArticleSlug: ReletedLink
	prevArticleSlug: ReletedLink
}
export type ArticleProps = {
	param: string
}
