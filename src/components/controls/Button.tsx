import React, { ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva('', {
	variants: {
		variant: {
			primary: '',
		},
		size: {
			default: '',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'default',
	},
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, size, variant, ...props }: ButtonProps) => {
	return <button {...props} className={cn(buttonVariants({ variant, size, className }))} />
}

export { Button, buttonVariants }
