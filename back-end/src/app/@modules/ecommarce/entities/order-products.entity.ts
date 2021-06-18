import { Column, Entity, ManyToOne } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"
import { Order } from "./order.entity"
import { ProductEntity } from "./product.entity"

@Entity("order_products")
export class OrderProduct extends BaseEntity {
	@Column({ nullable: true, type: "float" })
	public mrp?: any

	@Column({ nullable: true })
	public quantity?: number

	@Column({ nullable: true })
	public name?: string

	@ManyToOne((type) => Order, (order) => order, {
		onDelete: "CASCADE",
	})
	public order?: Order

	@ManyToOne((type) => ProductEntity, {
		onDelete: "CASCADE",
	})
	public product?: ProductEntity
}
