import { BaseFilterQuery } from "@shared/interfaces/base.interface"
import { CoreAxiosInstance } from "./../../@config/axios/core-axios.config"

const END_POINT = "/products/"

export const ProductsService = {
	filter(option: BaseFilterQuery) {
		return CoreAxiosInstance.get(
			`${END_POINT}filter?searchTerm=${option.searchTerm || ""}&page=${
				option.page || ""
			}&take=${option.take || ""}`
		)
	},
}
