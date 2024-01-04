import React from 'react'

import { ChildrenWithProps } from '@/types/general'

export const NewsCard = ({children}: ChildrenWithProps) => {
  return (
    <div className='bg-white light-shadow h-[400px] '>{children}</div>
  )
}