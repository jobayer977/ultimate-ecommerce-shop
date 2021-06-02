import "reflect-metadata"
import { Body, HttpCode, JsonController, Post } from "routing-controllers"
import { Container } from "typedi"
import { DefaultService } from "./../services/default.service"

@JsonController("default")
export class DefaultController {
	private defaultService = Container.get(DefaultService)

	@HttpCode(201)
	@Post("/experiment")
	async admin(@Body() data: any): Promise<any> {
		return this.defaultService.createUser(data)
	}
}
