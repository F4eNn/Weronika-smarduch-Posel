import React, { ComponentProps } from 'react'

import { ChildrenWithProps } from '@/types/general'
import { cn } from '@/utils/cn'

type HeadingProps = ChildrenWithProps &
	Pick<ComponentProps<'h1'>, 'className'> & {
		as: 'h1' | 'h2' | 'h3' | 'h4'
	}

export const Heading = ({ as, children, className }: HeadingProps) => {
	if (as === 'h1') {
		return <h1 className={cn('text-center text-4xl font-bold text-darkBlue', className)}>{children}</h1>
	}
	if (as === 'h2') {
		return (
			<h2 className={cn('text-center text-xl text-darkBlue font-[500] lg:text-2xl', className)}>
				{children}
			</h2>
		)
	}
	if (as === 'h3') {
		return <h3 className={cn(`text-center text-xl font-bold text-darkBlue `, className)}>{children}</h3>
	}
	return <div>Heading</div>
}
