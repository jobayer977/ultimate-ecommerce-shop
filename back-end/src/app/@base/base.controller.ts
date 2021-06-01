import "reflect-metadata"

import { Post } from "routing-controllers"

export abstract class BaseController {
	@Post("/base")
	public createBase() {
		return "From Base Controller POST "
	}
}
