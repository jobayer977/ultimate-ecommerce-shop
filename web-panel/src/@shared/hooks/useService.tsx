import { AlertType } from "@enums/AlertType"
import { useAlert } from "./useAlert"
import { useState } from "react"

const useService = (service: any, onSuccess: any, error: any = null) => {
	const alert = useAlert()
	const [loading, setLoading] = useState(false)
	const query = (payload: any) => {
		try {
			setLoading(true)
			service(payload).subscribe(
				(res: any) => {
					if (res?.data?.success) {
						if (onSuccess) {
							onSuccess(res?.data)
						}
						setLoading(false)
					} else {
						if (error) {
							error(res?.response?.data)
						}
						if (res?.response?.data?.message) {
							alert(res?.response?.data?.message, AlertType.Error)
						}
						if (res?.response?.data?.errorMessage) {
							alert(res?.response?.data?.errorMessage, AlertType.Error)
						}
						if (res?.data?.errorMessage) {
							alert(res?.data?.errorMessage, AlertType.Error)
						}
						setLoading(false)
					}
				},
				(error: any) => {
					if (error) {
						error(error)
					}
					if (error?.errorMessage) {
						alert(error?.errorMessage, AlertType.Error)
					} else if (error?.response) {
						alert(error?.response?.data?.errorMessage, AlertType.Error)
					} else if (error.errorMessage) {
						alert(error.errorMessage, AlertType.Error)
					} else {
						alert(error?.message, AlertType.Error)
					}

					setLoading(false)
				}
			)
		} catch (error) {
			setLoading(false)
		}
	}
	return { query, loading }
}
export default useService
