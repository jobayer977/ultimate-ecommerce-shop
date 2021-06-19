import jwt_decode from "jwt-decode"

export const getSession = () => {
	try {
		const token: any = localStorage.getItem("token")
		const decoded = jwt_decode(token)
		if (decoded) {
			return decoded
		} else {
			return false
		}
	} catch (error) {
		return false
	}
}
