import { BannerType } from "@shared/enums"
import { BaseFilterQuery } from "./base.interface"
export interface IFBanner {
	id?: string
	createdAt?: string
	updatedAt?: string
	isFeatured?: boolean
	isActive?: boolean
	isPopular?: boolean
	isHot?: boolean
	isNew?: boolean
	image?: string
	title?: string
	url?: string
	type?: string
}
export interface IFBannerFilter extends BaseFilterQuery {
	type?: BannerType
}
