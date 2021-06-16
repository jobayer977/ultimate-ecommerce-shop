import { CoreAxiosWithTokenInstance } from "./../../@config/axios/core-axios.config"
import { IFUserCreate } from "./../interfaces/user.interface"
const END_POINT = "/userInfo/"

export const UserService = {
	getCurrentUser() {
		return CoreAxiosWithTokenInstance.get(`${END_POINT}current`)
	},
	updateCurrentUser(payload: IFUserCreate) {
		return CoreAxiosWithTokenInstance.put(`${END_POINT}current`, payload)
	},
}
