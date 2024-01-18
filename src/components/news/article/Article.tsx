import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'

import { fetchAPI } from '@/utils/fetch-api'
import { ArticleNewsTypes } from '../News'
import { Data } from '@/types/api'
import Added from '../Added'
import { formatDate } from '@/utils/api-helpers'
import { Heading } from '../../ui/Heading'
import { getBase64 } from '@/utils/base64'
import { SocialMediaLinks } from '../../ui/SocialMediaLinks'
import { RelatedLink } from './RelatedLink'
import { options } from './options'
import { getImage } from './getImageFormat'

type ArticleProps = {
	param: string
}

type ArticleContent = {
	data: Data<ArticleNewsTypes>
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
	const { data } = await fetchAPI<ArticleContent>(path, urlParamsObject)
	const { description, hero, publishedAt, title, post } = data.attributes

	const formatedDate = formatDate(publishedAt, false)
	const imageURL = getImage(hero)
	const bluredURL = await getBase64(imageURL)

	return (
		<div className='mb-32 xl:mb-48'>
			<div className='2xl-gap-20 flex flex-col gap-14 md:h-[500px] md:flex-row lg:mx-4'>
				<div className='mx-4 flex flex-col gap-10 md:w-1/2  lg:mx-0 xl:gap-16'>
					<Added isEven={false} position='static' date={formatedDate} />
					<div className='md:space-12 space-y-8'>
						<Heading as='h1' className='text-left'>
							{title}
						</Heading>
						<p className='text-sm lg:text-base'>{description}</p>
					</div>
				</div>
				<div className='h-[350px] w-full md:h-auto md:w-1/2'>
					<Image
						src={imageURL}
						placeholder='blur'
						blurDataURL={bluredURL}
						alt=''
						width={450}
						height={450}
						className='h-full w-full rounded-sm object-cover'
					/>
				</div>
			</div>
			<div className='mx-4 -mt-16 grid grid-cols-4 gap-y-20 md:mt-20 xl:gap-10'>
				<div className='col-span-4 mx-auto space-y-10 rounded-md bg-white p-5 shadow-2xl lg:container sm:p-10 xl:col-span-3'>
					{parse(post, options)}
				</div>
				<div className='max-xl:col-span-4 '>
					<div className='sticky top-[100px] text-ellipsis  truncate'>
						<div className=' h-1 w-[125px] rounded-full bg-secondary xl:h-2 xl:w-auto'></div>
						<Heading as='h3' className='my-3.5 text-left font-medium text-black'>
							Powiązane artykuły
						</Heading>
						<hr />
						<RelatedLink href='/' title='' />
						<hr />
						<RelatedLink href='/' title='http://localhost:3000/aktualnosci/' />
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
