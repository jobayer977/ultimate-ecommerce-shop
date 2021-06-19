import {
	Body,
	Get,
	JsonController,
	Param,
	Post,
	QueryParams,
} from "routing-controllers"
import { Container } from "typedi"
import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import { PlaceOrderDto } from "../dtos/placeorder.dto"
import { ApproveOrderDto } from "./../dtos/approveOrder.dto"
import { OrderService } from "./../services/order.service"

@JsonController("order/")
export class OrderController {
	private orderService = Container.get(OrderService)

	@Post("placeOrder")
	placeOrder(@Body() placeOrderDto: PlaceOrderDto) {
		return this.orderService.placeOrder(placeOrderDto)
	}

	@Get("filter")
	filter(@QueryParams() baseFilterDto: BaseFilterDto) {
		return this.orderService.filter(baseFilterDto)
	}
	@Get(":id")
	async findById(@Param("id") id: string) {
		return this.orderService.findById(id)
	}

	@Post("approveOrder")
	approved(@Body() approveOrderDto: ApproveOrderDto) {
		return this.orderService.approved(approveOrderDto)
	}
}
