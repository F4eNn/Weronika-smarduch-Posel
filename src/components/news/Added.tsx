import React from 'react'

type AddedProps = {
	isEven: boolean
	date: string
}

const Added = ({ isEven,date }: AddedProps) => {
	return (
		<div className={`absolute ${isEven ? '-right-10' : '-left-10'} top-0 bg-secondary px-9 py-2.5`}>
			<span className='font-semibold text-white'>{date}</span>
		</div>
	)
}

export default Added
