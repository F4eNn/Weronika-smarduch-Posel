import React from 'react'

import { ChildrenWithProps } from '@/types/general'
import { RevealAnimation } from './RevealAnimation'
import { cn } from '@/utils/cn'

export const Section = ({ children, className }: ChildrenWithProps & {className?: string}) => {
	return (
		<RevealAnimation>
			<section className={cn('mx-4 mb-20 mt-20 text-darkBlue', className)}>{children}</section>
		</RevealAnimation>
	)
}
