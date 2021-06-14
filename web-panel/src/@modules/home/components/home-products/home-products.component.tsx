import { Button, Card, Col, Row } from "antd"

import { IFProduct } from "@shared/interfaces/product.interface"
import React from "react"

const { Meta } = Card

interface IFProps {
	products?: IFProduct[]
}
const HomeProductsComponent: React.FC<IFProps> = ({ products }) => {
	console.log(products)
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

					{/* <div className="products-wrapper products-gird">
						<div className="row custom-padding">
						
						</div>
					</div> */}

					<Row gutter={10}>
						{products?.map((pd: IFProduct) => (
							<Col span={4} style={{ marginBottom: 10 }}>
								<Card
									cover={<img alt="example" src={String(pd?.productImages)} />}
									actions={[<Button type="primary">Add To Cart</Button>]}>
									<Meta
										title={<b style={{ color: "#482f2f" }}>{pd?.name}</b>}
										description={
											<b style={{ color: "#482f2f" }}>৳ {pd?.mrp} TK</b>
										}
									/>
								</Card>
							</Col>
						))}
					</Row>
				</div>
			</div>
		</>
	)
}

export default HomeProductsComponent
