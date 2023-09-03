import React from 'react'

import { Wrapper } from '../ui/Wrapper'
import { DesktopNav } from '../ui/DesktopNav'

export const Footer = () => {
	return (
		<footer className='mt-auto w-full border-t border-darkBlue py-16'>
			<Wrapper>
				<DesktopNav isFooter={true} />
			</Wrapper>
		</footer>
	)
}
{
	/* <p>Skontaktuj się z nami, klikając <a href="mailto:mateusz4k@outlook.com">tutaj</a>.</p> */
}
