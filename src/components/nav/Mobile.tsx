'use client'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from '../ui/Logo'
import { linksArray } from '@/constants/navigation'
import { AnimatePresence, motion } from '@/lib/motion'
import { mobileMenuAnimation } from '@/animations/animations'

export const Mobile = () => {
	const [isOpen, setIsOpen] = useState(false)
	const overlayRef = useRef<HTMLDivElement>(null)
	const pathname = usePathname()
	const handleCloseOverlay = (e: MouseEvent<HTMLDivElement>) => {
		if (e.target === overlayRef.current) {
			setIsOpen(false)
		}
	}

	useEffect(() => {
		if (!isOpen) return
		setIsOpen(false)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	useEffect(() => {
		if (isOpen) {
			document.body.classList.add('overflow-hidden')
		} else {
			document.body.classList.remove('overflow-hidden')
		}
	}, [isOpen])

	return (
		<>
			<div className={`flex items-center  justify-between p-3 md:hidden ${isOpen ? 'text-white' : ''} `}>
				<Logo />
				<div className='relative z-50'>
					<Hamburger toggle={setIsOpen} toggled={isOpen} />
				</div>
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						{...mobileMenuAnimation}
						ref={overlayRef}
						onClick={handleCloseOverlay}
						className='fixed left-0 top-0 z-10 h-full w-full bg-black/50'
					>
						<div className='ml-auto flex h-full w-3/4 justify-center  bg-darkBlue pt-[150px]'>
							<motion.ul className='space-y-10 text-xl'>
								{linksArray.map(([url, name], idx) => (
									<motion.li
										initial={{ x: 500 }}
										animate={{ x: 0, transition: { delay: 0.2 * idx, duration: 0.5, type: 'tween' } }}
										className='text-white transition-colors duration-200 '
										key={idx}
									>
										<Link className={`p-3 ${pathname === url ? 'text-secondary' : ''}`} href={url}>
											{name}
										</Link>
									</motion.li>
								))}
							</motion.ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}
