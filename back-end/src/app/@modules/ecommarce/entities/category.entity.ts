import { Column, Entity, JoinColumn, OneToOne } from "typeorm"

import { BaseAttributeEntity } from "./../../../@base/base-attribute.entity"
import { DepartmentEntity } from "./department.entity"

@Entity("category")
export class CategoryEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	slug: string

	@Column({ nullable: true })
	image: string

	@OneToOne(() => DepartmentEntity)
	@JoinColumn()
	department: DepartmentEntity[]
}
