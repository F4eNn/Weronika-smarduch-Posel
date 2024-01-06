import React from 'react'

type AddedProps = {
	isEven: boolean
	date: string
	position?: 'static' | 'absolute'
}

const Added = ({ isEven, date, position = 'absolute' }: AddedProps) => {
	return (
		<div
			className={`${position} ${isEven ? '-right-10' : '-left-10'} top-0 w-max bg-secondary px-9 ${
				position === 'static' ? 'py-3.5' : 'py-2.5'
			}`}
		>
			<span className='font-semibold text-white'>{date}</span>
		</div>
	)
}

export default Added
