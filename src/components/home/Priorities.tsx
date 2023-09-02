import React from 'react'

import { Wrapper } from '../ui/Wrapper'
import { priorities } from '@/constants/priorities'
import { PrioritieCard } from '../ui/PrioritieCard'

export const Priorities = () => {
	return (
		<section className=' custom-shadow relative mx-8 mt-[350px]  rounded-md bg-white py-32 '>
			<Wrapper>
				<div>
					<h2 className='text-darkBlue mb-32 text-center text-5xl font-[500]'>Moje priorytety</h2>
					<div className='space-y-28'>
						{priorities.map((items, idx) => {
							if (idx % 2 !== 0) {
								return <PrioritieCard key={idx} {...items} bg='bg-secondary' marginLeft='ml-auto' />
							}
							return <PrioritieCard key={idx} {...items} />
						})}
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
