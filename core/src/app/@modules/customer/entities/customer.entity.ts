import { Column, Entity } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"
import { IsEmail } from "class-validator"

@Entity("customers")
export class Customer extends BaseEntity {
	@Column({ nullable: true })
	firstName?: string

	@Column({ nullable: true })
	lastName?: string

	@Column({ nullable: true, unique: true })
	@IsEmail()
	email?: string

	@Column({ nullable: true })
	password?: string

	@Column({ unique: true })
	phoneNumber?: string

	@Column({ nullable: true })
	image?: string

	@Column({ nullable: true })
	otp?: string

	@Column({ nullable: true })
	dob?: string

	@Column({ nullable: true })
	gender?: string
}
