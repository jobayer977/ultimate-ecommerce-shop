import { IsIn, IsOptional } from "class-validator"

import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { UserTypes } from "../enums/userType.enum"

export class UserFilterDto extends BaseFilterDto {
	@IsOptional()
	@IsIn([UserTypes.ADMIN, UserTypes.CUSTOMER, UserTypes.VENDOR])
	type?: UserTypes
}
