import React, { useState } from "react"

import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { AuthService } from "@shared/services/auth.service"
import Link from "next/link"
import { notification } from "antd"
import { routeConstant } from "@shared/constant/routes.constant"
import { useRouter } from "next/router"
import useService from "@shared/hooks/useService"

const AuthLoginComponent = () => {
	const router = useRouter()
	const [formData, setFormData] = useState<any>({
		phoneNumber: "",
		password: "",
	})
	const { phoneNumber, password } = formData

	const authRegisterService = useService(
		AuthService.register,
		(response: any) => {
			localStorage.setItem("token", response?.token?.token)
			router.back()
			notification.success({ message: "Registration Success" })
		}
	)
	const onChange = (e: any) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const onSubmit = async (e: any) => {
		e.preventDefault()
		if (!phoneNumber) {
			notification.error({
				message: "Invalid Phone Number",
			})
		} else if (!password) {
			notification.error({
				message: "Invalid Password",
			})
		} else {
			authRegisterService.query({ phoneNumber, password })
		}
	}
	return (
		<AppLayoutComponent>
			<div className="row" style={{ paddingTop: 70, paddingBottom: 70 }}>
				<div className="col-lg-7 m-auto">
					<div className="login-register-wrapper">
						<div className="login-reg-form-wrap">
							<nav className="nav login-reg-tab-menu">
								<a className="active mb-5">Register</a>
							</nav>
							<form onSubmit={onSubmit}>
								<div className="single-input-item">
									<input
										onChange={onChange}
										type="text"
										name="phoneNumber"
										placeholder="Enter your Phone Number"
									/>
								</div>

								<div className="single-input-item">
									<input
										onChange={onChange}
										type="password"
										name="password"
										placeholder="Enter your Password"
									/>
								</div>

								<div className="single-input-item">
									<div className="login-reg-form-meta d-flex align-items-center justify-content-between">
										<div className="remember-meta">
											<div className="custom-control custom-checkbox">
												<input
													type="checkbox"
													className="custom-control-input"
													id="rememberMe"
												/>
												<label className="custom-control-label">
													Remember Me
												</label>
											</div>
										</div>

										<Link href={routeConstant.authLogin}>
											<a className="forget-pwd">Already have an account ?</a>
										</Link>
									</div>
								</div>

								<div className="single-input-item">
									<button className="btn-login" type="submit">
										{authRegisterService.loading ? "loading..." : "Register"}
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</AppLayoutComponent>
	)
}

export default AuthLoginComponent
