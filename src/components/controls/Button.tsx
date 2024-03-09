import { ComponentProps } from 'react'

import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva('flex items-center gap-3 font-[500] transition-all duration-300 active:scale-95  ', {
	variants: {
		variant: {
			primary: 'rounded-[50px]  text-white hover:bg-secondaryHover',
			border: 'w-max rounded-xl  border-[1px] border-white bg-transparent text-white hover:bg-white/10 ',
			withIcon: 'group flex w-max items-center gap-2.5 text-sm font-semibold text-secondary ',
		},
		size: {
			default: 'px-6 py-4 lg:p-5 lg:px-7',
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
