import { Column, Entity } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"

@Entity("users")
export class User extends BaseEntity {
	@Column({ nullable: true, unique: true })
	phoneNumber?: string

	@Column({ nullable: true })
	password?: string

	@Column({ nullable: true })
	firstName?: string

	@Column({ nullable: true })
	lastName?: string

	@Column({ nullable: true })
	gender?: string

	@Column({ nullable: true })
	email?: string
}
