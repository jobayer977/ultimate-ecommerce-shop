import { takaCurrencySing } from "@shared/constant/preferance"
import useService from "@shared/hooks/useService"
import { BaseFilterResponse } from "@shared/interfaces/base.interface"
import { OrderService } from "@shared/services/order.service"
import { getSession } from "@shared/utils/jwttoken"
import { Button, Table } from "antd"
import moment from "moment"
import React, { useEffect, useState } from "react"

const OrdersComponent = () => {
	const user: any = getSession()
	const [ordersResponse, setOrdersResponse] = useState<BaseFilterResponse>({
		data: [],
		page: 0,
		take: 0,
		total: 0,
	})
	const { data, page, take, total } = ordersResponse
	const filterOrderService = useService(
		OrderService.filter,
		(res: BaseFilterResponse) => {
			setOrdersResponse(res)
		}
	)

	useEffect(() => {
		filterOrderService.query({
			page: 1,
			take: 10,
			user: user?.id,
		})
	}, [user?.id])
	const dataSource = ordersResponse?.data?.map((o: any) => ({
		orderCode: o?.code,
		date: moment(o?.createdAt).format("DD-MM-YYY HH:MM A"),
		total: `${takaCurrencySing}${o?.totalAmount} TK`,
		status: (
			<Button type="primary" danger={!o.approved}>
				{o.deliveryStatus}
			</Button>
		),
	}))

	return (
		<>
			{/* <Table
				loading={filterOrderService.loading}
				dataSource={dataSource}
				columns={columns}
			/> */}

			<Table
				loading={filterOrderService.loading}
				columns={columns}
				dataSource={dataSource}
				scroll={{ y: 640 }}
				pagination={{
					onChange: (e: any) => {
						filterOrderService.query({
							user: user?.id,
							page: e,
							take: 10,
						})
					},

					pageSize: 10,
					total: total,
					showSizeChanger: false,
				}}
			/>
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
