'use client'
import React from 'react'

import { activites } from '@/constants/activities'

import { ActivitiesCard } from './ActivitiesCard'
import { HeartIcon } from './HeartIcon'
import { TiltEffect } from './TiltEffect'
import { Heading } from '../../global/ui/Heading'
import { Wrapper } from '../../global/ui/Wrapper'

export const Activities = () => {
	const { firstCard, fourthCard, secondCard, thirdCard } = activites

	return (
		<section className='mx-5 mb-48 mt-32'>
			<Wrapper>
				<Heading as='h2' className='mb-32 text-3xl lg:text-5xl'>
					Działania
				</Heading>
				<div className='relative grid gap-14 lg:grid-cols-2 lg:gap-10 '>
					<TiltEffect>
						<ActivitiesCard {...firstCard} />
					</TiltEffect>
					<TiltEffect>
						<ActivitiesCard {...secondCard} />
					</TiltEffect>
					<TiltEffect>
						<ActivitiesCard {...fourthCard} />
					</TiltEffect>
					<TiltEffect>
						<ActivitiesCard {...thirdCard} />
					</TiltEffect>
					<HeartIcon rightSide/>
				</div>
			</Wrapper>
		</section>
	)
}
