'use client'
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

import { pulseAnimation } from '@/animations/animations'
import { navigation } from '@/constants/navigation'
import { motion } from '@/lib/motion'

import { FooterNav } from './FooterNav'
import { buttonVariants } from '../controls/Button'
import { Heading } from '../global/ui/Heading'
import { Logo } from '../global/ui/Logo'
import { SocialMediaLinks } from '../global/ui/SocialMediaLinks'
import { Wrapper } from '../global/ui/Wrapper'

export const Footer = () => {
	const date = new Date().getFullYear()
	return (
		<footer className='mt-auto  w-full border-t border-darkBlue pb-3 pt-16'>
			<Wrapper>
				<div className='mx-5'>
					<div className='mb-12 flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0 '>
						<Logo />
						<div className='flex flex-col items-center  gap-8 lg:flex-row'>
							<Heading as='h2' className='font-normal'>
								Daj znać, co możemy dla Ciebie zrobić!
							</Heading>
							<motion.div {...pulseAnimation} className=' md:ml-auto'>
								<Link
									href={navigation.contact.path}
									className={buttonVariants({
										variant: 'secondary',
										size: 'default',
										className: 'bg-secondary hover:bg-secondaryHover md:ml-auto lg:ml-0',
									})}
								>
									Skontaktuj się z nami
								</Link>
							</motion.div>
						</div>
					</div>
					<hr className='my-7' />
					<div className='flex flex-col items-start justify-between gap-12 lg:flex-row xl:gap-20'>
						<div className=' flex w-full flex-col flex-wrap items-center gap-10 font-[500] text-darkBlue sm:flex-row  sm:items-start sm:justify-between'>
							<div className=' flex flex-col items-center gap-8  sm:items-start'>
								<SocialMediaLinks />
								<div className='space-y-5'>
									<p className='flex flex-col items-center gap-1 text-center text-lg sm:flex-row'>
										<MdEmail size='1.5em' />
										Email: smarduch.sztab@gmail.com
									</p>
									<div className='flex flex-col items-center text-center text-lg  sm:items-start sm:text-lg'>
										<p className=' mb-3 '>Chcesz pomóc? Skontaktuj się z nami!</p>
										<a href='tel:+48506780245' className='underline'>
											+48 506 780 245
										</a>
									</div>
								</div>
							</div>
							<div className='space-y-5 text-center sm:text-left '>
								<Heading as='h3' className='font-[500]'>
									Adres do korespondencji
								</Heading>
								<div className='flex flex-col gap-2  '>
									<span>ul. Podtatrzańska 69</span>
									<span>Nowy Targ 34-400</span>
									<a href='tel:+48535531035' className='underline'>
										+48 535 531 035
									</a>
								</div>
							</div>
						</div>
						<Image
							src='/weronika-minify/Nowa-energia.webp'
							alt='Slogan nowa energia w polityce'
							width={500}
							height={200}
							className='mx-auto inline-block'
							style={{ width: '500px', height: 'auto' }}
						/>
					</div>
					<FooterNav />
					<p className='mt-20 text-center'>Prawa zastrzeżone &copy; {date}</p>
				</div>
			</Wrapper>
		</footer>
	)
}
