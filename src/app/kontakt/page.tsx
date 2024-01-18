import React from 'react'
import { Metadata } from 'next'

import { Contact } from '@/components/contact/Contact'

export const metadata: Metadata = {
	title: 'Kontakt',
	description: 'Skontaktuj się z Weroniką Smarduch, Posłanką na Sejm RP. Znajdziesz tu dane kontaktowe oraz informacje o godzinach przyjęć.',
	keywords: ['Kontakt poselski', 'Dane kontaktowe', 'Spotkanie z posłanką', 'Biuro poselskie', 'Weronika Smarduch'],
}

const ContactPage = () => {
	return (
		<main>
			<Contact />
		</main>
	)
}

export default ContactPage
