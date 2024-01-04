import React from 'react'

type AddedProps = {
	isEven: boolean
}

const Added = ({ isEven }: AddedProps) => {
	return (
		<div className={`absolute ${isEven ? '-right-10' : '-left-10'} top-0 bg-secondary px-9 py-2.5`}>
			<span className='font-semibold text-white'>7 lipiec</span>
		</div>
	)
}

export default Added
