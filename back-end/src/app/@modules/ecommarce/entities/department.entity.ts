import { Column, Entity, OneToMany } from "typeorm"

import { BaseAttributeEntity } from "./../../../@base/base-attribute.entity"
import { CategoryEntity } from "./category.entity"

@Entity("department")
export class DepartmentEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	slug: string

	@Column({ nullable: true })
	image: string

	@OneToMany((type) => CategoryEntity, (category) => category.department)
	categories?: CategoryEntity[]
}
