import { CoreAxiosInstance } from "./../../@config/axios/core-axios.config"
import { IFBannerFilter } from "@shared/interfaces/banner.interface"
import { filterQuery } from "@shared/utils/filterQuery"

const END_POINT = "/banners/"

export const BannerService = {
	filter(option: IFBannerFilter) {
		return CoreAxiosInstance.get(
			`${END_POINT}filter?${filterQuery(option)}&type=${option.type || ""}`
		)
	},
}
