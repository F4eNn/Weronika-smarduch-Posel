import React from 'react'
import Image from 'next/image'

import { Wrapper } from '@/components/ui/Wrapper'
import { AnimateHeart } from '../ui/AnimateHeart'
import { RevealAnimation } from '../ui/RevealAnimation'

export const Hero = () => {
	return (
		<div className='h-[375px] w-full bg-secondary pt-10 md:h-[325px] lg:h-[375px]'>
			<Wrapper>
				<div className='relative mx-3 flex flex-col justify-between md:flex-row '>
					<Image
						src='/weronika-minify/Weronika-stoi.webp'
						alt='Weronika Smarduch'
						width={400}
						height={600}
						className='md:w-[300px] lg:w-[400px]'
					/>
					<RevealAnimation>
						<h1 className='mt-11 text-center text-[2rem] font-bold leading-[3.7rem] text-darkBlue md:mt-0 md:text-right md:text-[2.2rem]  md:leading-[3.5rem] md:text-white lg:text-[2.8rem] lg:leading-[4.2rem] xl:text-[3.2rem] xl:leading-[5.2rem]'>
							Kandydatka do Sejmu RP z okręgu Sądecko-Podhalańskiego. Nr 1 na liście Koalicji Obywatelskiej
						</h1>
					</RevealAnimation>
					<div className='absolute  hidden  -rotate-45 md:bottom-0 md:left-1/2 md:block md:h-[175px] md:w-[175px] lg:bottom-16 lg:h-[250px] lg:w-[250px]'>
						<AnimateHeart />R
					</div>
				</div>
			</Wrapper>
		</div>
	)
}
