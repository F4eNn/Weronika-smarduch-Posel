'use client'
import React, { useState } from 'react'

import { pathVariants, pulseAnimation } from '@/animations/animations'
import { motion } from '@/lib/motion'

export const AnimateHeart = () => {
	const [isCompleteAnimation, setIsCompleteAnimation] = useState(false)

	return (
		<motion.svg
			{...(isCompleteAnimation && pulseAnimation)}
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='100%'
			viewBox='0 0 900.000000 900.000000'
			preserveAspectRatio='xMidYMid meet'
			fill='none'
		>
			<g transform='translate(0.000000,900.000000) scale(0.100000,-0.100000)' className='transition-all duration-300'>
				<motion.path
					strokeWidth={40}
					stroke='#d72748'
					{...pathVariants}
					onAnimationComplete={() => setIsCompleteAnimation(true)}
					d='M2651 7779 c-47 -5 -136 -21 -199 -35 -673 -151 -1206 -653 -1397
-1316 -50 -174 -67 -306 -68 -518 0 -281 37 -516 125 -790 308 -958 1115
-1902 2508 -2937 337 -250 645 -466 699 -491 74 -34 171 -40 257 -17 68 18
145 68 519 339 1332 965 2115 1777 2548 2641 153 307 243 591 299 940 17 110
17 508 0 605 -98 547 -380 985 -827 1282 -348 231 -797 342 -1214 298 -521
-55 -996 -324 -1305 -740 -65 -87 -81 -100 -125 -100 -42 0 -56 12 -137 120
-66 88 -213 239 -304 313 -385 311 -883 457 -1379 406z m1138 -1380 c234 -60
419 -178 592 -376 41 -48 49 -53 87 -53 39 0 46 6 169 128 142 141 232 202
385 259 120 45 213 64 348 70 511 22 958 -314 1091 -822 21 -78 24 -113 24
-260 0 -122 -6 -196 -18 -260 -130 -662 -645 -1283 -1682 -2029 -316 -227
-310 -227 -604 -17 -234 168 -475 354 -636 492 -166 142 -483 462 -589 594
-357 447 -539 922 -497 1301 46 407 283 747 634 909 81 37 159 61 261 81 104
20 327 11 435 -17z'
				/>
			</g>
		</motion.svg>
	)
}
