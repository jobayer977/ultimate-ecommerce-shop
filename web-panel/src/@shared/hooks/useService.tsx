import { Observable } from "rxjs"
import { notification } from "antd"
import { useState } from "react"

const useService = (service: any, onSuccess: any) => {
	const [loading, setLoading] = useState(false)

	const observable = new Observable(function subscribe(service) {
		service.next()
	})

	const query = (payload: any) => {
		setLoading(true)
		service(payload).subscribe(
			(res: any) => {
				if (res?.data?.success) {
					if (onSuccess) {
						onSuccess(res?.data)
					}
					setLoading(false)
				} else {
					// if (res?.response?.data?.message) {
					// 	notification.error({
					// 		duration: 28,
					// 		message: String(res?.response?.data?.message),
					// 	})
					// }

					setLoading(false)
				}
			},
			(error: any) => {
				console.log(error.response)
				if (error?.errorMessage) {
					notification.error({
						duration: 28,
						message: error?.errorMessage,
					})
				} else if (error?.response) {
					notification.error({
						duration: 28,
						message: error?.response?.data?.errorMessage,
					})
				} else {
					notification.error({
						duration: 28,
						message: error?.message,
					})
				}

				setLoading(false)
			}
		)
	}

	return { query, loading }
}
export default useService
