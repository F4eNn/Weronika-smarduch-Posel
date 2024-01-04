import qs from 'qs'

export const fetchAPI = async (path: string, urlParamsObject = {}, options = {}) => {
	try {
		const mergedOptions = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_STRAPI_TOKEN}`,
				...options,
			},
		}
		const queryString = qs.stringify(urlParamsObject)
		const reqURL = `${process.env.NEXT_STRAPI_URL}/api/articles${queryString ? `?${queryString}` : ''}`

		const res = await fetch(reqURL, mergedOptions)
        
        if(!res.ok) {
            throw new Error('Invalid response')
        }
		const data = await res.json()

		return data
	} catch (error) {
		console.error(error)
	}
}
