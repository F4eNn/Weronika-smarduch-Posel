import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { NewsCard } from '../ui/NewsCard'
import { Heading } from '../ui/Heading'
import Added from './Added'
import SeeMoreIcon from '../../../public/see-more.svg'
import { buttonVariants } from '../controls/Button'
import { formatDate } from '@/utils/api-helpers'
import { getBase64 } from '@/utils/base64'

type NewsItemProps = {
	even?: boolean
	isNew: boolean
	description: string
	title: string
	imageUrl: string
	publishedAt: string
}

export const NewsItem = async ({ even = false, isNew, description, title, imageUrl, publishedAt }: NewsItemProps) => {
	const date = formatDate(publishedAt)
	const blurDataUrl = await getBase64(imageUrl)

	return (
		<NewsCard>
			<div className={`flex h-full gap-16 ${even ? 'flex-row-reverse' : ''}`}>
				<div className={`flex flex-1 flex-col gap-10 p-10 ${even ? 'text-left' : 'text-right'}`}>
					{isNew && <span className='animate-pulse font-bold text-secondary'>Nowe !</span>}
					<Heading as='h2' className={`${even ? 'text-left' : 'text-right'} font-semibold float-none`}>
						{title}
					</Heading>
					<p className='line-clamp-3'>{description}</p>
					<Link
						href={`/aktualnosci/${title}`}
						className={buttonVariants({
							size: 'small',
							variant: 'withIcon',
							className: 'ml-auto mt-auto text-secondary',
						})}
					>
						<span className='group-hover:text-secondaryHover'>Czytaj więcej</span>
						<SeeMoreIcon className='fill-secondary group-hover:fill-secondaryHover' />
					</Link>
				</div>
				<div className='relative w-[400px]'>
					<Image
						src={imageUrl}
						width={450}
						height={450}
						className='h-full w-full object-cover'
						alt='test'
						blurDataURL={blurDataUrl}
						placeholder='blur'
					/>
					<Added isEven={even} date={date} />
				</div>
			</div>
		</NewsCard>
	)
}
