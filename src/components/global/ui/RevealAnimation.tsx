'use client'
import React from 'react'

import { sectionAnimation } from '@/animations/animations'
import { motion } from '@/lib/motion'
import { ChildrenWithProps } from '@/types/general'

export const RevealAnimation = ({ children }: ChildrenWithProps) => {
	return <motion.div {...sectionAnimation}>{children}</motion.div>
}
