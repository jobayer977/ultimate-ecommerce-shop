import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { routeConstant } from "@shared/constant/routes.constant"
import useService from "@shared/hooks/useService"
import { AuthService } from "@shared/services/auth.service"
import { notification } from "antd"
import Link from "next/link"
import React, { useState } from "react"

const AuthLoginComponent = () => {
	const [formData, setFormData] = useState<any>({
		phoneNumber: "",
		password: "",
	})
	const { phoneNumber, password } = formData

	const onChange = (e: any) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const authLoginService = useService(AuthService.login, (res: any) => {})

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
			await authLoginService.query(formData)
		}
	}
	return (
		<AppLayoutComponent>
			<div className="row" style={{ paddingTop: 70, paddingBottom: 70 }}>
				<div className="col-lg-7 m-auto">
					<div className="login-register-wrapper">
						<div className="login-reg-form-wrap">
							<nav className="nav login-reg-tab-menu">
								<a className="active mb-5">Login</a>
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

										<Link href={routeConstant.authRegister}>
											<a className="forget-pwd">Create a new Account ?</a>
										</Link>
									</div>
								</div>

								<div className="single-input-item">
									<button className="btn-login" type="submit">
										{authLoginService.loading ? "loading..." : "Login"}
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
