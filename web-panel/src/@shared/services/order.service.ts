import { IFilterOrder, IPlaceOrder } from "./../interfaces/order.interface"

import { CoreAxiosObservableInstance } from "./../../@config/axios/core.axios-observable"

const END_POINT = "order/"

export const OrderService = {
	placeOrder(payload: IPlaceOrder) {
		return CoreAxiosObservableInstance.post(`${END_POINT}placeOrder`, payload)
	},
	filter(option: IFilterOrder) {
		return CoreAxiosObservableInstance.get(
			`${END_POINT}filter?searchTerm=${option.searchTerm || ""}&page=${
				option.page || ""
			}&take=${option.take || ""}&user=${option.user || ""}`
		)
	},
}
