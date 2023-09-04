'use client'
import React from 'react'

import { motion } from '@/lib/motion'
import { ChildrenWithProps } from '@/types/general'
import { sectionAnimation } from '@/animations/animations'

export const RevealAnimation = ({ children }: ChildrenWithProps) => {
	return <motion.div {...sectionAnimation}>{children}</motion.div>
}
