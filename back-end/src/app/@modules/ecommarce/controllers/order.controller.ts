import { Body, JsonController, Post } from "routing-controllers"
import { Container } from "typedi"
import { PlaceOrderDto } from "../dtos/placeorder.dto"
import { OrderService } from "./../services/order.service"

@JsonController("order")
export class OrderController {
	private orderService = Container.get(OrderService)

	@Post("/placeOrder")
	placeOrder(@Body() placeOrderDto: PlaceOrderDto) {
		return this.orderService.placeOrder(placeOrderDto)
	}
}
