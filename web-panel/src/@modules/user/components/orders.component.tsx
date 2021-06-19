import React, { useEffect } from "react"

import { BaseFilterResponse } from "@shared/interfaces/base.interface"
import { OrderService } from "@shared/services/order.service"
import { Table } from "antd"
import { getSession } from "@shared/utils/jwttoken"
import useService from "@shared/hooks/useService"

const OrdersComponent = () => {
	const user: any = getSession()
	const filterOrderService = useService(
		OrderService.filter,
		(res: BaseFilterResponse) => {
			console.log(res)
		}
	)

	useEffect(() => {
		filterOrderService.query({
			page: 1,
			take: 10,
			user: user?.id,
		})
	}, [user?.id])
	const dataSource = [
		{
			orderCode: "orderCode",
			date: "Order Code",
			total: 32,
			status: "10 Downing Street",
		},
	]

	return (
		<>
			<Table dataSource={dataSource} columns={columns} />
		</>
	)
}

export default OrdersComponent
const columns: any = [
	{
		title: "Order Code",
		dataIndex: "orderCode",
		key: "orderCode",
	},
	{
		title: "Date",
		dataIndex: "date",
		key: "date",
	},
	{
		title: "Total",
		dataIndex: "total",
		key: "total",
		align: "right",
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status",
		align: "right",
	},
]
