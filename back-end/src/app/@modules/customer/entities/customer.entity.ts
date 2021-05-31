import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm"

import { IsEmail } from "class-validator"

@Entity("customers")
export class Customer {
	@PrimaryGeneratedColumn()
	id?: string | number

	@Column({ nullable: true })
	firstName?: string

	@Column({ nullable: true })
	lastName?: string

	@Column({ nullable: true })
	slug?: string

	@Column({ nullable: true })
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
	isActive?: boolean

	@Column({ type: "date", nullable: true })
	dob?: Date

	@Column({ nullable: true })
	gender?: string

	@CreateDateColumn()
	createdAt?: Date

	@UpdateDateColumn()
	updatedAt?: Date
}
