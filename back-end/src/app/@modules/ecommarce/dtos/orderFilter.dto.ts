import { IsOptional, IsString } from "class-validator"

import { BaseFilterDto } from "./../../../@base/dto/base-filter.dto"
export class OrderFilterDto extends BaseFilterDto {
	@IsOptional()
	@IsString()
	user?: string
}
