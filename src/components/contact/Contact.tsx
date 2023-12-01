'use client'
import React from 'react'
import { MdEmail } from 'react-icons/md'

import { Section } from '../ui/Section'
import { Wrapper } from '../ui/Wrapper'
import { Title } from '../ui/Title'
import HeartIcon from '../../../public/serce.svg'
import { motion } from '@/lib/motion'
import { pulseAnimation } from '@/animations/animations'

export const Contact = () => {
	return (
		<Section>
			<Wrapper>
				<div>
					<div className='text-center'>
						<Title title='Kontakt' />
					</div>
					<div className='relative mx-auto mt-12 flex items-center justify-center overflow-hidden pt-20 lg:h-[875px] lg:w-[975px] xl:w-10/12'>
						<motion.div {...pulseAnimation} className='absolute  left-0  -z-10 hidden aspect-square w-full lg:block'>
							<HeartIcon />
						</motion.div>
						<div className='mb-20 flex flex-col  items-center lg:space-y-8 xl:space-y-10'>
							<div className='space-y-5 text-center lg:space-y-3 xl:space-y-5'>
								<h2 className='text-3xl font-[500] lg:text-2xl'>Adres Korespondencyjny</h2>
								<div className='flex  flex-col gap-2 text-xl font-[500] '>
									<span>ul. Podtatrzańska 69</span>
									<span>Nowy Targ 34-400</span>
									<a href='tel:+48535531035' className='mx-auto w-max underline'>
										+48 535 531 035
									</a>
								</div>
							</div>
							<motion.div {...pulseAnimation} className='block aspect-square w-full lg:hidden'>
								<HeartIcon />
							</motion.div>
							<a
								href='mailto:smarduch.sztab@gmail.com'
								className='flex items-center gap-3 rounded-[30px] border-[1px] border-darkBlue px-9 py-4 text-lg font-[500] transition-colors duration-300 hover:border-secondaryHover hover:bg-secondaryHover hover:text-white xl:px-14 '
							>
								Napisz do nas <MdEmail size='1.5em' />
							</a>
						</div>
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}
