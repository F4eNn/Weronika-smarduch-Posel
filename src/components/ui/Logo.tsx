import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { navigation } from '@/constants/navigation'
export const Logo = () => {
	return (
		<Link href={navigation.home.path} aria-label={navigation.home.label} className='relative aspect-[6] w-[200px] '>
			<Image src='/weronika-minify/logo.webp' alt='Weronika Smarduch logo' fill />
		</Link>
	)
}
