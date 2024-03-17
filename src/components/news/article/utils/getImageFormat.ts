import type { ArticleContentTypes } from '../types'

export const getImage = ({ large, medium, small }: ArticleContentTypes['hero']) => {
	return large?.url || medium?.url || small.url
}
