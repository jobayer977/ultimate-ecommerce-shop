import { Column, Entity } from "typeorm"

import { BaseAttributeEntity } from "./../../../@base/base-attribute.entity"

@Entity("department")
export class DepartmentEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	slug: string

	@Column({ nullable: true })
	image: string
}
