import { Button, Result } from "antd"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import Link from "next/link"
import React from "react"
import { routeConstant } from "@shared/constant/routes.constant"

const Custom404 = () => {
	return (
		<AppLayoutComponent>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={
					<Link href={routeConstant.root}>
						<a>
							<Button type="primary">Back Home</Button>
						</a>
					</Link>
				}
			/>
		</AppLayoutComponent>
	)
}

export default Custom404
