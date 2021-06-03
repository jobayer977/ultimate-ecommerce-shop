import { IsBoolean, IsOptional } from "class-validator"

export class BaseAttributeDto {
	@IsOptional()
	@IsBoolean({ message: `$Property must be true or false` })
	isFeatured: boolean

	@IsOptional()
	@IsBoolean({ message: `$Property must be true or false` })
	isActive: boolean

	@IsOptional()
	@IsBoolean({ message: `$Property must be true or false` })
	isPopular: boolean

	@IsOptional()
	@IsBoolean({ message: `$Property must be true or false` })
	isHot: boolean

	@IsOptional()
	@IsBoolean({ message: `$Property must be true or false` })
	isNew: boolean
}
