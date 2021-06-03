import { IsNotEmpty, IsOptional, IsString } from "class-validator"

import { BaseAttributeDto } from "../../../@base/dto/base-attribute.dto"

export class ProductDto extends BaseAttributeDto {
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	name: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	description: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	isAvailable: boolean

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	isNewArrival: boolean

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	isTopSelling: boolean

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	mrp: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	mrpExclVat: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	mrpInclVat: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	mrpVat: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	productCode: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	productImages: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	specification: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	stock: string

	@IsOptional()
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	brand?: any

	@IsOptional()
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	department?: any

	@IsOptional()
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	category?: any
}
