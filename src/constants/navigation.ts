type NavigationItem = {
	path: string
	label: string
}

export const navigation = {
	home: {
		path: '/',
		label: 'strona główna',
	},
	about: {
		path: '/o-mnie',
		label: 'O mnie',
	},
	people: {
		path: '/ludzie',
		label: 'Ludzie',
	},
	program: {
		path: '/program',
		label: 'Program',
	},
	contact: {
		path: '/kontakt',
		label: 'Kontakt',
	},
} as const satisfies Record<PropertyKey, NavigationItem>

export const linksArray = [
    [navigation.about.path, navigation.about.label],
    [navigation.program.path, navigation.program.label],
    [navigation.people.path, navigation.people.label],
    [navigation.contact.path, navigation.contact.label],
]