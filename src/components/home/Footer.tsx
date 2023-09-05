'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

import { Wrapper } from '../ui/Wrapper'
import { Logo } from '../ui/Logo'
import { navigation } from '@/constants/navigation'
import { FooterNav } from './FooterNav'
import { motion } from '@/lib/motion'
import { pulseAnimation } from '@/animations/animations'

export const Footer = () => {
	const socialMedia = [
		{ icon: <AiFillFacebook />, url: 'https://www.facebook.com/smarduch.weronika', label: 'facebook' },
		{ icon: <AiFillInstagram />, url: 'https://www.instagram.com/weronikasmarduch/', label: 'instagram' },
		{ icon: <AiOutlineTwitter />, url: 'https://twitter.com/WSmarduch ', label: 'twitter' },
	]
	return (
		<footer className='mt-auto  w-full border-t border-darkBlue pb-3 pt-16'>
			<Wrapper>
				<div className='mx-5'>
					<div className='mb-12 flex flex-col items-center justify-between gap-10 md:flex-row md:gap-0 '>
						<Logo />
						<div className='flex flex-col items-center  gap-8 lg:flex-row'>
							<h2 className='text-center text-xl text-darkBlue   lg:text-2xl'>
								Daj znać, co możemy dla Ciebie zrobić!
							</h2>
							<motion.div {...pulseAnimation} className=' md:ml-auto'>
								<Link
									href={navigation.contact.path}
									className='rounded-[50px] bg-secondary p-4  px-6 font-[500] text-white transition-colors duration-200 hover:bg-secondaryHover md:ml-auto lg:ml-0 lg:p-5 lg:px-7'
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
								<div className='flex gap-5'>
									{socialMedia.map(({ icon, url, label }, idx) => (
										<a
											aria-label={label}
											key={idx}
											target='_blank'
											rel='noopener'
											
											href={url}
											className='text-4xl transition-all duration-200 hover:scale-125 hover:text-secondary'
										>
											{icon}
										</a>
									))}
								</div>
								<div className='space-y-5'>
									<p className='flex flex-col items-center gap-1 text-center text-lg sm:flex-row'>
										<MdEmail size='1.5em' />
										Email: smarduch.sztab@gmail.com
									</p>
									<div className='flex flex-col items-center text-center text-lg  sm:items-start sm:text-lg'>
										<p className=' mb-3 '>Chcesz pomóc? Skontaktuj się z nami!</p>
										<span className='underline'>+48 535 329 850 </span>
									</div>
								</div>
							</div>
							<div className='space-y-5 text-center sm:text-left '>
								<h3 className='text-xl font-[500]'>Adres do korespondencji</h3>
								<div className='flex flex-col gap-2  '>
									<span>Skawa 175A</span>
									<span>+48 506 780 245</span>
									<span>Skawa 34-713</span>
								</div>
							</div>
						</div>
						<Image
							src='/weronika-minify/Nowa-energia.webp'
							alt='Slogan nowa energia w polityce'
							width={500}
							height={200}
							className='mx-auto inline-block'
						/>
					</div>
					<FooterNav />
					<p className='mt-20 text-center'>Prawa zastrzeżone &copy; 2023</p>
				</div>
			</Wrapper>
		</footer>
	)
}
