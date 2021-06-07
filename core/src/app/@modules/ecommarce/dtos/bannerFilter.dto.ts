import { IsIn, IsNotEmpty } from "class-validator"

import { BannerType } from "../enums/banner.enums"
import { BaseAttributeFilterDto } from "../../../@base/dto/base-filter.dto"

export class BannerFilterDto extends BaseAttributeFilterDto {
	@IsNotEmpty({ message: `$Property is Required` })
	@IsIn([
		BannerType.SLIDER_CAMPAIGN,
		BannerType.SLIDER_HOMEPAGE,
		BannerType.TWO_FIRST,
		BannerType.TWO_LAST,
		BannerType.THREE_FIRST,
		BannerType.THREE_MIDDLE,
		BannerType.THREE_LAST,
		BannerType.POPUP_BANNER,
		BannerType.SHOP_BY_BANNER_SIDEBAR,
		BannerType.FULL_BANNER,
	])
	type: BannerType
}
