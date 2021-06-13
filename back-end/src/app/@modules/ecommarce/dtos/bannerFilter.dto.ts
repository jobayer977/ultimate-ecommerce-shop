import { BannerType } from "../enums/banner.enums"
import { BaseAttributeFilterDto } from "../../../@base/dto/base-filter.dto"
import { IsOptional } from "class-validator"

export class BannerFilterDto extends BaseAttributeFilterDto {
	@IsOptional()
	type?: BannerType
}
