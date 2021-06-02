import { Column, Entity } from "typeorm"

import { BaseAttributeEntity } from "./../../../@base/base-attribute.entity"

@Entity("category")
export class CategoryEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	slug: string

	@Column({ nullable: true })
	image: string
}
