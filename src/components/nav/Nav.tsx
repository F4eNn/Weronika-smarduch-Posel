import React from 'react'

import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

export const Nav = () => {
	return (
		<nav className='fixed top-0 z-50 w-full bg-white py-3 text-darkBlue shadow-md  md:px-3 md:py-6'>
			<Mobile />
			<Desktop />
		</nav>
	)
}
