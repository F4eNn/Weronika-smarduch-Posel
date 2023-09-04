import React from 'react'

import { ChildrenWithProps } from '@/types/general'

export const Section = ({ children }: ChildrenWithProps) => {
	return <section className='mx-4 mb-20 mt-20 text-darkBlue'>{children}</section>
}
