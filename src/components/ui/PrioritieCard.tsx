import React, { ReactNode } from 'react'
import { MdHiking } from 'react-icons/md'

interface PrioritiesCardProps {
	title: string
	desc: string
	icon: ReactNode
	marginLeft?: 'ml-auto'
	bg?: 'bg-primary' | 'bg-secondary'
}

export const PrioritieCard = ({ title, desc, icon, marginLeft, bg = 'bg-primary' }: PrioritiesCardProps) => {
	return (
		<div
			className={`${bg} flex h-[500px] xl:w-max items-center gap-20 w-full  justify-center ${marginLeft} rounded-2xl p-12   text-center text-white drop-shadow-lg`}
		>
			<div className='max-w-[650px] space-y-10 text-left'>
				<h3 className=' text-3xl font-bold '>{title}</h3>
				<p className=' text-lg'>{desc}</p>
			</div>
			<div className='text-[15em]'>{icon}</div>
		</div>
	)
}
