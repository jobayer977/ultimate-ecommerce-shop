import { Column, Entity, ManyToOne, OneToMany } from "typeorm"

import { BaseAttributeEntity } from "../../../@base/entities/base-attribute.entity"
import { DepartmentEntity } from "./department.entity"
import { ProductEntity } from "./product.entity"

@Entity("category")
export class CategoryEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	slug: string

	@Column({ nullable: true })
	image: string

	@ManyToOne((type) => DepartmentEntity, (department) => department.categories)
	department?: DepartmentEntity[]

	@OneToMany(() => ProductEntity, (product) => product.category)
	products: ProductEntity[]
}
