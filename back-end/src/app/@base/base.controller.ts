import { Delete, Get, Post, Put } from "routing-controllers"

export class BaseController {
	@Post("/base")
	createBase() {
		return "From Base Controller POST "
	}

	@Get("/base")
	readBase() {
		return "From Base Controller Get "
	}

	@Put("/base")
	updateBase() {
		return "From Base Controller update "
	}

	@Delete("/base")
	deleteBase() {
		return "From Base Controller delete "
	}
}
