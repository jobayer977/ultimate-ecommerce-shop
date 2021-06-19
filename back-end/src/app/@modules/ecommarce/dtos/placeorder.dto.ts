import { ArrayNotEmpty, IsString } from "class-validator"

interface Item {
	Id: string
	quantity: number
}

export class PlaceOrderDto {
	@IsString()
	user: string

	@ArrayNotEmpty()
	products: Array<Item>
}
