import { Card, Col, PageHeader, Row } from "antd"

import { IFBrand } from "@shared/interfaces/brand.interface"
import React from "react"

interface IFProps {
	brands: IFBrand[]
}

const HomeBrandsComponent: React.FC<IFProps> = ({ brands }) => {
	return (
		<div className="ruby-container ">
			<div className="border-section">
				<PageHeader className="site-page-header" title="Shop By Brand" />

				<Row gutter={16} style={{ padding: 10, paddingBottom: 0 }}>
					{brands?.map((brand: IFBrand) => (
						<Col span={4} key={String(brand?.id)}>
							<Card
								className="logo-itm-bx"
								key={String(brand.id)}
								style={{ marginBottom: 16 }}
								cover={<img alt="example" src={brand?.image} />}>
								<Meta title={brand?.name} />
							</Card>
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default HomeBrandsComponent

const { Meta } = Card
