import React from 'react'

import { Mobile } from './Mobile'
import { Desktop } from './Desktop'

export const Nav = () => {
	return (
		<nav className='text-darkBlue py-3  md:mx-3 md:py-5'>
			<Mobile />
			<Desktop />
		</nav>
	)
}
