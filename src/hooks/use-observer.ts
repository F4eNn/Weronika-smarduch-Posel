import { RefObject, useEffect, useState } from 'react'

export const useObserver = (ref: RefObject<HTMLDivElement>) => {
	const [isVisible, setIsVisible] = useState(false)

	const callbackIntersection = (entries: IntersectionObserverEntry[]) => {
		const firstEntry = entries[0]
		setIsVisible(firstEntry.isIntersecting)
	}
	const options = {
		root: null,
		rootMargin: '350px',
		threshold: 0,
	}
	useEffect(() => {
		const currentRef = ref.current
		const observer = new IntersectionObserver(callbackIntersection, options)

		if (observer && currentRef) {
			observer.observe(currentRef)
		}
		return () => {
			if (observer) {
				observer.disconnect()
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref])
	return { isVisible }
}
