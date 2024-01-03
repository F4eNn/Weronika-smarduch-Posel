import React from 'react'

import { Wrapper } from '../ui/Wrapper'
import { activites } from '@/constants/activities'
import { ActivitiesCard } from '../ui/ActivitiesCard'
import { Heading } from '../ui/Heading'

export const Activities = () => {
	const firstCard = activites.firstCard
	const secondCard = activites.secondCard
	const thirdCard = activites.thirdCard
	const fourthCard = activites.fourthCard
	return (
		<section className='mx-5 mt-32 mb-48'>
			<Wrapper>
				<Heading as='h2' className='mb-32 text-3xl lg:text-5xl'>Działania</Heading>
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
