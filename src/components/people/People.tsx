import React from 'react'
import Image from 'next/image'

import { Section } from '../ui/Section'
import { Wrapper } from '../ui/Wrapper'
import { Title } from '../ui/Title'
import { team } from '@/constants/team'

export const People = () => {
	return (
		<Section>
			<Wrapper>
				<div className='text-center  mb-44'>
					<div className='my-24'>
						<Title title='Zespół' />
					</div>
					<div className='flex flex-wrap-reverse justify-between gap-10 text-darkBlue'>
						{team.map((item, idx) => (
							<div
								key={idx}
								className='flex-grow rounded-lg border-[1px] transition-all duration-300 hover:scale-[1.03] hover:border-darkBlue '
							>
								<div key={idx} className=' space-y-8 px-0 sm:px-8 p-8 text-center '>
									<div className='mx-auto flex h-[400px] w-max items-center justify-center rounded-full border-[1px] bg-slate-100'>
										<Image
											src={item.src}
											alt={item.name}
											width={250}
											height={200}
											className=' inline-block  rounded-full  p-5'
										/>
									</div>
								</div>
								<h2 className='mx-auto h-[72px] w-full md:max-w-[260px] text-3xl  font-[500]'>{item.name}</h2>
								<div className={`space-y-3 ${idx === 0 ? 'lg:mt-5' : ''}   mb-7 mx-4 text-base sm:text-lg`}>
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
