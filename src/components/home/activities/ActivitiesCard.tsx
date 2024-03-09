'use client'
import React from 'react'

import { pulseAnimation } from '@/animations/animations'
import { motion } from '@/lib/motion'

import { Card } from './Card'
import HeartIcon from '../../../../public/serce.svg'

type ActivitiesCardProps = {
	title: string
	desc: string
	isHeart?: boolean
}

export const ActivitiesCard = ({ desc, title, isHeart = false }: ActivitiesCardProps) => {
	return (
		<Card className='flex-1 space-y-20 border-darkBlue'>
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
		</Card>
	)
}
