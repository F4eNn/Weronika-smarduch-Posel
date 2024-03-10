import { PropsWithChildren } from 'react'

import Tilt from 'react-parallax-tilt'

export const TiltEffect = ({ children }: PropsWithChildren) => {
	return (
		<Tilt tiltMaxAngleX={5} tiltMaxAngleY={3} tiltReverse>
			{children}
		</Tilt>
	)
}
