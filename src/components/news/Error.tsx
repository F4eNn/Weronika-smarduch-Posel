'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { Button, buttonVariants } from '../controls/Button'
import { Heading } from '../ui/Heading'

export const Error = () => {
	const { refresh } = useRouter()
	return (
		<div className='flex flex-col gap-6 text-center'>
			<Heading as='h2'>Oops!</Heading>
			<Heading as='h3' className='font-normal'>
				Przepraszamy, nie udało się załadować aktualności
			</Heading>
			<Heading as='h3' className='font-normal'>
				Spróboj ponownie lub wróć na stronę główną{' '}
			</Heading>
			<div className='flex justify-around my-10'>
				<Button
					onClick={refresh}
					className={buttonVariants({
						size: 'small',
						variant: 'primary',
						className: 'bg-slate-400 hover:bg-primary',
					})}
				>
					Spróbuj ponownie
				</Button>
				<Link
					href='/'
					className={buttonVariants({ size: 'default', variant: 'primary', className: 'w-max bg-secondary' })}
				>
					Strona główna
				</Link>
			</div>
		</div>
	)
}
