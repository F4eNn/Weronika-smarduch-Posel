'use client'
import Link from 'next/link'

import { Button, buttonVariants } from '@/components/controls/Button'

import type { FallbackProps } from 'react-error-boundary'

import { Heading } from './Heading'

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div className='mt-24 flex flex-col gap-6 text-center'>
			<Heading as='h2'>Oops!</Heading>
			<Heading as='h3' className='font-normal'>
				{error.message} {error.status}
			</Heading>
			<Heading as='h3' className='font-normal'>
				Spróbuj ponownie lub wróć na stronę główną{' '}
			</Heading>
			<div className='my-10 flex justify-around'>
				<Button
					onClick={resetErrorBoundary}
					className={buttonVariants({
						size: 'default',
						variant: 'primary',
						className: 'bg-slate-400  hover:bg-primary',
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
