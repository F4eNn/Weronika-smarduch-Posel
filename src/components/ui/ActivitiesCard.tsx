'use client'
import React from 'react'

import HeartIcon from '../../../public/serce.svg'
import { motion } from '@/lib/motion'
import { pulseAnimation } from '@/animations/animations'

type ActivitiesCardProps = {
	title: string
	desc: string
	isHeart?: boolean
}

export const ActivitiesCard = ({ desc, title, isHeart = false }: ActivitiesCardProps) => {
	return (
		<div
			className={` flex-1 space-y-20 rounded-md border-[1px] border-darkBlue p-8 text-darkBlue  transition-transform duration-300 hover:scale-[1.012] `}
		>
			<div className='space-y-10'>
				<h3 className='text-2xl font-[500] md:text-3xl'>{title}</h3>
				<p className='text-xl '>{desc}</p>
			</div>
			{isHeart && (
				<motion.div {...pulseAnimation} className='ml-5 w-[200px]'>
					<div className=' rotate-45'>
						<HeartIcon />
					</div>
				</motion.div>
			)}
		</div>
	)
}
