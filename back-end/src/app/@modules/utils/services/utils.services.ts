import * as fs from "fs"

import { ENV } from "./../../../../ENV"
import { NotAcceptableError } from "routing-controllers"
import { Service } from "typedi"
import { successPlaceholder } from "../../../@utils/responsePlaceholder.util"

@Service()
export class UtilsService {
	uploadFile(file: any) {
		const acceptableFileTypes = ["image/png", "image/jpeg"]
		const name = `${new Date().getTime()}.${file.mimetype.replace(
			"image/",
			""
		)}`
		const filePath = `./uploads/${name}`
		if (acceptableFileTypes.includes(file.mimetype)) {
			fs.writeFile(filePath, file.buffer, (err: any) => {})
			return successPlaceholder("Image Uploaded", {
				link: `${ENV.UPLOAD_BASE_PUBLIC_PATH}${name}`,
			})
		} else {
			throw new NotAcceptableError(
				`Invalid file type. Acceptable File type ${acceptableFileTypes.toString()}`
			)
		}
	}
}
