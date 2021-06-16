import { BASE_URL } from "./api"
import axios from "axios"

export const CoreAxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 55000,
})

export const CoreAxiosWithTokenInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 55000,
})

CoreAxiosWithTokenInstance.interceptors.request.use(
	(config) => {
		config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)
