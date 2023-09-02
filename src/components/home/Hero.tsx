import React from 'react'
import Image from 'next/image'

import { Wrapper } from '@/components/ui/Wrapper'

export const Hero = () => {
	return (
		<div className='bg-secondary h-[375px] w-full pt-10'>
			<Wrapper>
				<div className='flex justify-between '>
					<Image src='/Weronika.png' alt='Weronika Smarduch' width={400} height={600} />
					<h1 className='text-white text-6xl text-right mt-12 leading-[5rem]'>Kandydadka do Sejmu RP z okręgu Sądecko-Podhalańskiego. Nr 1 na liście Koalicji Obywatelskiej</h1>
				</div>
			</Wrapper>
		</div>
	)
}
