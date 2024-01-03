'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Wrapper } from '../ui/Wrapper'
import { linksArray } from '@/constants/navigation'
import { Logo } from '../ui/Logo'

export const Desktop = () => {
	const currentPathname = usePathname()
	return (
		<Wrapper>
			<div className='hidden flex-col items-center justify-between gap-12  md:flex md:flex-row'>
				<Logo />
				<ul className='flex flex-col gap-3.5 lg:gap-10  text-center font-[500] sm:flex-row '>
					{linksArray.map(([url, name], idx) => (
						<li className='transition-colors duration-200 hover:text-secondary' key={idx}>
							<Link className={`p-3.5 text-sm lg:text-base ${currentPathname === url ? 'text-secondary' : ''}`} href={url}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</Wrapper>
	)
}
