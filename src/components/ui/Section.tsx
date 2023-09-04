import React from 'react'

import { ChildrenWithProps } from '@/types/general'
import { RevealAnimation } from './RevealAnimation'

export const Section = ({ children }: ChildrenWithProps) => {
	return (
		<RevealAnimation>
			<section className='mx-4 mb-20 mt-20 text-darkBlue'>{children}</section>
		</RevealAnimation>
	)
}
