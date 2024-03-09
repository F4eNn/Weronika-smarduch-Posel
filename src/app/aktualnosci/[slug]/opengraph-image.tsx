// /* eslint-disable @next/next/no-img-element */
// import { ImageResponse } from 'next/server'

// import { fetchApi } from '@/utils/fetch-api'
// import { Data } from '@/types/api'

// type ApiResponseTypes = {
// 	data: Data<{ title: string; hero: { data: Data<{ url: string; formats: { large: { url: string } } }> } }>
// }

// export default async function Image({ params }: { params: { slug: string } }) {
// 	const path = `slugify/slugs/article/${params.slug}`
// 	const urlObjectParams = {
// 		fields: ['title'],
// 		populate: { hero: { fields: ['formats', 'url'] } },
// 	}
// 	const { data } = await fetchApi<ApiResponseTypes>(path, urlObjectParams)
// 	let urlImage = ''
// 	if (data.attributes.hero.data.attributes.formats.large) {
// 		urlImage = data.attributes.hero.data.attributes.formats.large.url
// 	} else {
// 		urlImage = data.attributes.hero.data.attributes.url
// 	}
// 	const title = data.attributes.title
// 	const newExt = 'png'

// 	const urlArrayLink = urlImage.split('.')
// 	urlArrayLink[urlArrayLink.length - 1] = newExt
// 	const newImageUrl = urlArrayLink.join('.')

// 	return new ImageResponse(
// 		(
// 			<div tw='flex flex-col w-full h-full relative bg-white'>
// 				<div tw='flex relative'>
// 					<img src={newImageUrl} height={450} alt='alt' tw='flex flex-1' />
// 					<div tw='absolute inset-0 bg-black/40'></div>
// 				</div>
// 				<span tw='uppercase m-3.5 text-gray-400 font-[600]'>weronika-smarduch.pl</span>
// 				<h1 tw='h-1/4 m-3.5'>{title}</h1>
// 			</div>
// 		),
// 	)
// }
