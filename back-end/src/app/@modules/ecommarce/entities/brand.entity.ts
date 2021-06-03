import { Column, Entity, ManyToOne } from "typeorm"

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

	@ManyToOne((type) => ProductEntity, (product) => product.brands)
	product?: ProductEntity[]
}
