import React from 'react'

import { priorities } from '@/constants/priorities'

import { PrioritieCard } from './PrioritieCard'
import { Heading } from '../../global/ui/Heading'
import { Wrapper } from '../../global/ui/Wrapper'

export const Priorities = () => {
	return (
		<section className=' custom-shadow relative mx-3 mt-[820px] overflow-x-hidden rounded-xl bg-white py-20 md:mt-[290px] lg:mx-8  lg:mt-[390px] lg:rounded-lg lg:py-32 '>
			<Wrapper>
				<div>
					<Heading as='h2' className='mb-16 text-3xl lg:mb-32 lg:text-5xl'>
						Moje priorytety
					</Heading>
					<div className=' w-full space-y-20 lg:space-y-28'>
						{priorities.map((items, idx) => {
							// eslint-disable-next-line no-magic-numbers
							if (idx % 2 !== 0) {
								return <PrioritieCard key={idx} {...items} axeX='40px' bg='bg-secondary' marginLeft='ml-auto' />
							}
							return <PrioritieCard key={idx} {...items} axeX='-40px' />
						})}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
