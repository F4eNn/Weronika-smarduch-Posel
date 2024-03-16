import Image from 'next/image'

import QuoteIcon from '../../../public/icons/quotes.svg'
import imgHashtag from '../../../public/weronika-minify/Nasza-w-sejmie.webp'
import imgWeronika from '../../../public/weronika-minify/Weronika-1.webp'
import { Heading } from '../global/ui/Heading'
import { Section } from '../global/ui/Section'
import { Wrapper } from '../global/ui/Wrapper'

export const AboutMe = () => {
	return (
		<Section>
			<Wrapper>
				<div className='flex flex-col  items-center justify-around gap-5 lg:flex-row xl:justify-between '>
					<div className='relative text-center text-lg  lg:w-1/2 lg:text-left'>
						<div className='mb-24 text-center'>
							<Heading as='h1'>Kim jestem?</Heading>
						</div>
						<p className='mb-5'>
							Nazywam się Weronika Smarduch wychowałam się w Nowym Targu, a mieszkam w Łopusznej. Jestem absolwentką
							Uniwersytetu Ekomicznego w Krakowie. Od prawie dziesięciu lat zajmuję się analizą i kontrolą finansową w
							inwestycjach i branży Horeca. Doskonale znam problemy przez jakie przechodzą przedsiębiorcy na południu
							Małopolski. Pandemia COVID-19, rosnące koszty prowadzenia działalności i Polski Ład doprowadziło wiele
							małych firm do upadku a branża gastronomiczna znajduje sie obecnie w głębokim kryzysie. Dlatego właśnie
							gospodarka i wolny rynek są dla mnie priorytetem.
						</p>
						<p className='mb-5'>
							Dzięki zaangażowaniu wielu młodych osób rozmawiamy i rozwiązujemy realne, lokalne problemy, z którymi
							borykają się mieszkańcy małych miejscowości. Brak młodych ludzi, wykluczenie komunikacyjne i ubożejące
							rodziny są dziś nasza największą bolączką i mamy plan jak to zmienić! Dziś dostaliśmy możliwość
							wprowadzenia naszych pomysłów w życie!
						</p>
						<p className='mb-5'>
							Wśród lokalnych ludzi żyje i pracuje, jestem stąd i to się nie zmieni. Nigdy nie odcięłam się od miejsca,
							z którego pochodzę i nie chowałam się za tytułami czy przywilejami. Z tego miejsca mogę Państwu obiecać,
							że tak zostanie. Na wszystko, do czego doszłam zapracowałam ja i rzesza ludzi, w tym również Państwo - moi
							wyborcy, już dzisiaj pragnę podziękować za zaufanie i życzę nam wszystkim dalszej owocnej współpracy.
						</p>

						<div className='sm:ml-10'>
							<p className='my-10 mb-5  text-left font-[500]'>kandyduję do Sejmu RP:</p>
							<ul className='ml-10 list-disc space-y-3 text-left '>
								<li>Aby młode pokolenia miały odpowiednią reprezentację,</li>
								<li>Aby mieszkańcy małych miast i wsi odzyskali swój własny głos w parlamencie,</li>
								<li>Aby problemy lokalnych społeczeństw zawszy były priorytetem.</li>
							</ul>
						</div>
						<div className='absolute right-0 top-16 -z-10 size-40 fill-darkBlue/10'>
							<QuoteIcon />
						</div>
						<div className='absolute -right-3 top-16 -z-10 size-14 fill-darkBlue lg:-right-5'>
							<QuoteIcon />
						</div>
					</div>
					<div className='flex items-end   lg:flex-col'>
						<div className=' relative aspect-[2] w-[325px] sm:w-[500px] lg:hidden '>
							<Image src={imgHashtag} alt='Nasza w sejmie' fill placeholder='blur' />
						</div>
						<div>
							<Image src={imgWeronika} alt='Weronika Smarduch' width={450} height={600} placeholder='blur' />
						</div>
					</div>
				</div>
				<div className='relative hidden aspect-[2] w-[500px] lg:block'>
					<Image src={imgHashtag} alt='Weronika Smarduch' fill className='mt-10' placeholder='blur' />
				</div>
			</Wrapper>
		</Section>
	)
}
