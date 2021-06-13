import { ExpressErrorMiddlewareInterface } from "routing-controllers"

export class CustomErroHandler implements ExpressErrorMiddlewareInterface {
	error(error: any, request: any, response: any, next: (err: any) => any) {
		next({
			ERROR: error,
			REQUEST: request,
			RESPONSE: response,
		})
	}
}
