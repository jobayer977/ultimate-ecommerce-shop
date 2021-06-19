import { Col, PageHeader, Row } from "antd"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { BaseFilterResponse } from "@shared/interfaces/base.interface"
import { GetStaticProps } from "next"
import { IFProduct } from "@shared/interfaces/product.interface"
import ProductComponent from "@shared/components/product/product.component"
import { ProductsService } from "@shared/services/products.service"
import React from "react"
import { routeConstant } from "@shared/constant/routes.constant"

const routes = [
	{
		path: routeConstant.root,
		breadcrumbName: "Home",
	},
	{
		path: routeConstant.departments,
		breadcrumbName: "Shop",
	},
]
interface IFProps {
	productsResponse: BaseFilterResponse
}
const ProductsPage: React.FC<IFProps> = ({ productsResponse }) => {
	return (
		<AppLayoutComponent>
			<div className="ruby-container" style={{ paddingBottom: 90 }}>
				<PageHeader
					className="inner-page-header"
					title="Popular Products"
					breadcrumb={{ routes }}
				/>
				<Row gutter={30}>
					{/* <Col xxl={5} xl={6} lg={6} md={24} sm={24}>
						<div id="sidebar-area-wrap">
							<div className="single-sidebar-wrap">
								<div className="sidebar-body">
									<div className="shopping-option">
										<h3 className="mb-5">Shopping Options</h3>
										<div className="shopping-option-item">
											<h4 className="mb-4">Category</h4>
											<ul className="sidebar-list">
												<li>
													<a href="#">Dolce (19)</a>
												</li>
												<li>
													<a href="#">Gabbana (4)</a>
												</li>
												<li>
													<a href="#">Nike (3)</a>
												</li>
												<li>
													<a href="#">Nokia (5)</a>
												</li>
												<li>
													<a href="#">Xiaomi (7)</a>
												</li>
												<li>
													<a href="#">Other (33)</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Col> */}
					<Col xxl={24} xl={24} lg={18} md={24} sm={24}>
						<Row gutter={10}>
							{productsResponse?.data?.map((pd: IFProduct) => (
								<Col
									xxl={4}
									xl={6}
									lg={8}
									md={12}
									sm={24}
									style={{ marginBottom: 10 }}
									key={String(pd.id)}>
									<ProductComponent product={pd} />
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</div>
		</AppLayoutComponent>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const fetchProducts = await ProductsService.filter({
		page: 1,
		take: 12,
	})
	return {
		props: {
			productsResponse: fetchProducts.data,
		},
		revalidate: 1,
	}
}
export default ProductsPage
