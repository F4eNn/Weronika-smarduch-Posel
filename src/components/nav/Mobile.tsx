'use client'
import React, { MouseEvent, useEffect, useRef, useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logo } from '../ui/Logo'
import { linksArray } from '@/constants/navigation'

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

	return (
		<>
			<div className={`flex items-center justify-between p-3 md:hidden ${isOpen ? 'text-white' : ''} `}>
				<Logo />
				<div className='relative z-50'>
					<Hamburger toggle={setIsOpen} toggled={isOpen} />
				</div>
			</div>
			{isOpen && (
				<div ref={overlayRef} onClick={handleCloseOverlay} className='fixed left-0 top-0 z-0 h-full w-full bg-black/50'>
					<div className='ml-auto flex h-full w-3/4 justify-center bg-darkBlue pt-[150px]'>
						<ul className='space-y-10 text-xl '>
							{linksArray.map(([url, name], idx) => (
								<li className='text-white transition-colors duration-200 ' key={idx}>
									<Link className={`p-3 ${pathname === url ? 'text-secondary' : ''}`} href={url}>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</>
	)
}
