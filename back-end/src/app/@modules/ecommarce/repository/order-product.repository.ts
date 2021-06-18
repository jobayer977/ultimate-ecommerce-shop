import { EntityRepository, Repository } from "typeorm"

import { OrderProduct } from "./../entities/order-products.entity"

@EntityRepository(OrderProduct)
export class OrderProductRepository extends Repository<OrderProduct> {}
