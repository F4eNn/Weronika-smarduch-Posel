import { MdHiking } from 'react-icons/md'
import { BsCloudCheck, BsShop } from 'react-icons/bs'
import { FaArrowsDownToPeople } from 'react-icons/fa6'

export const priorities = [
	{
		title: 'Długoterminowa strategia rozwoju turystyki w oparciu o cały subregion podhalański.',
		desc: 'Mamy niepowtarzalny region, który przyciąga turystów wieloma pasmami górskimi oraz atrakcjami turystycznymi. Strategia powinna być przygotowa w oparciu o rozłożenie ruchu turystycznego, promocję całego regionu oraz z myślą o komforcie życia mieszkańców.',
		icon: <MdHiking />,
	},
	{
		title: 'Skuteczna walka ze smogiem!',
		desc: 'Nie jest możliwy dalszy rozwój turystyki, szczególnie zimowej bez rowziązania problemu smogu. Będę walczyć o przekierowanie środków z krajowego programu &ldquo;Czyste powietrze&rdquo; do budżetów samorządów, w szczególności tych, które pozycjonują się jako ośrodki turystyczne czy uzdrowiskowe.',
		icon: <BsCloudCheck />,
	},
	{
		title: 'Rodzinne firmy filarem gospodarki regionu!',
		desc: 'Pandemia Covid, rosnące koszty prowadzenia działalności gospodarczej oraz Polski Ład zabijają dziś opłacalność! Uprościmy podatki, przekształcimy Urzędy Skarbowe w Centra Obsługi Podatnika i zadbamy o stabilną sytuację gospodarczą i przyszłość małych przedsiębiorstw.',
		icon: <BsShop />,
	},
	{
		title: 'Młodzi przyszłością naszego narodu!',
		desc: 'Wielu z Nas zauważa, że młodzi z naszego śadecko-podhalańskiego regionu wyjeżdżają na studia czy za granicę i nie wracają na swoją ojcowiznę. Jest to bardzo niebezpieczne zjawisko, którego konsekwencje będziemy ponosić wszyscy. Dlatego tak ważne jest, aby stworzyć młodym możliwość powrotu w rodzinne strony. Priorytetami powinno być stworzenie odpowiedniej bazy przedszkoli, żłobków oraz walka z wykluczeniem komunikacyjnym',
		icon: <FaArrowsDownToPeople />,
	},
] as const
