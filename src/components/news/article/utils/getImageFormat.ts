import { ArticleNewsTypes } from '../../News'

export const getImage = ({ data }: Pick<ArticleNewsTypes['hero'], 'data'>) => {
	const formats = ['large', 'medium', 'small']
	for (const format of formats) {
		const formatKey = format as keyof typeof data.attributes.formats
		if (data.attributes.formats[formatKey]) {
			return data.attributes.formats[formatKey].url
		}
	}
	return data.attributes.formats.small.url
}
