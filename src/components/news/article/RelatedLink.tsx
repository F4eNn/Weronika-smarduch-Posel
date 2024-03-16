import React from 'react'

import Link from 'next/link'

import LinkIcon from '../../../../public/icons/link-icon.svg'

export const RelatedLink = ({ href, title }: { title: string; href: string }) => {
	return (
		<Link href={href} className={'group flex items-center gap-3 p-3 font-medium text-secondary'}>
			<div>
				<LinkIcon className='fill-secondary group-hover:fill-secondary/75 ' />
			</div>
			<p className='truncate group-hover:text-secondary/75 '>{title} dsdasd asd as d as d asd as dsd dssd sd</p>
		</Link>
	)
}
