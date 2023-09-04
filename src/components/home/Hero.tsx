import React from 'react'
import Image from 'next/image'

import { Wrapper } from '@/components/ui/Wrapper'

export const Hero = () => {
	return (
		<div className='h-[375px] w-full bg-secondary pt-10 md:h-[325px] lg:h-[375px]'>
			<Wrapper>
				<div className='mx-3 flex flex-col justify-between md:flex-row '>
					<Image
						src='/weronika-minify/Weronika-stoi.webp'
						alt='Weronika Smarduch'
						width={400}
						height={600}
						className='md:w-[300px] lg:w-[400px]'
					/>
					<h1 className='mt-11 font-bold text-center text-[2rem] leading-[3.7rem] text-darkBlue md:mt-0 md:text-right md:text-[2.2rem]  md:leading-[3.5rem] md:text-white lg:text-[2.8rem] lg:leading-[4.2rem] xl:text-[3.2rem] xl:leading-[5.2rem]'>
						Kandydatka do Sejmu RP z okręgu Sądecko-Podhalańskiego. Nr 1 na liście Koalicji Obywatelskiej
					</h1>
				</div>
			</Wrapper>
		</div>
	)
}
