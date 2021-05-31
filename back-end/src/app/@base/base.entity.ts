import {
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm"

export abstract class BaseEntity {
	@PrimaryGeneratedColumn()
	id: string

	@CreateDateColumn()
	createdAt?: Date

	@UpdateDateColumn()
	updatedAt?: Date
}
