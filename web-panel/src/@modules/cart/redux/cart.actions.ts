import {
	ADD_ITEM_TO_CART,
	CLEAR_ITEM_FROM_CART,
	REMOVE_ITEM_FROM_CART,
} from "./cart.types"

export const addItemToCart = (item: any) => ({
	type: ADD_ITEM_TO_CART,
	payload: item,
})

export const removeItemFromCart = (item: any) => ({
	type: REMOVE_ITEM_FROM_CART,
	payload: item,
})

export const clearItemFromCart = (item: any) => ({
	type: CLEAR_ITEM_FROM_CART,
	payload: item,
})
