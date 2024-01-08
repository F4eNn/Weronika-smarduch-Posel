import React from 'react'

import { ChildrenWithProps } from '@/types/general'

export const NewsCard = ({ children }: ChildrenWithProps) => {
	return <div className='light-shadow bg-white col-span-2 md:col-span-1 lg:col-span-2  lg:h-[400px]  '>{children}</div>
}
