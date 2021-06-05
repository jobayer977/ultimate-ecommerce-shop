import { Column, Entity, ManyToOne } from "typeorm"

import { BaseAttributeEntity } from "../../../@base/entities/base-attribute.entity"
import { BrandsEntity } from "./brand.entity"
import { CategoryEntity } from "./category.entity"
import { DepartmentEntity } from "./department.entity"

@Entity("products")
export class ProductEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	description: string

	@Column({ nullable: true, type: "boolean" })
	isAvailable: boolean

	@Column({ nullable: true, type: "boolean" })
	isNewArrival: boolean

	@Column({ nullable: true, type: "boolean" })
	isTopSelling: boolean

	@Column({ nullable: true })
	mrp: string

	@Column({ nullable: true })
	mrpExclVat: string

	@Column({ nullable: true })
	mrpInclVat: string

	@Column({ nullable: true })
	mrpVat: string

	@Column({ nullable: true })
	productCode: string

	@Column({ nullable: true })
	productImages: string

	@Column({ nullable: true })
	specification: string

	@Column({ nullable: true })
	stock: string

	@ManyToOne(() => BrandsEntity, (brand) => brand.products)
	brand: BrandsEntity[]

	@ManyToOne(() => CategoryEntity, (category) => category.products)
	category: BrandsEntity[]

	@ManyToOne(() => DepartmentEntity, (department) => department.products)
	department: DepartmentEntity[]
}
