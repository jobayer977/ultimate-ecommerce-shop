import { Card, Col, Row } from "antd"

import { IFProduct } from "@shared/interfaces/product.interface"
import ProductComponent from "@shared/components/product/product.component"
import React from "react"

const { Meta } = Card

interface IFProps {
	products?: IFProduct[]
}
const HomeProductsComponent: React.FC<IFProps> = ({ products }) => {
	products
	return (
		<>
			<div id="featured-products-wrapper" className="p-9">
				<div className="ruby-container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="section-title">
								<h2>Featured Products</h2>
								<p>Trending stunning Unique</p>
							</div>
						</div>
					</div>
					<Row gutter={10}>
						{products?.map((pd: IFProduct) => (
							<Col span={4} style={{ marginBottom: 10 }} key={String(pd.id)}>
								<ProductComponent product={pd} />
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	)
}

export default HomeProductsComponent
