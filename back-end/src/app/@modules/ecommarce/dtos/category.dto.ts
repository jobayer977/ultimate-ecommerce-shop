import { IsNotEmpty, IsString } from "class-validator"

import { BaseAttributeDto } from "../../../@base/base-attribute.dto"

export class CategoryDto extends BaseAttributeDto {
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	name: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	slug: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	image: string
}
