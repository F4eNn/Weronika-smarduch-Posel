'use client'
import React, { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

import { pulseAnimation } from '@/animations/animations'
import { motion } from '@/lib/motion'

import Heart from '../../../../public/icons/serce.svg'

type HeartIconProps = Pick<ComponentProps<'div'>, 'className'> & {
	rightSide?: boolean
	lefSide?: boolean
}

export const HeartIcon = ({ lefSide, rightSide, className }: HeartIconProps) => {
	return (
		<motion.div
			{...pulseAnimation}
			className={twMerge(
				'absolute  ml-5 w-[200px] hidden sm:block',
				rightSide && '-top-52 right-0 min-[1800px]:-right-40 min-[1800px]:-top-40',
				lefSide && '',
				className,
			)}
		>
			<div className=' rotate-45'>
				<Heart />
			</div>
		</motion.div>
	)
}
