import React from 'react'

import { Heading } from '../global/ui/Heading'
import { HeartIcon } from '../home/activities/HeartIcon'

export const Meintenance = () => {
	return (
		<div className=' relative mx-auto mt-10 max-w-2xl space-y-10 text-center'>
			<Heading as='h1'>Przerwa techniczna </Heading>
			<div>
				<HeartIcon className='-right-12 -top-28 hidden  lg:block' />
				<Heading as='h4' className='mb-5 text-black'>
					Przepraszamy, nasza strona jest aktualnie niedostępna z powodu prac konserwacyjnych.
				</Heading>
				<Heading as='h4' className='text-black'>
					Pracujemy nad tym, aby wszystko wróciło do normy jak najszybciej. Dziękujemy za cierpliwość!
				</Heading>
			</div>
		</div>
	)
}
