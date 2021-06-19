import {
	Button,
	Col,
	Form,
	Input,
	Radio,
	Row,
	Select,
	notification,
} from "antd"

import { BaseResponse } from "@shared/interfaces/base.interface"
import React from "react"
import { UserService } from "@shared/services/user.service"
import useService from "@shared/hooks/useService"

const { Option } = Select

interface IFProps {
	userInfo: any
}
const UserUpdateComponent: React.FC<IFProps> = ({ userInfo }) => {
	const updateCurrentUserService = useService(
		UserService.updateCurrentUser,
		(res: BaseResponse) => {
			notification.success({
				duration: 0.5,
				message: "Profile Updated",
			})
		}
	)

	const onSubmit = (value: any) => {
		updateCurrentUserService.query(value)
	}

	return (
		<Form
			name="normal_login"
			className="login-form"
			layout="vertical"
			initialValues={{
				city: userInfo?.city,
				country: userInfo?.country,
				email: userInfo?.email,
				firstName: userInfo?.firstName,
				gender: userInfo?.gender,
				lastName: userInfo?.lastName,
			}}
			onFinish={onSubmit}>
			<Row gutter={16}>
				<Col xxl={12} lg={12} md={24}>
					<Form.Item
						name="firstName"
						label="FirstName"
						rules={[
							{ required: true, message: "Please input your firstName!" },
						]}>
						<Input size="large" placeholder="FirstName" />
					</Form.Item>
				</Col>
				<Col xxl={12} lg={12} md={24}>
					<Form.Item
						name="lastName"
						label="LastName"
						rules={[
							{ required: true, message: "Please input your lastName!" },
						]}>
						<Input size="large" type="text" placeholder="LastName" />
					</Form.Item>
				</Col>
				<Col xxl={12} lg={12} md={24}>
					<Form.Item
						name="city"
						label="City"
						rules={[{ required: true, message: "Please input your city!" }]}>
						<Input size="large" type="text" placeholder="City" />
					</Form.Item>
				</Col>
				<Col xxl={12} lg={12} md={24}>
					<Form.Item
						name="country"
						label="Country"
						rules={[
							{ required: true, message: "Please select your country!" },
						]}>
						<Select size="large" placeholder="Please select a country">
							<Option value="Bangladesh">Bangladesh</Option>
							<Option value="usa">U.S.A</Option>
						</Select>
					</Form.Item>
				</Col>

				<Col xxl={12} lg={12} md={24}>
					<Form.Item
						name="email"
						label="Email"
						rules={[{ required: true, message: "Please input your email!" }]}>
						<Input size="large" type="email" placeholder="email" />
					</Form.Item>
				</Col>
				<Col xxl={12} lg={12} md={24}>
					<Form.Item
						name="gender"
						label="Gender"
						rules={[{ required: true, message: "Please input your gender!" }]}>
						<Radio.Group>
							<Radio value="Male">Male</Radio>
							<Radio value="Female">Female</Radio>
						</Radio.Group>
					</Form.Item>
				</Col>
				<Col xxl={24} lg={24} md={24}>
					<Form.Item>
						<Button
							loading={updateCurrentUserService.loading}
							size="large"
							type="primary"
							htmlType="submit"
							className="login-form-button">
							Update
						</Button>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default UserUpdateComponent
