import {
	IsEmail,
	IsMobilePhone,
	IsNotEmpty,
	IsOptional,
	IsString,
} from "class-validator"

export class CustomerDto {
	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	firstName: string

	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	lastName: string

	@IsString({ message: `$value Must be string.` })
	@IsNotEmpty({ message: `$value is Required.` })
	@IsEmail()
	email: string

	@IsMobilePhone("bn-BD")
	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	phoneNumber: string

	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	image: string

	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	dob: string

	@IsString({ message: `$value Must be string.` })
	@IsOptional()
	gender: string
}
