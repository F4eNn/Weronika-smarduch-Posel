import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { NewsCard } from '../ui/NewsCard'
import { Heading } from '../ui/Heading'
import Added from './Added'
import SeeMoreIcon from '../../../public/see-more.svg'
import { buttonVariants } from '../controls/Button'
import { formatDate } from '@/utils/api-helpers'

type NewsItemProps = {
	even?: boolean
	isNew: boolean
	description: string
	title: string
	imageUrl: string
	publishedAt: string
}

export const NewsItem = ({ even = false, isNew, description, title, imageUrl, publishedAt }: NewsItemProps) => {
	const date = formatDate(publishedAt)
	return (
		<NewsCard>
			<div className={`flex h-full max-lg:flex-col gap-3 lg:gap-16 ${!even ? 'flex-row-reverse' : ''}`}>
				<div className='relative h-[300px] w-full lg:h-full lg:w-[400px]'>
					<Image src={imageUrl} width={450} height={450} className='h-full w-full object-cover' alt='test' />
					<Added isEven={even} date={date} />
				</div>
				<div className={`flex flex-1 flex-col gap-5 p-5 lg:p-10 ${even ? 'text-left' : 'lg:text-right'}`}>
					{isNew && <span className='animate-pulse font-bold text-secondary'>Nowe !</span>}
					<Heading as='h2' className={`${even ? 'text-left' : 'lg:text-right text-left'} line-clamp-2 font-semibold`}>
						{title}
					</Heading>
					<p className='line-clamp-3 text-sm lg:text-base'>{description}</p>
					<Link
						href={`/aktualnosci/${title}`}
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
