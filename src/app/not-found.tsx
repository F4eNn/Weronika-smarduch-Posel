import React from 'react'

import Link from 'next/link'

import { buttonVariants } from '@/components/controls/Button'
import { Heading } from '@/components/global/ui/Heading'
import { Section } from '@/components/global/ui/Section'

const notFound = () => {
	return (
		<main>
			<Section>
				<Heading as='h1'>Oouch!</Heading>
				<div className='mt-5'>
					<Heading as='h2'>Nie znaleziono strony z podanym adresem</Heading>
				</div>
				<div className='mx-auto mt-5 w-max'>
					<Link href='/' className={buttonVariants({ size: 'default', variant: 'primary', className: 'bg-secondary' })}>
						Wróć do strony głównej
					</Link>
				</div>
			</Section>
		</main>
	)
}

export default notFound
