import React from 'react'

import { ChildrenWithProps } from '@/types/general'


export const Wrapper = ({children}: ChildrenWithProps) => {
  return (
    <div className='mx-auto max-w-[1440px] w-full'>{children}</div>
  )
}
