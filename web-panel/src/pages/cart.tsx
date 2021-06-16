import { Button, Empty, PageHeader } from "antd"
import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from "@modules/cart/redux/cart.actions"
import { selectCartItems, selectTotal } from "@modules/cart/redux/cart.selector"
import { useDispatch, useSelector } from "react-redux"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import Link from "next/link"
import React from "react"
import { createStructuredSelector } from "reselect"
import { routeConstant } from "@shared/constant/routes.constant"
import { takaCurrencySing } from "@shared/constant/preferance"

const routes = [
	{
		path: routeConstant.root,
		breadcrumbName: "Home",
	},
	{
		path: routeConstant.cart,
		breadcrumbName: "Cart",
	},
]
const CartPage = () => {
	const { cartItems, totalSum } = useSelector(
		createStructuredSelector({
			cartItems: selectCartItems,
			totalSum: selectTotal,
		})
	)
	const dispatch = useDispatch()
	console.log(cartItems)

	const onClickRemoveItemFromCart = (item: any) => {
		dispatch(removeItemFromCart(item))
	}
	const onClickClearItemFromCart = (item: any) => {
		dispatch(clearItemFromCart(item))
	}
	return (
		<AppLayoutComponent>
			<div className="ruby-container">
				<PageHeader
					className="inner-page-header"
					title="Cart"
					breadcrumb={{ routes }}
				/>
				{cartItems.length > 0 ? (
					<>
						<div className="row">
							<div className="col-lg-12">
								<div className="cart-table table-responsive">
									<table className="table table-bordered">
										<thead>
											<tr>
												<th className="pro-thumbnail">Thumbnail</th>
												<th className="pro-title">Product</th>
												<th className="pro-price">Price</th>
												<th className="pro-quantity">Quantity</th>
												<th className="pro-subtotal">Total</th>
												<th className="pro-remove">Remove</th>
											</tr>
										</thead>
										<tbody>
											{cartItems.map((pd: any) => (
												<tr key={String(pd?.id)}>
													<td className="pro-thumbnail">
														<Link
															href={{
																pathname: routeConstant.product,
																query: {
																	id: pd.id,
																},
															}}>
															<a>
																<img
																	className="img-fluid"
																	src={pd.productImages}
																	alt="Product"
																/>
															</a>
														</Link>
													</td>
													<td className="pro-title">
														<Link
															href={{
																pathname: routeConstant.product,
																query: {
																	id: pd.id,
																},
															}}>
															<a>{pd.name}</a>
														</Link>
													</td>
													<td className="pro-price">
														<span>
															{takaCurrencySing}
															{pd?.mrp} TK
														</span>
													</td>
													<td className="pro-quantity">
														<div className="pro-qty">
															<Button
																onClick={() =>
																	dispatch(removeItemFromCart(pd))
																}>
																-
															</Button>
															<input type="text" value={pd?.quantity} />
															<Button
																onClick={() => dispatch(addItemToCart(pd))}>
																+
															</Button>
														</div>
													</td>
													<td className="pro-subtotal">
														<span>
															{takaCurrencySing}
															{pd?.quantity * pd.mrp} TK
														</span>
													</td>
													<td
														className="pro-remove"
														onClick={() => onClickClearItemFromCart(pd)}>
														<i className="fa fa-trash-o"></i>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-lg-6  ml-auto">
								<div className="cart-calculator-wrapper">
									<h3>Cart Totals</h3>
									<div className="cart-calculate-items">
										<div className="table-responsive">
											<table className="table table-bordered">
												<tr>
													<td>Sub Total</td>
													<td>
														{takaCurrencySing} {totalSum} TK
													</td>
												</tr>
												{/* <tr>
											<td>Shipping</td>
											<td>$70</td>
										</tr> */}
												<tr>
													<td>Total</td>
													<td className="total-amount">
														{takaCurrencySing} {totalSum} TK
													</td>
												</tr>
											</table>
										</div>
									</div>
									<div className="d-flex justify-content-end">
										<a href="checkout.html" className="btn-add-to-cart">
											Proceed To Checkout
										</a>
									</div>
								</div>
							</div>
						</div>
					</>
				) : (
					<Empty description={<b>Cart Empty</b>}>
						<Link href={routeConstant.productList}>
							<Button style={{ marginBottom: 100 }} type="primary">
								Shopping
							</Button>
						</Link>
					</Empty>
				)}
			</div>
		</AppLayoutComponent>
	)
}

export default CartPage
