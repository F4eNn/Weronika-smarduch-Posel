import React from 'react'

import Link from 'next/link'

import Facebook from '../../../../public/icons/facebook.svg'
import Instagram from '../../../../public/icons/instagram.svg'
import Twitter from '../../../../public/icons/X.svg'

const socialMedia = [
	{
		icon: <Facebook className='fill-primary hover:fill-secondary' />,
		url: 'https://www.facebook.com/smarduch.weronika',
		label: 'facebook',
	},
	{
		icon: <Instagram className='fill-primary hover:fill-secondary' />,
		url: 'https://www.instagram.com/weronikasmarduch/',
		label: 'instagram',
	},
	{
		icon: <Twitter className='fill-primary hover:fill-secondary' />,
		url: 'https://twitter.com/WSmarduch ',
		label: 'twitter',
	},
]
type SocialMediaLinksProps = {
	gap?: 'gap-8' | 'gap-5'
}
export const SocialMediaLinks = ({ gap = 'gap-5' }: SocialMediaLinksProps) => {
	return (
		<div className={`flex items-center ${gap}`}>
			{socialMedia.map(({ icon, label, url }) => (
				<Link
					key={label}
					aria-label={label}
					target='_blank'
					rel='noopener'
					href={url}
					className='text-4xl transition-all duration-300 hover:scale-110 '
				>
					{icon}
				</Link>
			))}
		</div>
	)
}
