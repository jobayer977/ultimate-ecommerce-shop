import { BaseFilterQuery } from "./../interfaces/base.interface"

export function filterQuery(option: BaseFilterQuery): string {
	return `${option.page ? `page=${option.page || ""}` : ""}
		${option.take ? `&take=${option.take || ""}` : ""}
		${option.isActive ? `&isActive=${option.isActive || ""}` : ""}
		${option.isFeatured ? `&isFeatured=${option.isFeatured || ""}` : ""}
		${option.isHot ? `&isHot=${option.isHot || ""}` : ""}
		${option.isNew ? `&isNew=${option.isNew || ""}` : ""}
		${option.isPopular ? `&isPopular=${option.isPopular || ""}` : ""}
		${option.searchTerm ? `&searchTerm=${option.searchTerm || ""}` : ""}
		`
}
