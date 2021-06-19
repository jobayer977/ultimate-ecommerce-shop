import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"
import { Order } from "../../ecommarce/entities/order.entity"
import { UserInfo } from "./user-info.entity"
import { UserTypes } from "./../enums/userType.enum"

@Entity("users")
export class User extends BaseEntity {
	@Column({ nullable: true, unique: true })
	phoneNumber?: string

	@Column({ nullable: true })
	password?: string

	@Column({ nullable: true, type: "enum", enum: UserTypes })
	type: UserTypes

	@OneToOne(() => UserInfo, (userInfo) => userInfo.user)
	@JoinColumn()
	userInfo: UserInfo

	@OneToMany(() => Order, (order) => order.user)
	orders: Order[]
}
