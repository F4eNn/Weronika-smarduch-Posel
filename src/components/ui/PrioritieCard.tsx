'use client'
import React, { ReactNode, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa6'

import { motion } from '@/lib/motion'
import { expandPriorityTextAnimation, priorityCardsAnimation } from '@/animations/animations'

interface PrioritiesCardProps {
	title: string
	desc: string
	icon: ReactNode
	marginLeft?: 'ml-auto'
	bg?: 'bg-primary' | 'bg-secondary'
	axeX?: '-65px' | '65px'
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
				<h3 className=' text-2xl font-bold md:text-3xl lg:w-[625px]'>{title}</h3>
				<button
					onClick={handleRoll}
					className='mx-auto flex items-center gap-3 rounded-3xl border-[1px] border-white px-3 py-2 text-center transition-colors duration-300 hover:bg-white/10 lg:mx-0'
				>
					{!isRoll ? (
						<>
							Rozwiń <FaArrowDown />
						</>
					) : (
						<>
							Zwiń <FaArrowUp />
						</>
					)}
				</button>
				<motion.p {...expandPriorityTextAnimation(isRoll)} className={` h-0 text-base lg:text-lg`}>
					{desc}
				</motion.p>
			</div>
			<div className='text-[10em] lg:text-[12em] '>{icon}</div>
		</motion.div>
	)
}
