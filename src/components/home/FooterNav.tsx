'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

import { linksArray } from '@/constants/navigation'

export const FooterNav = () => {
	const currentPathname = usePathname()
	return (
		<ul className='my-10 mt-16 flex flex-col items-center justify-center gap-5 text-lg sm:mt-10 sm:flex-row'>
			{linksArray.map(([url, name], idx) => (
				<li className={`transition-colors duration-200   hover:text-secondary`} key={idx}>
					<Link className={`p-3 ${currentPathname === url ? 'text-secondary' : ''} `} href={url}>
						{name}
					</Link>
				</li>
			))}
		</ul>
	)
}
