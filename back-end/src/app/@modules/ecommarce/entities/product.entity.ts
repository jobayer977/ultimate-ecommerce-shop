import { Column, Entity, OneToMany } from "typeorm"

import { BaseAttributeEntity } from "../../../@base/entities/base-attribute.entity"
import { BrandsEntity } from "./brand.entity"

@Entity("products")
export class ProductEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	name: string

	@Column({ nullable: true })
	description: string

	@Column({ nullable: true })
	isAvailable: boolean

	@Column({ nullable: true })
	isNewArrival: boolean

	@Column({ nullable: true })
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

	@OneToMany((type) => BrandsEntity, (brand) => brand.product)
	brands: BrandsEntity[]

	// @OneToMany(() => DepartmentEntity, (department) => department.product)
	// department: DepartmentEntity[]

	// @OneToMany(() => CategoryEntity, (category) => category.product)
	// category: CategoryEntity[]
}
