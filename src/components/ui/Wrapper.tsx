import React, { ComponentProps } from 'react'

import { ChildrenWithProps } from '@/types/general'
import { cn } from '@/utils/cn'

type WrapperProps = Pick<ComponentProps<'div'>, 'className'> & ChildrenWithProps

export const Wrapper = ({ children, className }: WrapperProps) => {
	return <div className={cn('mx-auto w-full max-w-[1440px]', className)}>{children}</div>
}
