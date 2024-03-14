import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import type { team } from '@/constants/team'

import FacebookIcon from '../../../../public/facebook-team.svg'
import InstagramIcon from '../../../../public/team-instagram.svg'

type CardItemProps = (typeof team)[number] & { idx: number }

export const CardItem = ({ name, src, email, phone, role, facebookUrl, instagramUrl, idx }: CardItemProps) => {
	return (
		<article
			className={twMerge(
				'group relative col-span-2 mx-auto flex w-full gap-5 overflow-hidden rounded-lg border border-slate-200 sm:col-auto sm:text-xs md:text-base',
				idx === 2 && 'sm:col-span-2 sm:w-1/2 lg:col-auto lg:w-auto',
			)}
		>
			<Image src={src} alt={name} placeholder='blur' className=' w-full   bg-[#e7e8e6] object-contain' />
			<div className='absolute inset-0 transition-colors duration-300 group-hover:bg-black/40' />
			<div className='absolute -bottom-full left-1/2 w-11/12 -translate-x-1/2 rounded-lg bg-white p-5 transition-all duration-300 group-hover:bottom-10'>
				<div className='*:w-max'>
					<h2 className='text-lg font-semibold '>{name}</h2>
					<h3 className='font-medium text-secondary '>{role}</h3>
				</div>
				<div className=' mt-3.5 space-y-1 font-medium text-slate-500 *:w-max'>
					<p>{email}</p>
					<p>{phone}</p>
				</div>
				<div className='mt-1 flex gap-1  text-slate-500'>
					{facebookUrl ? (
						<Link
							href={facebookUrl}
							target='_blank'
							rel='noopener'
							className='colors-300 -ml-1 p-1.5 hover:text-primary'
						>
							<FacebookIcon />
						</Link>
					) : null}
					{instagramUrl ? (
						<Link href={instagramUrl} target='_blank' rel='noopener' className='colors-300  p-1.5 hover:text-primary'>
							<InstagramIcon />
						</Link>
					) : null}
				</div>
			</div>
		</article>
	)
}
