export type Data<T> = {
	id: number
	attributes: T
}
export type Pagination = {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

export type RootObject<T> = {
	data: Data<T>[]
	meta: {
		pagination: Pagination
	}
}
