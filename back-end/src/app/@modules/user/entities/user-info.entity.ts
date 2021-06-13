import { Column, Entity, OneToOne } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"
import { Gender } from "./../../../@enums/index"
import { User } from "./user.entity"

@Entity("userProfile")
export class UserInfo extends BaseEntity {
	@Column({ nullable: true })
	firstName?: string

	@Column({ nullable: true })
	lastName?: string

	@Column({ nullable: true })
	city?: string

	@Column({ nullable: true })
	country?: string

	@Column({ nullable: true })
	birthDate?: string

	@Column({ nullable: true })
	email?: string

	@Column({ nullable: true, unique: true })
	phoneNumber?: string

	@Column({ type: "enum", enum: Gender, nullable: true })
	gender?: Gender

	@OneToOne(() => User, (user) => user.userInfo)
	user: User
}
