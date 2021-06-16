import { createSelector } from "reselect"

const selectState = (state: any) => state.cart

export const selectCartItems = createSelector(
	[selectState],
	(cart) => cart.cartItems
)

export const selectCartItemsQuantity = createSelector(
	[selectState],
	(cart: any) =>
		cart.cartItems.reduce(
			(accumulateTotal: any, currentTotal: any) =>
				accumulateTotal + currentTotal.quantity,
			0
		)
)

export const selectTotal = createSelector([selectState], (items: any) =>
	items.cartItems.reduce(
		(accumulateTotal: any, currentTotal: any) =>
			accumulateTotal + currentTotal.quantity * currentTotal.mrp,
		0
	)
)
