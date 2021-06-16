import {
	ADD_ITEM_TO_CART,
	CLEAR_ITEM_FROM_CART,
	REMOVE_ITEM_FROM_CART,
} from "./cart.types"
import { addItemUtils, removeItemUtils } from "./cart.utils"
const INITIAL_STATE: any = {
	cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addItemUtils(state.cartItems, action.payload),
			}
		case REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: removeItemUtils(state.cartItems, action.payload),
			}
		case CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(x: any) => x.id !== action.payload.id
				),
			}

		default:
			return state
	}
}

export default cartReducer
