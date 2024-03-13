import parse from 'html-react-parser'
import Image from 'next/image'

import { SocialMediaLinks } from '@/components/global/ui/SocialMediaLinks'
import { Data } from '@/types/api'
import { formatDate } from '@/utils/api-helpers'
import { getBase64 } from '@/utils/base64'
import { fetchApi } from '@/utils/fetch-api'

import { options } from './options'
import { RelatedLink } from './RelatedLink'
import { getImage } from './utils/getImageFormat'
import { Heading } from '../../global/ui/Heading'
import { ArticleNewsTypes } from '../News'
import { PublishedAt } from '../PublishedAt'

type ArticleProps = {
	param: string
}

type ArticleContent = {
	data: Data<ArticleNewsTypes>
}

type ReletedLink = {
	id: number
	slug: string
	title: string
}
type ResponseReletedLink = {
	nextArticleSlug: ReletedLink
	prevArticleSlug: ReletedLink
}

export const Article = async ({ param }: ArticleProps) => {
	const path = `slugify/slugs/article/${param}`

	const urlParamsObject = {
		fields: ['title', 'description', 'publishedAt', 'post'],
		populate: {
			hero: {
				fields: ['formats', 'alternativeText'],
			},
		},
	}
	const { data } = await fetchApi<ArticleContent>(path, urlParamsObject)
	const { nextArticleSlug, prevArticleSlug } = await fetchApi<ResponseReletedLink>(`articles/nearest/${data.id}`)

	const { description, hero, publishedAt, title, post } = data.attributes

	const formatedDate = formatDate(publishedAt, false)
	const imageUrl = `${process.env.NEXT_PUBLIC_URL}${getImage(hero)}`
	const bluredUrl = await getBase64(imageUrl)

	return (
		<div className='mb-32 xl:mb-48'>
			<div className='flex flex-col gap-14 md:h-[500px] md:flex-row lg:mx-4 2xl:gap-20'>
				<div className='mx-4 flex flex-col gap-10 md:w-1/2  lg:mx-0 xl:gap-16'>
					<PublishedAt isEven={false} position='static' date={formatedDate} />
					<div className='space-y-8 md:space-y-12'>
						<Heading as='h1' className='text-left'>
							{title}
						</Heading>
						<p className='text-sm lg:text-base'>{description}</p>
					</div>
				</div>
				<div className='h-[350px] w-full md:h-auto md:w-1/2'>
					<Image
						src={imageUrl}
						placeholder='blur'
						blurDataURL={bluredUrl}
						alt=''
						width={450}
						height={450}
						className='size-full rounded-sm object-cover'
					/>
				</div>
			</div>
			<div className='mx-4 -mt-16 grid grid-cols-4 gap-y-20 md:mt-20 xl:gap-10'>
				<div className='col-span-4 mx-auto space-y-10 rounded-md bg-white p-5 shadow-2xl lg:container sm:p-10 xl:col-span-3'>
					{parse(post, options)}
				</div>
				<div className='max-xl:col-span-4 '>
					<div className='sticky top-[100px] truncate'>
						<div className=' h-1 w-[125px] rounded-full bg-secondary xl:h-2 xl:w-auto'></div>
						<Heading as='h3' className='my-3.5 text-left font-medium text-black'>
							Powiązane artykuły
						</Heading>
						<hr />
						<RelatedLink
							href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/aktualnosci/${nextArticleSlug.slug}`}
							title={nextArticleSlug.title}
						/>
						<hr />
						<RelatedLink
							href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/aktualnosci/${prevArticleSlug.slug}`}
							title={prevArticleSlug.title}
						/>
						<hr />
						<div className='hidden xl:block '>
							<Heading as='h4' className='my-3.5 mb-5  text-black'>
								Zobacz również
							</Heading>
							<SocialMediaLinks gap='gap-8' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
