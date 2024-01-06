import React from 'react'
import Link from 'next/link'

import LinkIcon from '../../../../public/link-icon.svg'
import { buttonVariants } from '../../controls/Button'

export const RelatedLink = ({ href, title }: { title: string; href: string }) => {
	return (
		<Link
			href={href}
			className={buttonVariants({
				size: 'small',
				variant: 'withIcon',
				className: 'group',
			})}
		>
			<LinkIcon className='fill-secondary group-hover:fill-secondary/75' />
			<span className='group-hover:text-secondary/75'>{title}</span>
		</Link>
	)
}
