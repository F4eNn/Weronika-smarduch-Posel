import { Metadata } from 'next'

import { Activities } from '@/components/home/Activities'
import { Hero } from '@/components/home/Hero'
import { Priorities } from '@/components/home/Priorities'

export const metadata: Metadata = {
	title: 'Weronika Smarduch',
	description:
		'Weronika Smarduch Kandydatka do Sejmu Rzeczpospolitej Polskiej z okręgu Sądecko-Podhalańskiego. Nr 1 na liście koalicji Obywatelskiej',
	keywords: ['Kandydatka', 'sejm', 'Rzeczpospolita', 'Polska', 'podhale', 'koalicja', 'obywatelska'],
}

export default function Home() {
	return (
		<main>
			<Hero />
			<Priorities />
			<Activities />
		</main>
	)
}
