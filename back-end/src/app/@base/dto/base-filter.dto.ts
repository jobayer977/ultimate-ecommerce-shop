import { IsNumber, IsOptional } from "class-validator"

import { BaseAttributeDto } from "./base-attribute.dto"

export class BaseFilterDto extends BaseAttributeDto {
	@IsOptional()
	searchTerm: string

	@IsOptional()
	@IsNumber()
	page: number

	@IsOptional()
	@IsNumber()
	take: number
}
