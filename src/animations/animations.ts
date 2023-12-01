import { MotionProps } from 'framer-motion'

export const pulseAnimation: MotionProps = {
	initial: { scale: 1 },
	animate: {
		scale: [1, 1.05, 1],
		transition: {
			duration: 2,
			ease: 'easeInOut',
			times: [0, 0.2, 0.5, 0.8, 1],
			repeat: Infinity,
		},
	},
}

export const mobileMenuAnimation: MotionProps = {
	initial: { opacity: 0, x: '100%' },
	animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	exit: { x: '100%', transition: { duration: 0.3 } },
}

export const mobileItemsAnimation = {
	initial: { x: 100, transition: { staggerChildren: 0.5, staggerDirection: -1 } },
	animate: { x: 0, transition: { duration: 1, delay: 0.3, staggerChildren: 0.5, staggerDirection: 1 } },
}
export const pathVariants: MotionProps = {
	initial: {
		pathLength: 0,
	},
	animate: {
		pathLength: 1,
		transition: {
			duration: 3.5,
			ease: 'easeInOut',
		},
	},
}
export const sectionAnimation: MotionProps = {
	initial: {
		y: 15,
		opacity: 0.5,
	},
	whileInView: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			type: 'spring',
			stiffness: 60,
		},
	},
	viewport: { once: true },
}

export const priorityCardsAnimation = (axeX: '-40px' | '40px' | undefined): MotionProps => ({
	initial: {
		x: axeX,
		opacity: 0,
	},
	whileInView: {
		x: 0,
		opacity: 1,
		transition: { stiffness: 35, type: 'spring' },
	},
	viewport: { once: true, margin: '-50px' },
})

export const expandPriorityTextAnimation = (isRoll: boolean): MotionProps => ({
	initial: { height: 0 },
	animate: { height: isRoll ? 'auto' : 0 },
	transition: { duration: 0.3 },
})
