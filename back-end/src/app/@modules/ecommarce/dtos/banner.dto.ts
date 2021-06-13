import { IsIn, IsNotEmpty, IsString } from "class-validator"

import { BannerType } from "./../enums/banner.enums"
import { BaseAttributeDto } from "../../../@base/dto/base-attribute.dto"

export class BannerDto extends BaseAttributeDto {
	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	image: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	title: string

	@IsString({ message: `$Property is must be string` })
	@IsNotEmpty({ message: `$Property is Required` })
	url: string

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
