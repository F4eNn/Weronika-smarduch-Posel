import Link from 'next/link'
import Image from 'next/image'
import { domToReact, HTMLReactParserOptions, Element, DOMNode } from 'html-react-parser'

import { Heading } from '@/components/ui/Heading'

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
					return <ol className='float-none ml-10 list-decimal'>{domToReact(domNode.children as DOMNode[], options)}</ol>

				case 'ul':
					return <ul className='float-none ml-10 list-disc'>{domToReact(domNode.children as DOMNode[], options)}</ul>

				case 'img':
					const { src, alt, width } = domNode.attribs
					const widthImg = Number(width.replace('px', '').trim())
					return <Image src={src} alt={alt} width={widthImg} height={500} className='rounded-sm' />
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
