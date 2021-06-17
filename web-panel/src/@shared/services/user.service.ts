import { CoreAxiosObservableInstance } from "src/@config/axios/core.axios-observable"
import { IFUserCreate } from "./../interfaces/user.interface"
const END_POINT = "/userInfo/"

export const UserService = {
	getCurrentUser() {
		return CoreAxiosObservableInstance.get(`${END_POINT}current`)
	},
	updateCurrentUser(payload: IFUserCreate) {
		return CoreAxiosObservableInstance.put(`${END_POINT}current`, payload)
	},
}
