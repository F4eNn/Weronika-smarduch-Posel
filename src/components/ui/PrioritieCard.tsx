'use client'
import React, { ReactNode, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'

import { motion } from '@/lib/motion'
import { expandPriorityTextAnimation, priorityCardsAnimation } from '@/animations/animations'
import { Button } from '../controls/Button'
import { Heading } from './Heading'

interface PrioritiesCardProps {
	title: string
	desc: string
	icon: ReactNode
	marginLeft?: 'ml-auto'
	bg?: 'bg-primary' | 'bg-secondary'
	axeX?: '-40px' | '40px'
}

export const PrioritieCard = ({ title, desc, icon, marginLeft, bg = 'bg-primary', axeX }: PrioritiesCardProps) => {
	const [isRoll, setIsRoll] = useState(false)

	const handleRoll = () => {
		setIsRoll(prev => !prev)
	}
	return (
		<motion.div
			{...priorityCardsAnimation(axeX)}
			className={`${bg} flex w-full flex-col  items-center justify-between gap-7  lg:w-max  lg:flex-row ${marginLeft} rounded-2xl p-8 text-center  text-white  lg:p-12`}
		>
			<div className=' mb-auto max-w-[625px] space-y-10 overflow-hidden text-center lg:text-left'>
				<Heading as='h3' className='text-2xl text-left text-white font-bold md:text-3xl lg:w-[625px]'>{title}</Heading>
				<Button onClick={handleRoll} variant={'border'} size={'small'} className='mx-auto lg:mx-0 '>
					{!isRoll ? (
						<>
							Rozwiń <FaArrowDown />
						</>
					) : (
						<>
							Zwiń{' '}
							<span className='rotate-180 transition-all duration-300'>
								<FaArrowDown />
							</span>
						</>
					)}
				</Button>
				<motion.p {...expandPriorityTextAnimation(isRoll)} className={` h-0 text-base lg:text-lg`}>
					{desc}
				</motion.p>
			</div>
			<div className='text-[10em] lg:text-[12em] '>{icon}</div>
		</motion.div>
	)
}
