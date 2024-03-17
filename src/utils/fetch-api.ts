import qs from 'qs'

type ApiResponse<T> = T

export const fetchApi = async <T>(path: string, urlParamsObject = {}, options = {}): Promise<ApiResponse<T>> => {
	try {
		const mergedOptions = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
				...options,
			},
		}
		const queryString = qs.stringify(urlParamsObject)
		const reqUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${path}${queryString ? `?${queryString}` : ''}`

		const res = await fetch(reqUrl, mergedOptions)

		if (!res.ok) {
			throw new Error(`Coś poszło nie tak ~ ${res.status}`)
		}
		const data = await res.json()
		return data
	} catch (error) {
		console.error(error)
		throw error
	}
}
