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
		<div>
			<div className='flex max-h-[450px] gap-20'>
				<div className='flex w-1/2 flex-col gap-24 '>
					<Added isEven={false} position='static' date={formatedDate} />
					<div className='space-y-14'>
						<Heading as='h1' className='text-left'>
							{title}
						</Heading>
						<p>{description}</p>
					</div>
				</div>
				<div className='w-1/2 '>
					<Image
						src={imageURL}
						placeholder='blur'
						blurDataURL={bluredURL}
						alt=''
						width={450}
						height={450}
						className='h-[450px] w-full rounded-sm object-cover'
					/>
				</div>
			</div>
			<div className='mt-20 grid grid-cols-4 gap-10'>
				<div className='col-span-3 space-y-10 bg-white p-10 shadow-2xl'>{parse(post, options)}</div>
				<div>
					<div className='sticky top-[100px] '>
						<div className='h-2 w-full rounded-full bg-secondary '></div>
						<Heading as='h3' className='my-3.5 text-left font-medium text-black'>
							Powiązane artykuły
						</Heading>
						<hr />
						<RelatedLink href='/' title='jakiś link' />
						<hr />
						<RelatedLink href='/' title='jakiś link długi link z domeną' />
						<hr />
						<Heading as='h4' className='my-3.5 mb-5  text-black'>
							Zobacz również
						</Heading>
						<SocialMediaLinks gap='gap-8' />
					</div>
				</div>
			</div>
		</div>
	)
}
