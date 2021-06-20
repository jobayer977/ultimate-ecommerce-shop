import { Dropdown, Menu } from "antd"

import Link from "next/link"
import React from "react"
import { createStructuredSelector } from "reselect"
import { routeConstant } from "@shared/constant/routes.constant"
import { selectCartItemsQuantity } from "@modules/cart/redux/cart.selector"
import { useSelector } from "react-redux"

const AppHeaderComponent = () => {
	const { cartQuantity } = useSelector(
		createStructuredSelector({
			cartQuantity: selectCartItemsQuantity,
		})
	)

	const menu = (
		<Menu>
			<Menu.Item key="0">
				<Link href={routeConstant.departments}>
					<a>Shop By Departments</a>
				</Link>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="1">
				<Link href={routeConstant.brands}>
					<a>Shop By Brand</a>
				</Link>
			</Menu.Item>
		</Menu>
	)
	return (
		<>
			<header id="header-area" className="header__3">
				<div className="ruby-container">
					<div className="row">
						<div className="col-3 col-lg-1 col-xl-2 m-auto">
							<Link href={routeConstant.root}>
								<a className="logo-area">
									<img
										style={{ height: 50 }}
										src="/img/logo.jpg"
										alt="Logo"
										className="img-fluid"
									/>
								</a>
							</Link>
						</div>

						<div className="col-3 col-lg-9 col-xl-8 m-auto">
							<div className="main-menu-wrap desktop-only">
								<nav id="mainmenu">
									<ul>
										<li className="dropdown-show">
											<Link href={routeConstant.root}>
												<a>Home</a>
											</Link>
										</li>

										<li className="dropdown-show">
											<Link href={routeConstant.departments}>
												<a>Shop By Departments</a>
											</Link>
										</li>
										<li className="dropdown-show">
											<Link href={routeConstant.brands}>
												<a>Shop By Brand</a>
											</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>

						<div className="col-6 col-lg-2 m-auto">
							<div className="header-right-meta text-right">
								<ul>
									<li className="shop-cart">
										<Link href={routeConstant?.cart}>
											<a>
												<i className="fa fa-shopping-bag"></i>
												{cartQuantity > 0 ? (
													<span className="count">{cartQuantity}</span>
												) : (
													""
												)}
											</a>
										</Link>
									</li>
									<li className="mobile-only">
										<Dropdown overlay={menu} trigger={["click"]}>
											<a>
												<i className="fa fa-align-justify"></i>
											</a>
										</Dropdown>
									</li>
									<li>
										<Link href={routeConstant.myAccount}>
											<a>
												<i className="fa fa-user"></i>
											</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default AppHeaderComponent
