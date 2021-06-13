import { Controller, Post, UploadedFile } from "routing-controllers"
import { Container } from "typedi"
import { storageOptions } from "./../../../@utils/util.function"
import { UtilsService } from "./../services/utils.services"

@Controller("utils")
export class UtilsController {
	private utilsService = Container.get(UtilsService)

	@Post("/uploadImage")
	uploadImage(@UploadedFile("image", { options: storageOptions }) file: any) {
		console.log(file)
		return this.utilsService.uploadFile(file)
	}
}
