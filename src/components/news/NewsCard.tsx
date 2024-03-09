import React from 'react'

import { ChildrenWithProps } from '@/types/general'

export const NewsCard = ({ children }: ChildrenWithProps) => {
	return <div className='lg:light-shadow col-span-2  overflow-hidden rounded-sm bg-white shadow-md  md:col-span-1 lg:col-span-2 lg:h-[400px] '>{children}</div>
}
