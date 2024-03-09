import React from 'react'

import Image from 'next/image'

export const LoadingSpinner = () => {
	return (
		<div className='flex  justify-center text-center'>
			<Image src='/spinner.png' alt='' width={120} height={120} className='animate-spin ' />
		</div>
	)
}
