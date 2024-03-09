import React from 'react'

import { activites } from '@/constants/activities'

import { ActivitiesCard } from './ActivitiesCard'
import { Heading } from '../../global/ui/Heading'
import { Wrapper } from '../../global/ui/Wrapper'

export const Activities = () => {
	const { firstCard } = activites
	const { secondCard } = activites
	const { thirdCard } = activites
	const { fourthCard } = activites
	return (
		<section className='mx-5 mb-48 mt-32'>
			<Wrapper>
				<Heading as='h2' className='mb-32 text-3xl lg:text-5xl'>
					Działania
				</Heading>
				<div className='space-y-12'>
					<div className='flex flex-col justify-between gap-12 lg:flex-row'>
						<ActivitiesCard {...fourthCard} isHeart={true} />

						<div className='flex flex-1 flex-col gap-12'>
							<ActivitiesCard {...firstCard} />
							<ActivitiesCard {...secondCard} />
						</div>
					</div>
					<div className='lg:text-center'>
						<ActivitiesCard {...thirdCard} />
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
