import { Column, Entity, OneToMany } from "typeorm"

import { BaseAttributeEntity } from "../../../@base/entities/base-attribute.entity"
import { ProductEntity } from "./product.entity"

@Entity("brands")
export class BrandsEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	slug: string

	@Column({ nullable: true })
	image: string

	@OneToMany(() => ProductEntity, (product) => product.brand)
	products: ProductEntity[]
}
