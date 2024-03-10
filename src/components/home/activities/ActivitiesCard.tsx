'use client'
import React from 'react'

import { Card } from './Card'

type ActivitiesCardProps = {
	title: string
	desc: string
}

export const ActivitiesCard = ({ desc, title }: ActivitiesCardProps) => {
	return (
		<Card className='min-h-full flex-1 space-y-20 border-darkBlue'>
			<div className='space-y-10'>
				<h3 className='text-2xl font-[500] md:text-3xl'>{title}</h3>
				<p className='text-xl '>{desc}</p>
			</div>
		</Card>
	)
}
