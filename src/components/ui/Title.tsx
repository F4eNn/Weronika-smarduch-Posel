import React from 'react'

type TitleProps = {
	title: string
}

export const Title = ({ title }: TitleProps) => {
	return <h1 className='text-4xl font-bold text-darkBlue md:text-5xl'>{title}</h1>
}
