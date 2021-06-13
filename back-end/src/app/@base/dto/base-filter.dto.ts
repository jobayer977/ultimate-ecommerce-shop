import { IsNumber, IsOptional } from "class-validator"

import { BaseAttributeDto } from "./base-attribute.dto"

export class BaseFilterDto {
	@IsOptional()
	searchTerm: string

	@IsOptional()
	@IsNumber()
	page: number

	@IsOptional()
	@IsNumber()
	take: number
}

export class BaseAttributeFilterDto extends BaseAttributeDto {
	@IsOptional()
	searchTerm: string

	@IsOptional()
	@IsNumber()
	page: number

	@IsOptional()
	@IsNumber()
	take: number
}
