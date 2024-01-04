import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { NewsCard } from '../ui/NewsCard'
import { Heading } from '../ui/Heading'
import Added from './Added'
import SeeMoreIcon from '../../../public/see-more.svg'
import { buttonVariants } from '../controls/Button'

type NewsItemProps = {
	even?: boolean
}

export const NewsItem = ({ even = true }: NewsItemProps) => {
	return (
		<NewsCard>
			<div className={`flex h-full gap-16 ${even ? 'flex-row-reverse' : ''}`}>
				<div className={`flex flex-1 flex-col gap-10 p-10 ${even ? 'text-left' : 'text-right'}`}>
					<span className='animate-pulse font-bold text-secondary'>Nowe !</span>
					<Heading as='h2' className={`${even ? 'text-left' : 'text-right'} font-semibold`}>
						Jesteśmy kreatywnymi perfekcjonistami to nas prowadzi do celu.
					</Heading>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo hic dolor sint saepe fugiat veniam llo enim
						est pariatur! Lorem est pariatur! Lorem est pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Quo hic dolor...
					</p>
					<Link
						href='/aktualnosci'
						className={buttonVariants({size: 'small', variant: 'withIcon', className: 'ml-auto text-secondary' })}
					>
						<span className='group-hover:text-secondaryHover'>Czytaj więcej</span>
						<SeeMoreIcon className='fill-secondary group-hover:fill-secondaryHover' />
					</Link>
				</div>
				<div className='relative w-[400px]'>
					<Image src='/test.png' width={350} height={350} className='w-full object-cover' alt='test' />
					<Added isEven={even} />
				</div>
			</div>
		</NewsCard>
	)
}
