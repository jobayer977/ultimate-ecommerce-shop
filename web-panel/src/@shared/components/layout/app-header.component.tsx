import React from "react"
const AppHeaderComponent = () => {
	return (
		<header id="header-area" className="header__3">
			<div className="ruby-container">
				<div className="row">
					<div className="col-3 col-lg-1 col-xl-2 m-auto">
						<a href="index.html" className="logo-area">
							<img
								style={{ height: 50 }}
								src="./img/logo.jpg"
								alt="Logo"
								className="img-fluid"
							/>
						</a>
					</div>

					<div className="col-3 col-lg-9 col-xl-8 m-auto">
						<div className="main-menu-wrap">
							<nav id="mainmenu">
								<ul>
									<li className="dropdown-show">
										<a href="index.html">Home</a>
										{/* <ul className="dropdown-nav sub-dropdown">
											<li>
												<a href="index.html">Home Layout 1</a>
											</li>
											<li>
												<a href="index2.html">Home Layout 2</a>
											</li>
											<li>
												<a href="index3.html">Home Layout 3</a>
											</li>
											<li>
												<a href="index4.html">Home Layout 4</a>
											</li>
											<li>
												<a href="index5.html">Home Layout 5</a>
											</li>
											<li>
												<a href="index6.html">Home Layout 6</a>
											</li>
										</ul> */}
									</li>
									<li className="dropdown-show">
										<a href="index.html">Shop By Category</a>
										<ul className="dropdown-nav sub-dropdown">
											<li>
												<a href="index.html">Home Layout 1</a>
											</li>
											<li>
												<a href="index2.html">Home Layout 2</a>
											</li>
											<li>
												<a href="index3.html">Home Layout 3</a>
											</li>
											<li>
												<a href="index4.html">Home Layout 4</a>
											</li>
											<li>
												<a href="index5.html">Home Layout 5</a>
											</li>
											<li>
												<a href="index6.html">Home Layout 6</a>
											</li>
										</ul>
									</li>
									<li className="dropdown-show">
										<a href="#">Shop By Departments</a>
									</li>
									<li className="dropdown-show">
										<a href="#">Shop By Brand</a>
									</li>
									<li className="dropdown-show">
										<a href="#">Offer</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>

					<div className="col-6 col-lg-2 m-auto">
						<div className="header-right-meta text-right">
							<ul>
								<li>
									<a href="#" className="modal-active">
										<i className="fa fa-search"></i>
									</a>
								</li>
								<li className="shop-cart">
									<a href="#">
										<i className="fa fa-shopping-bag"></i>{" "}
										<span className="count">3</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default AppHeaderComponent
