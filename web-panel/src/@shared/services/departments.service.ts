import { BaseFilterQuery } from "@shared/interfaces/base.interface"
import { CoreAxiosInstance } from "./../../@config/axios/core-axios.config"
import { filterQuery } from "@shared/utils/filterQuery"

const END_POINT = "/department/"

export const DepartmentService = {
	filter(option: BaseFilterQuery) {
		return CoreAxiosInstance.get(`${END_POINT}filter?${filterQuery(option)}`)
	},
}
