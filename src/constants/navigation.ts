export type NavigationItem = {
	path: string
	label: string
}

export const navigation = {
	home: {
		path: '/',
		label: 'Home',
	},
	about: {
		path: '/o-mnie',
		label: 'O mnie',
	},
	team: {
		path: '/zespol',
		label: 'Zespół',
	},

	contact: {
		path: '/kontakt',
		label: 'Kontakt',
	},
} as const satisfies Record<PropertyKey, NavigationItem>

export const linksArray = [
	[navigation.home.path, navigation.home.label],
	[navigation.about.path, navigation.about.label],
	[navigation.team.path, navigation.team.label],
	[navigation.contact.path, navigation.contact.label],
]
