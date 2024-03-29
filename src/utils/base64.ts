import { getPlaiceholder } from 'plaiceholder'

export const getBase64 = async (image: string) => {
	try {
		const res = await fetch(image)
		if (!res.ok) {
			throw new Error(`Failed to fetch image ${res.status} ${res.statusText}`)
		}
		const buffer = await res.arrayBuffer()

		const { base64 } = await getPlaiceholder(Buffer.from(buffer))

		return base64
	} catch (error) {
		console.error(error)
	}
}
