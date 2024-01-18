/* eslint-disable @next/next/no-img-element */
import React from 'react'

type OpengraphProps = {
	title?: string
	description: string
}

export const Opengraph = ({ title, description }: OpengraphProps) => {
	return (
		<div tw='flex relative z-0 bg-white flex-col h-full w-full'>
			<div tw='h-1/2 flex flex-col'>
				<span tw='uppercase m-3.5 text-gray-400 font-[600]'>weronika-smarduch.pl</span>
				<div tw='flex mb-3.5 mr-[300px] ml-3.5 flex-col'>
					<h1 tw='text-4xl'>{title}</h1>
					<p tw='text-xl'>{description}</p>
				</div>
			</div>
			<div tw='h-1/2 w-full bg-[#d72748] '></div>
			<img tw='flex flex-1 absolute right-0 bottom-0 w-[300px] z-50' src={`${process.env.NEXT_PUBLIC_URL}/weronika-stoi.png`} alt="Weronika Smarduch" />
		</div>
	)
}
