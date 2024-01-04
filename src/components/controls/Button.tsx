import React, { ComponentProps } from 'react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva('transition-all duration-300 active:scale-95 flex items-center gap-3 font-[500]  ', {
	variants: {
		variant: {
			primary: 'rounded-[50px]  hover:bg-secondaryHover text-white',
			border: 'rounded-xl w-max  hover:bg-white/10 bg-transparent border-[1px] border-white text-white ',
			withIcon: 'flex items-center gap-2.5 group text-sm font-semibold w-max text-secondary ',
		},
		size: {
			default: 'py-4 px-6 lg:p-5 lg:px-7',
			small: 'px-4 py-2.5',
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
