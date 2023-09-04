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
		desc: 'Dalszy rozwój turystyki, a zwłaszcza zimowej nie jest możliwy bez rozwiązania problemu smogu. Będę walczyć o środki z krajowego programu „Czyste powietrze”, by uzyskać je dla lokalnych samorządów - w szczególności tych ze statusem uzdrowisk i ośrodków turystycznych. ',
		icon: <BsCloudCheck />,
	},
	{
		title: 'Rodzinne firmy filarem gospodarki regionu!',
		desc: ' COVID-19 rosnące koszty prowadzenia działalności oraz Polski Ład zabijają dziś opłacalność! Uprośćmy podatki, przekształćmy Urzędy Skarbowe w Centra Obsługi Podatnika i zadbajmy o stabilną sytuację gospodarczą i lepszą przyszłość dla małych i średnich przedsiębiorstw.',
		icon: <BsShop />,
	},
	{
		title: 'Młodzi przyszłością!',
		desc: 'Coraz częściej młodzi z naszego regionu wyjeżdżają na studia i do pracy do wielkich miast, czy za granicę i tam już zostają. Konsekwencje tego niebezpiecznego zjawiska będziemy ponosić wszyscy. Rozwiązaniem jest stworzenie w młodych chęci i danie im możliwości do powrotu w rodzinne strony. Priorytetami są stworzenie odpowiedniej bazy mieszkań, żłobków i przedszkoli oraz walka z wykluczeniem komunikacyjnym.',
		icon: <FaArrowsDownToPeople />,
	},
] as const
