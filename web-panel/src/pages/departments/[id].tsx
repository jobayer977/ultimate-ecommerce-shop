import { Card, Col, PageHeader, Row } from "antd"
import { GetStaticPathsContext, GetStaticProps } from "next"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { BaseFilterResponse } from "@shared/interfaces/base.interface"
import { IFProduct } from "@shared/interfaces/product.interface"
import ProductComponent from "@shared/components/product/product.component"
import { ProductsService } from "@shared/services/products.service"
import React from "react"
import { routeConstant } from "@shared/constant/routes.constant"

const { Meta } = Card

interface IFProps {
	productsResponse: BaseFilterResponse
}
const DepartmentsPage: React.FC<IFProps> = ({ productsResponse }) => {
	const dep =
		productsResponse?.data?.length > 0
			? productsResponse?.data[0].department
			: ""

	const routes = [
		{
			path: routeConstant.root,
			breadcrumbName: "Home",
		},
		{
			path: routeConstant.departments,
			breadcrumbName: dep?.name,
		},
	]
	return (
		<AppLayoutComponent>
			<div className="ruby-container" style={{ paddingBottom: 90 }}>
				<PageHeader className="inner-page-header" breadcrumb={{ routes }} />

				<Card
					bordered={false}
					cover={
						<img
							style={{
								height: 150,
								width: 150,
								objectFit: "cover",
								borderRadius: 10,
							}}
							alt="example"
							src={dep?.image}
						/>
					}>
					<Meta
						title={<b style={{ textTransform: "capitalize" }}>{dep?.name}</b>}
					/>
				</Card>
				<Row gutter={30}>
					{productsResponse?.data?.map((pd: IFProduct) => (
						<Col
							xxl={4}
							xl={4}
							lg={8}
							md={12}
							sm={24}
							style={{ marginBottom: 10 }}
							key={String(pd.id)}>
							<ProductComponent product={pd} />
						</Col>
					))}
				</Row>
			</div>
		</AppLayoutComponent>
	)
}
export async function getStaticPaths({ locales }: GetStaticPathsContext) {
	return { paths: [], fallback: true }
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
export default DepartmentsPage
