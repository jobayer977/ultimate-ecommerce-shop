import { Button, Card } from "antd"

import { IFProduct } from "@shared/interfaces/product.interface"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { routeConstant } from "@shared/constant/routes.constant"

const { Meta } = Card

interface IFProps {
	product: IFProduct
}
const ProductComponent: React.FC<IFProps> = ({ product }) => {
	return (
		<Link
			href={{
				pathname: routeConstant.product,
				query: {
					id: product?.id,
				},
			}}>
			<a>
				<Card
					style={{ cursor: "pointer" }}
					cover={
						<Image
							src={String(product?.productImages)}
							alt="Picture of the author"
							width={500}
							height={500}
						/>
					}
					actions={[<Button type="primary">Add To Cart</Button>]}>
					<Meta
						title={<b style={{ color: "#482f2f" }}>{product?.name}</b>}
						description={
							<b style={{ color: "#482f2f" }}>৳ {product?.mrp} TK</b>
						}
					/>
				</Card>
			</a>
		</Link>
	)
}

export default ProductComponent
