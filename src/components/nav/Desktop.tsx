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
			<ul className='hidden flex-col items-center justify-between gap-12  md:flex md:flex-row'>
				<li>
					<Logo />
				</li>
				<ul className='flex flex-col gap-10  text-center font-[500] sm:flex-row lg:gap-12 '>
					{linksArray.map(([url, name], idx) => (
						<li className='transition-colors duration-200 hover:text-secondary' key={idx}>
							<Link className={`p-3 ${currentPathname === url ? 'text-secondary' : ''}`} href={url}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</ul>
		</Wrapper>
	)
}
