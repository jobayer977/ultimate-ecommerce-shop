export interface IPlaceOrder {
	user: string
	products: IPOrder[]
}

interface IPOrder {
	id: string
	quantity: number
}
