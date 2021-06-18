interface Item {
	Id: string
	quantity: number
}

export class PlaceOrderDto {
	user: string
	products: Array<Item>
}
