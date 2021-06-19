import _ from "lodash"
import { notification } from "antd"
import { useState } from "react"

const useService = (service: any, onSuccess: any) => {
	const [loading, setLoading] = useState(false)
	const query = (payload: any) => {
		setLoading(true)
		service(payload).subscribe(
			(res: any) => {
				if (res?.data?.success || res?.data?.auth) {
					if (onSuccess) {
						onSuccess(res?.data)
					}
					setLoading(false)
				} else {
					const errType = typeof res?.response?.data?.message
					if (
						_.isArray(res?.response?.data?.errors) &&
						!_.isEmpty(res?.response?.data?.errors)
					) {
						res?.response?.data?.errors.map((x: any) => {
							notification.error({
								duration: 1,
								message: String(x?.constraints?.matches),
							})
						})
					} else if (errType === "string") {
						notification.error({
							duration: 1,
							message: String(res?.response?.data?.message),
						})
					} else if (errType === "object") {
						notification.error({
							duration: 1,
							message: String(res?.response?.data?.message?.message),
						})
					}

					setLoading(false)
				}
			},
			(error: any) => {
				if (error?.errorMessage) {
					notification.error({
						duration: 1,

						message: error?.errorMessage,
					})
				} else if (error?.response) {
					notification.error({
						duration: 1,

						message: error?.response?.data?.errorMessage,
					})
				} else {
					notification.error({
						duration: 1,

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
