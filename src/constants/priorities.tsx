import { MdHiking } from 'react-icons/md'
import { BsCloudCheck, BsShop } from 'react-icons/bs'
import { FaArrowsDownToPeople } from 'react-icons/fa6'

export const priorities = [
	{
		title: 'Rozwój turystyki w całym regionie podhalańskim! ',
		desc: 'Nasz niepowtarzalny region przyciąga turystów licznymi pasmami górskimi oraz innymi atrakcjami turystycznymi. Strategia rozwoju powinna być przygotowana z myślą o komforcie życia mieszkańców, rozłożeniu ruchu turystycznego oraz większej promocji naszego regionu.',
		icon: <MdHiking />,
	},
	{
		title: 'Skuteczna walka ze smogiem!',
		desc: 'Nie jest możliwy dalszy rozwój truystyki, szczególnie zimowej bez rozwiązania problemu smogu. Będę walczyć o przekierowanie środków z krajowego programu "Czyste powietrze" do budżetów samorządów, w szczególności tych, które pozycjonują się jako ośrodki trurystyczne i uzdrowiskowe. ',
		icon: <BsCloudCheck />,
	},
	{
		title: 'Rodzinne firmy filarem gospodarki regionu!',
		desc: ' COVID-19 rosnące koszty prowadzenia działalności oraz Polski Ład zabijają dziś opłacalność! Uprośćmy podatki, przekształćmy Urzędy Skarbowe w Centra Obsługi Podatnika i zadbajmy o stabilną sytuację gospodarczą i lepszą przyszłość dla małych i średnich przedsiębiorstw.',
		icon: <BsShop />,
	},
	{
		title: 'Młodzi przyszłością naszego regionu!',
		desc: 'Wielu z Nas zauważa, że młodzi z naszego sądecko-podhalańskiego regionu wyjeżdża na studia czy za granicę i nie wracają na swoją ojcowiznę. Jest to bardzo niebezpieczne zjawisko, którego konsekwencje będziemy ponosić wszyscy. Dlatego tak ważne jest, aby stworzyć młodym możliwość powrotu w rodzinne strony. Priorytetami powinno być stworzenie odpowiedniej bazy przedszkoli, żłobków oraz walka z wykluczeniem komunikacyjnym.',
		icon: <FaArrowsDownToPeople />,
	},
] as const
