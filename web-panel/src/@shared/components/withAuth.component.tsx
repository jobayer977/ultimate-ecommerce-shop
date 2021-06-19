import { routeConstant } from "@shared/constant/routes.constant"
import { useRouter } from "next/router"
const withAuth = (WrappedComponent: any) => {
	return (props: JSX.IntrinsicAttributes) => {
		// checks whether we are on client / browser or server.
		if (typeof window !== "undefined") {
			const Router = useRouter()
			const token = localStorage.getItem("token")

			// If there is no access token we redirect to "/" page.
			if (!token) {
				window.location.replace(routeConstant.authLogin)
			}

			// If this is an token we just render the component that was passed with all its props

			return <WrappedComponent {...props} />
		}

		// If we are on server, return null
		return null
	}
}

export default withAuth
