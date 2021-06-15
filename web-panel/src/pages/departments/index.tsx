import { Col, PageHeader, Row } from "antd"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { BaseFilterResponse } from "@shared/interfaces/base.interface"
import { DepartmentService } from "@shared/services/departments.service"
import { GetStaticProps } from "next"
import { IFDepartment } from "@shared/interfaces/department.interface"
import React from "react"
import WideCardComponent from "@shared/components/wide-card/wide-card.component"
import { routeConstant } from "@shared/constant/routes.constant"

const routes = [
	{
		path: routeConstant.root,
		breadcrumbName: "Home",
	},
	{
		path: routeConstant.departments,
		breadcrumbName: "shop by department",
	},
]
interface IFProps {
	departmentsResponse: BaseFilterResponse
}
const Departments: React.FC<IFProps> = ({ departmentsResponse }) => {
	console.log(departmentsResponse)
	return (
		<AppLayoutComponent>
			<div className="ruby-container" style={{ paddingBottom: 90 }}>
				<PageHeader
					className="inner-page-header"
					title="Shop By Departments"
					breadcrumb={{ routes }}
				/>
				<Row gutter={16}>
					{departmentsResponse?.data?.map((x: IFDepartment) => (
						<Col span={4} key={x.id} style={{ marginBottom: 16 }}>
							<WideCardComponent image={x?.image} title={x.name} />
						</Col>
					))}
				</Row>
			</div>
		</AppLayoutComponent>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const fetchDepartments = await DepartmentService.filter({
		page: 1,
		take: 6,
		isFeatured: true,
	})
	return {
		props: {
			departmentsResponse: fetchDepartments.data,
		},
		revalidate: 1,
	}
}
export default Departments
