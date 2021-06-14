export interface BaseFilterQuery {
	page?: number
	take?: number
	searchTerm?: string
	isActive?: boolean
	isFeatured?: boolean
	isHot?: boolean
	isNew?: boolean
	isPopular?: boolean
}

export interface BaseMetaSchema {
	id?: string
	createdAt?: string
	updatedAt?: string
}

export interface BaseResponse {
	data?: any
	message?: string
	success?: boolean
}
export interface BaseFilterResponse extends BaseResponse {
	page?: number
	take?: number
	total?: number
	skip?: number
}
