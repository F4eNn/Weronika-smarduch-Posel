import { Variants } from 'framer-motion'
import { stagger } from 'framer-motion/dom'
export const pulseAnimation: Variants = {
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

export const mobileMenuAnimation: Variants = {
	initial: { opacity: 0, x: '100%' },
	animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	exit: { x: '100%', transition: { duration: 0.3 } },
}

export const mobileItemsAnimation: Variants = {
	initial: { x: 100, transition: { staggerChildren: 0.5, staggerDirection: -1 } },
	animate: { x: 0, transition: { duration: 1, delay: 0.3, staggerChildren: 0.5, staggerDirection: 1 } },
}
