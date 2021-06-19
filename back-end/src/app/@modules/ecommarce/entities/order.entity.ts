import { Column, Entity, OneToMany } from "typeorm"

import { BaseEntity } from "../../../@base/entities/base.entity"
import { OrderDeliveryStatus } from "../enums/order.enums"
import { OrderProduct } from "./order-products.entity"

@Entity("orders")
export class Order extends BaseEntity {
	@Column({ nullable: true })
	code?: string

	@Column({ nullable: true, default: false })
	approved?: boolean

	@Column({ nullable: true, type: "float", default: 0 })
	totalAmount?: number

	@Column({ nullable: true, type: "float", default: 0 })
	totalSubAmount?: number

	@Column({ nullable: true, type: "float", default: 0 })
	totalVat?: number

	@Column({
		nullable: true,
		default: OrderDeliveryStatus.UNAPPROVE,
		comment: "PENDING/PROCESSING/SHIPPED/DELIVERED/CANCEL/UNAPPROVE",
	})
	deliveryStatus?: string

	@Column({ nullable: true, type: "float", default: 0 })
	deliveryCharge?: number

	@Column({ nullable: true })
	billingAddress?: string

	@Column({ nullable: true })
	shippingAddress?: string

	@OneToMany((type) => OrderProduct, (orderProduct) => orderProduct.order, {
		onDelete: "CASCADE",
	})
	public products?: OrderProduct[]
}
