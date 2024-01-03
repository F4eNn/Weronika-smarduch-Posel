import React from 'react'
import Image from 'next/image'

import { Section } from '../ui/Section'
import { Wrapper } from '../ui/Wrapper'
import { team } from '@/constants/team'
import { Heading } from '../ui/Heading'

export const People = () => {
	return (
		<Section>
			<Wrapper>
				<div className='mb-44  text-center'>
					<div className='my-24'>
						<Heading as='h1'>Zespół</Heading>
					</div>
					<div className='flex flex-wrap-reverse justify-between gap-10 text-darkBlue'>
						{team.map((item, idx) => (
							<div
								key={idx}
								className='flex-grow rounded-lg border-[1px] transition-all duration-300 hover:scale-[1.012] hover:border-darkBlue'
							>
								<div key={idx} className=' space-y-8 p-8 px-0 text-center sm:px-8 '>
									<div className='mx-auto flex h-[400px] w-max items-center justify-center rounded-full border-[1px] bg-slate-100'>
										<Image
											src={item.src}
											alt={item.name}
											width={250}
											height={200}
											placeholder='blur'
											className='inline-block rounded-full  p-5'
										/>
									</div>
								</div>
								<Heading as='h2' className='mx-auto h-[72px] w-full text-3xl md:max-w-[260px]'>{item.name}</Heading>
								<div className={`space-y-3 ${idx === 0 ? 'lg:mt-5' : ''}   mx-4 mb-7 text-base sm:text-lg`}>
									{item.role && <p>{item.role}</p>}
									{item.email && <p>{item.email}</p>}
									{item.phone && <p>{item.phone}</p>}
								</div>
							</div>
						))}
					</div>
				</div>
			</Wrapper>
		</Section>
	)
}
