import { Button, Card } from "antd"

import { IFProduct } from "@shared/interfaces/product.interface"
import Link from "next/link"
import React from "react"

const { Meta } = Card

interface IFProps {
	product: IFProduct
}
const ProductComponent: React.FC<IFProps> = ({ product }) => {
	return (
		<Link href={`/product/${product.id}`}>
			<a>
				<Card
					style={{ cursor: "pointer" }}
					cover={<img alt="example" src={String(product?.productImages)} />}
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
