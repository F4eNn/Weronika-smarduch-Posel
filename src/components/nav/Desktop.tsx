import React from 'react'
import Link from 'next/link'

import { Wrapper } from '../ui/Wrapper'
import { linksArray } from '@/constants/navigation'
import { Logo } from '../ui/Logo'

export const Desktop = () => {
	return (
		<Wrapper>
			<ul className=' hidden items-center justify-between  md:flex'>
				<li>
					<Logo />
				</li>
				<ul className='flex gap-12  font-[500]'>
					{linksArray.map(([url, name], idx) => (
						<li className='hover:text-blue transition-colors duration-200' key={idx}>
							<Link className='p-3 ' href={url}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</ul>
		</Wrapper>
	)
}
