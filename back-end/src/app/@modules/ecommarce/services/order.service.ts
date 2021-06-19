import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import {
	getSingleDataPlaceholder,
	successPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { UserTypes } from "../../user/enums/userType.enum"
import { ApproveOrderDto } from "../dtos/approveOrder.dto"
import { OrderFilterDto } from "../dtos/orderFilter.dto"
import { PlaceOrderDto } from "../dtos/placeorder.dto"
import { OrderDeliveryStatus } from "../enums/order.enums"
import { asyncForEach, getRandomString } from "./../../../@utils/util.function"
import { UserRepository } from "./../../user/repository/user.repository"
import { OrderProductRepository } from "./../repository/order-product.repository"
import { OrderRepository } from "./../repository/order.repository"
import { ProductRepository } from "./../repository/product.repository"

@Service()
export class OrderService {
	constructor(
		@InjectRepository()
		private userRepository: UserRepository,
		@InjectRepository()
		private productRepository: ProductRepository,
		@InjectRepository()
		private orderRepository: OrderRepository,
		@InjectRepository()
		private orderProductRepository: OrderProductRepository
	) {}

	//!Place order
	async placeOrder(placeOrderDto: PlaceOrderDto) {
		const { user, products } = placeOrderDto
		//check customer
		try {
			const findUser = await this.userRepository.findOne({
				id: user,
				type: UserTypes.CUSTOMER,
			})
			if (!findUser) {
				throw new NotFoundError("User Not Found")
			}
			//update product entity
			const orderProducts: any = []
			await asyncForEach(products, async (cartPd: any) => {
				const orderProduct: any = {}
				const isProductExist: any = await this.productRepository.findOne({
					id: cartPd.id,
				})
				if (isProductExist && isProductExist.stock > cartPd.quantity) {
					let updatedStockPayload: any = {
						stock: isProductExist.stock - cartPd.quantity,
					}
					orderProduct.name = isProductExist.name
					orderProduct.mrp = isProductExist.mrp
					orderProduct.mrpVat = isProductExist.mrpVat
					orderProduct.quantity = cartPd.quantity

					await this.productRepository.update(
						{ id: cartPd.id },
						updatedStockPayload
					)
					orderProducts.push(orderProduct)
				} else {
					throw new Error(`${isProductExist.name} is Stock Out`)
				}
			})
			//generate order code
			const codeGenerate = async (): Promise<any> => {
				const promise = new Promise(async (resolve, reject) => {
					let generateOrderCode = `FSL${getRandomString(9)}`
					const isCodeAlreadyExist = await this.orderRepository.findOne({
						code: generateOrderCode,
					})
					if (isCodeAlreadyExist) {
						resolve(false)
					} else {
						resolve(generateOrderCode)
					}
				})
				if ((await promise) === false) {
					codeGenerate()
				} else {
					return await promise
				}
			}

			const generatedCode = await codeGenerate()

			//Insert order in order entity
			let order: any = {
				totalSubAmount: 0,
				totalAmount: 0,
				totalVat: 0,
				deliveryCharge: 0,
				user: user,
			}
			order.code = generatedCode
			order.approved = false

			await asyncForEach(orderProducts, (pd: any) => {
				order.totalSubAmount += Number(pd.mrp) * Number(pd.quantity)
				order.totalVat += Number(pd.mrpVat) * Number(pd.quantity)
			})
			order.totalAmount =
				Number(order.totalSubAmount) + Number(order.deliveryCharge)

			const createdOrder = await this.orderRepository.insert(order)
			console.log(createdOrder)
			orderProducts.map((o: any) => {
				o.order = createdOrder.identifiers[0].id
			})
			await this.orderProductRepository.insert(orderProducts)
			//Send email

			const responsePayload = await this.orderRepository.findOne(
				createdOrder.generatedMaps[0].id,
				{
					relations: ["products"],
				}
			)

			return successPlaceholder("Order Created", responsePayload)
		} catch (error) {
			throw new Error(error)
		}

		//return response
	}

	//!Filter
	async filter(orderFilterDto: OrderFilterDto) {
		return this.orderRepository.filter(orderFilterDto)
	}

	//! Get one
	async findById(id: string) {
		try {
			const data = await this.orderRepository.findOne(
				{ id },
				{ relations: ["products"] }
			)
			if (!data) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	async approved(approveOrderDto: ApproveOrderDto) {
		const { code } = approveOrderDto
		try {
			const order = await this.orderRepository.find({ code })
			if (!order.length) {
				throw new NotFoundError("Order Not Found")
			}
			const payload: any = {
				approved: true,
				deliveryStatus: OrderDeliveryStatus.PENDING,
			}

			await this.orderRepository.update({ code }, payload)
			return successPlaceholder("Approved")
		} catch (error) {
			throw new Error(error.message)
		}
	}
}
