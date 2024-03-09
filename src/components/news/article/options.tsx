import { domToReact, HTMLReactParserOptions, Element, DOMNode } from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/global/ui/Heading'

export const options: HTMLReactParserOptions = {
	replace(domNode) {
		if (domNode instanceof Element) {
			switch (domNode.name) {
				case 'h1':
				case 'h2':
				case 'h3':
				case 'h4':
					return (
						<Heading as={domNode.name} className='text-left font-bold'>
							{domToReact(domNode.children as DOMNode[], options)}
						</Heading>
					)

				case 'ol':
					return (
						<ol className='float-none ml-5 list-decimal space-y-2 sm:ml-10'>
							{domToReact(domNode.children as DOMNode[], options)}
						</ol>
					)

				case 'ul':
					return (
						<ul className='float-none ml-5 list-disc space-y-2 sm:ml-10'>
							{domToReact(domNode.children as DOMNode[], options)}
						</ul>
					)

				case 'img':
					const { alt, width } = domNode.attribs
					const { srcset } = domNode.attribs
					const images = srcset.split(',').filter(i => i.trim() !== '')
					const src = images.at(-1)?.split(' ')[0]

					const widthImg = Number(width.replace('px', '').trim())
					return (
						<Image
							src={src ?? ''}
							alt={alt}
							width={widthImg}
							height={500}
							className='max-h-[500px] w-full rounded-sm object-cover'
						/>
					)
				case 'a':
					const { href } = domNode.attribs
					return (
						<Link
							href={href}
							target='_blank'
							className='font-semibold text-primary underline underline-offset-2 transition-colors duration-300 hover:text-primary/75'
						>
							{domToReact(domNode.children as DOMNode[], options)}
						</Link>
					)
			}
		}
	},
}
