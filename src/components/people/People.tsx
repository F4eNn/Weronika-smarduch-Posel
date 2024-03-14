import React from 'react'

import { team } from '@/constants/team'

import { CardItem } from './components/CardItem'
import { Heading } from '../global/ui/Heading'
import { Section } from '../global/ui/Section'
import { Wrapper } from '../global/ui/Wrapper'

export const People = () => {
	return (
		<Section>
			<Wrapper>
				<div className='mb-44  text-center'>
					<div className='my-24'>
						<Heading as='h1'>Zespół</Heading>
					</div>
					<div className='grid  grid-cols-2 gap-10 text-darkBlue lg:grid-cols-3'>
						{team.map((props, idx) => {
							return <CardItem key={props.name} {...props} idx={idx} />
						})}
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}
