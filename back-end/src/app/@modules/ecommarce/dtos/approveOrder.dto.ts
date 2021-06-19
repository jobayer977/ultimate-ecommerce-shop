import { IsString } from "class-validator"

export class ApproveOrderDto {
	@IsString()
	code: string
}
