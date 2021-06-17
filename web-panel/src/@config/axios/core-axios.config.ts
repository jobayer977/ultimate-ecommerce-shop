import { BASE_URL } from "./api"
import axios from "axios"

export const CoreAxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 55000,
})
