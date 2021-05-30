import { Column, Entity } from "typeorm"

import { BaseEntity } from "../base/base.entity"

@Entity("user")
export class User extends BaseEntity {
	@Column({ nullable: true })
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
