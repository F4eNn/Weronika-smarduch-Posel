import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/utils/api-helpers'

import { NewsCard } from './NewsCard'
import { PublishedAt } from './PublishedAt'
import SeeMoreIcon from '../../../public/icons/see-more.svg'
import { buttonVariants } from '../controls/Button'
import { Heading } from '../global/ui/Heading'

type NewsItemProps = {
	even?: boolean
	isNew: boolean
	description: string
	title: string
	imageUrl: string
	publishedAt: string
	slug: string
}

export const NewsItem = ({ even = false, isNew, slug, description, title, imageUrl, publishedAt }: NewsItemProps) => {
	const date = formatDate(publishedAt)
	return (
		<NewsCard>
			<div className={`flex h-full gap-3 max-lg:flex-col lg:gap-16 ${!even ? 'flex-row-reverse' : ''}`}>
				<div className='relative h-[300px] w-full lg:h-full lg:w-[400px]'>
					<Image
						src={`${process.env.NEXT_PUBLIC_URL}${imageUrl}`}
						width={450}
						height={450}
						className='size-full object-cover'
						alt='test'
					/>
					<PublishedAt isEven={even} date={date} />
				</div>
				<div className={`flex flex-1 flex-col gap-5 p-5 lg:p-10 ${even ? 'text-left' : 'lg:text-right'}`}>
					{isNew && <span className='animate-pulse font-bold text-secondary'>Nowe !</span>}
					<Heading as='h2' className={`${even ? 'text-left' : 'text-left lg:text-right'} line-clamp-2 font-semibold`}>
						{title}
					</Heading>
					<p className='line-clamp-3 text-sm lg:text-base'>{description}</p>
					<Link
						href={`/aktualnosci/${slug}`}
						className={buttonVariants({
							size: 'small',
							variant: 'withIcon',
							className: 'ml-auto mt-auto text-secondary ',
						})}
					>
						<span className='group-hover:text-secondaryHover'>Czytaj więcej</span>
						<SeeMoreIcon className='fill-secondary group-hover:fill-secondaryHover' />
					</Link>
				</div>
			</div>
		</NewsCard>
	)
}
