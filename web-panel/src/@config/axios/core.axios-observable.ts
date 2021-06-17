import { BASE_URL } from "./api"
import axios from "axios-observable"
export const CoreAxiosObservableInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 55000,
})
CoreAxiosObservableInstance.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
		// config.headers["X-Request-ID"] = "CRM-WEB-STAGING"
		// config.headers["X-Country-Code"] = "BD"
		// config.headers["X-Client-Name"] = "CRM-WEB"
		// config.headers["X-Client-Version"] = "1.0"
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

CoreAxiosObservableInstance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		if (error?.response?.status === 401) {
		} else {
			return error
		}
	}
)
