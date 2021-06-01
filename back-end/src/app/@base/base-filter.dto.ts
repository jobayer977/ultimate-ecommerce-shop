import { IsNumber, IsOptional } from "class-validator"

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
