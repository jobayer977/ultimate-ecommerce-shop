import { Card, Col, PageHeader, Row } from "antd"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { BaseFilterResponse } from "@shared/interfaces/base.interface"
import { BrandService } from "@shared/services/brand.service"
import { GetStaticProps } from "next"
import { IFBrand } from "@shared/interfaces/brand.interface"
import Image from "next/image"
import React from "react"
import { routeConstant } from "@shared/constant/routes.constant"

const { Meta } = Card

const routes = [
	{
		path: routeConstant.root,
		breadcrumbName: "Home",
	},
	{
		path: routeConstant.brands,
		breadcrumbName: "shop by Brand",
	},
]
interface IFProps {
	brandsResponse: BaseFilterResponse
}
const Departments: React.FC<IFProps> = ({ brandsResponse }) => {
	return (
		<AppLayoutComponent>
			<div className="ruby-container" style={{ paddingBottom: 90 }}>
				<PageHeader
					className="inner-page-header"
					title="Shop By Brands"
					breadcrumb={{ routes }}
				/>
				<Row gutter={16}>
					{brandsResponse?.data?.map((brand: IFBrand) => (
						<Col span={4} key={brand?.id}>
							<Card
								className="logo-itm-bx"
								style={{ marginBottom: 16 }}
								cover={
									<Image
										src={String(brand?.image)}
										alt="Picture of the author"
										width={500}
										height={500}
									/>
								}>
								<Meta title={brand?.name} />
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</AppLayoutComponent>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const fetchBrands = await BrandService.filter({
		page: 1,
		take: 12,
	})
	return {
		props: {
			brandsResponse: fetchBrands.data,
		},
		revalidate: 1,
	}
}
export default Departments
