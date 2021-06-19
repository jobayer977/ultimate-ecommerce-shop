import { CoreAxiosObservableInstance } from "./../../@config/axios/core.axios-observable"
import { IFAuthLogin } from "./../interfaces/auth.interface"
const END_POINT = "/auth/"

export const AuthService = {
	login(payload: IFAuthLogin) {
		return CoreAxiosObservableInstance.post(
			`${END_POINT}login/customer`,
			payload
		)
	},
	register(payload: IFAuthLogin) {
		return CoreAxiosObservableInstance.post(
			`${END_POINT}register/customer`,
			payload
		)
	},
}
