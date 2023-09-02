import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { navigation } from '@/constants/navigation'
export const Logo = () => {
	return (
		<Link href={navigation.home.path} aria-label={navigation.home.label}>
			<Image src='/logo.png' alt='' width={225} height={70} />
		</Link>
	)
}
