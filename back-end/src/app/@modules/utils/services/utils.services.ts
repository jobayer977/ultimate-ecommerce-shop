import * as fs from "fs"

import { NotAcceptableError } from "routing-controllers"
import { Service } from "typedi"
import { successPlaceholder } from "../../../@utils/responsePlaceholder.util"

var cloudinary = require("cloudinary").v2
@Service()
export class UtilsService {
	async uploadFile(file: any) {
		const acceptableFileTypes = ["image/png", "image/jpeg"]
		const name = `${new Date().getTime()}.${file.mimetype.replace(
			"image/",
			""
		)}`
		const filePath = `./uploads/${name}`
		if (acceptableFileTypes.includes(file.mimetype)) {
			fs.writeFile(filePath, file.buffer, (err: any) => {})
			const cFile = await cloudinary.uploader.upload(
				filePath,
				function (error, result) {}
			)
			return successPlaceholder("Image Uploaded", {
				link: cFile?.url,
			})
		} else {
			throw new NotAcceptableError(
				`Invalid file type. Acceptable File type ${acceptableFileTypes.toString()}`
			)
		}
	}
}
