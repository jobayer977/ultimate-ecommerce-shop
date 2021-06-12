import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

import { BaseAttributeDto } from "../../../@base/dto/base-attribute.dto"

export class ProductDto extends BaseAttributeDto {
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	name: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	description: string

	@IsBoolean({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	isAvailable: boolean

	@IsBoolean({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	isNewArrival: boolean

	@IsBoolean({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	isTopSelling: boolean

	@IsNotEmpty({ message: `$Property is Required` })
	mrp: number

	mrpExclVat?: number

	mrpInclVat?: number

	mrpVat?: number

	@IsNotEmpty({ message: `$Property is Required` })
	productCode: string | number

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	productImages: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	specification: string

	@IsNotEmpty({ message: `$Property is Required` })
	stock: number

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	brand?: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	category?: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	department?: string
}
