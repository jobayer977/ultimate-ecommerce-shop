import { CoreAxiosObservableInstance } from "./../../@config/axios/core.axios-observable"
import { IPlaceOrder } from "./../interfaces/order.interface"

const END_POINT = "order/"

export const OrderService = {
	placeOrder(payload: IPlaceOrder) {
		return CoreAxiosObservableInstance.post(`${END_POINT}placeOrder`, payload)
	},
}
