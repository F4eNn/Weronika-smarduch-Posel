import React from 'react'
import Image from 'next/image'

type ActivitiesCardProps = {
	title: string
	desc: string
}

export const ActivitiesCard = ({ desc, title }: ActivitiesCardProps) => {
	return (
		<div
			className={` flex-1 space-y-10 rounded-md border-[1px] border-darkBlue p-8 text-darkBlue  transition-transform duration-300 hover:scale-105 `}
		>
			<h3 className='text-2xl font-[500] md:text-3xl'>{title}</h3>
			<p className='text-xl '>{desc}</p>
		</div>
	)
}
