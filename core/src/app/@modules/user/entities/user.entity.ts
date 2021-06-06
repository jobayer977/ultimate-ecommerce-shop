import { Column, Entity, JoinColumn, OneToOne } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"
import { UserInfo } from "./user-info.entity"

@Entity("users")
export class User extends BaseEntity {
	@Column({ nullable: true, unique: true })
	phoneNumber?: string

	@Column({ nullable: true })
	password?: string

	@OneToOne(() => UserInfo, (userInfo) => userInfo.user)
	@JoinColumn()
	userInfo: UserInfo
}
