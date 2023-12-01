import React from 'react'

import { Mobile } from './Mobile'
import { Desktop } from './Desktop'

export const Nav = () => {
	return (
		<nav className='fixed top-0 z-50 w-full shadow-md bg-white py-3 text-darkBlue  md:px-3 md:py-6'>
			<Mobile />
			<Desktop />
		</nav>
	)
}
