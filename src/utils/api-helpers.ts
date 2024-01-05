export const formatDate = (dateString: string, partial = true): string => {
	const date = new Date(dateString)
	const optionsFull: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
	const optionsPartial: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' }

	if (partial) {
		return date.toLocaleDateString('pl-PL', optionsPartial)
	}
	return date.toLocaleDateString('pl-PL', optionsFull)
}
