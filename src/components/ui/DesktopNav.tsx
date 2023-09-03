import React from 'react'
import Link from 'next/link'

import { Logo } from './Logo'
import { linksArray } from '@/constants/navigation'

type DekstopNavProps = {
	isFooter?: boolean
}

export const DesktopNav = ({ isFooter = false }: DekstopNavProps) => {
	return (
		<ul className={`${isFooter ? 'flex' : 'hidden'} flex-col items-center justify-between gap-12  md:flex md:flex-row`}>
			<li>
				<Logo />
			</li>
			<ul className='flex gap-10 lg:gap-12  font-[500] flex-col sm:flex-row text-center '>
				{linksArray.map(([url, name], idx) => (
					<li className='transition-colors duration-200 hover:text-blue' key={idx}>
						<Link className='p-3 ' href={url}>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</ul>
	)
}
