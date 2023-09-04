import { Activities } from '@/components/home/Activities'
import { Hero } from '@/components/home/Hero'
import { Priorities } from '@/components/home/Priorities'

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
			<Hero />
			<Priorities />
			<Activities />
		</main>
	)
}
