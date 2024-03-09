import React, { ComponentProps } from 'react'

import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const CardVariants = cva('rounded-md text-darkBlue ', {
	variants: {
		variant: {
			border: 'border-[1px] transition-transform duration-300 hover:scale-[1.012]',
		},
		size: {
			default: 'p-8',
		},
	},
	defaultVariants: {
		variant: 'border',
		size: 'default',
	},
})

interface CardProps extends ComponentProps<'div'>, VariantProps<typeof CardVariants> {}

export const Card = ({ className, size, variant, ...props }: CardProps) => {
	return <div {...props} className={cn(CardVariants({ variant, size, className }))} />
}
