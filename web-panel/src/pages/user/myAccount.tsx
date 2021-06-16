import { Avatar, Comment, PageHeader, Tabs, Typography } from "antd"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import React from "react"
import UserUpdateComponent from "@modules/user/components/user-update.component"
import { routeConstant } from "@shared/constant/routes.constant"
import withAuth from "@shared/components/withAuth.component"

const { Title } = Typography

const { TabPane } = Tabs
const routes = [
	{
		path: routeConstant.root,
		breadcrumbName: "Home",
	},
	{
		path: routeConstant.cart,
		breadcrumbName: "My account",
	},
]

const MyAccount = () => {
	return (
		<AppLayoutComponent>
			<div className="ruby-container">
				<PageHeader
					className="inner-page-header"
					title="My Account"
					breadcrumb={{ routes }}
				/>
				<Comment
					author={<h1>Jobayer Hossain </h1>}
					avatar={
						<Avatar
							// src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
							alt="Han Solo"
						/>
					}
					content={<p>jobayerhossain@Gmail.com</p>}
				/>
				<Tabs
					className="user-account-tabs"
					defaultActiveKey="1"
					tabPosition="left">
					<TabPane tab="Basic Information" key="1">
						<Title style={{ marginBottom: 50 }} level={5}>
							Basic Information
						</Title>
						<UserUpdateComponent />
					</TabPane>
					<TabPane tab="Orders" key="2">
						Orders
					</TabPane>
				</Tabs>
			</div>
		</AppLayoutComponent>
	)
}

export default withAuth(MyAccount)
