import { BaseFilterQuery } from "./base.interface"
export interface IPlaceOrder {
	user: string
	products: IPOrder[]
}

interface IPOrder {
	id: string
	quantity: number
}

export interface IFilterOrder extends BaseFilterQuery {
	user?: string
}
