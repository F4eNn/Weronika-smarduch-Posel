import React from 'react'
import Image from 'next/image'

type ActivitiesCardProps = {
	title: string
	desc: string
	desc2?: string | undefined
	isSlogan?: boolean
}

export const ActivitiesCard = ({ desc, title, desc2, isSlogan = false }: ActivitiesCardProps) => {
	return (
		<div
			className={` flex-1 space-y-10 rounded-md border-[1px] border-darkBlue p-8 text-darkBlue  transition-transform duration-300 hover:scale-105 `}
		>
			<h3 className='text-2xl font-[500] md:text-3xl'>{title}</h3>
			<p className='text-xl '>{desc}</p>
			{desc2 && <p className='text-xl'>{desc2}</p>}
			{isSlogan && <Image src='/czas-na-zmiane.png' alt='slogan czas na zmiane!' width={400} height={200} />}
		</div>
	)
}
