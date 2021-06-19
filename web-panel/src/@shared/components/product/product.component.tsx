import { Button, Card, notification } from "antd"

import { IFProduct } from "@shared/interfaces/product.interface"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { addItemToCart } from "@modules/cart/redux/cart.actions"
import { routeConstant } from "@shared/constant/routes.constant"
import { useDispatch } from "react-redux"

const { Meta } = Card

interface IFProps {
	product: IFProduct
}
const ProductComponent: React.FC<IFProps> = ({ product }) => {
	const dispatch = useDispatch()

	const onClickAddToCart = () => {
		dispatch(addItemToCart(product))
		notification.success({ message: "Added into cart", duration: 0.5 })
	}
	return (
		<Card
			style={{ cursor: "pointer" }}
			cover={
				<Link
					href={{
						pathname: routeConstant.product,
						query: {
							id: product?.id,
						},
					}}>
					<a>
						<Image
							src={String(product?.productImages)}
							alt={String(product?.name)}
							width={500}
							height={500}
						/>
					</a>
				</Link>
			}
			actions={[
				<Button onClick={onClickAddToCart} type="primary">
					Add To Cart
				</Button>,
			]}>
			<Link
				href={{
					pathname: routeConstant.product,
					query: {
						id: product?.id,
					},
				}}>
				<a>
					<Meta
						title={<b style={{ color: "#482f2f" }}>{product?.name}</b>}
						description={
							<b style={{ color: "#482f2f" }}>৳ {product?.mrp} TK</b>
						}
					/>
				</a>
			</Link>
		</Card>
	)
}

export default ProductComponent
