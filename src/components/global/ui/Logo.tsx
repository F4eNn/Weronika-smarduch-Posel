import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { navigation } from '@/constants/navigation'

export const Logo = () => {
	return (
		<Link href={navigation.home.path} aria-label={navigation.home.label} className='relative aspect-[6] w-[200px] '>
			<Image
				src='/weronika-minify/logo.webp'
				alt='Weronika Smarduch logo'
				fill
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</Link>
	)
}
