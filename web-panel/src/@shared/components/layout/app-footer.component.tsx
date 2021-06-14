import React from "react"

const AppFooterComponent = () => {
	return (
		<>
			<footer id="footer-area">
				<div className="footer-callto-action" style={{ marginBottom: 25 }}>
					<div className="ruby-container">
						<div className="callto-action-wrapper">
							<div className="row">
								<div className="col-lg-3 col-md-6">
									<div className="single-callto-action d-flex">
										<figure className="callto-thumb">
											<img src="./img/air-plane.png" alt="WorldWide Shipping" />
										</figure>
										<div className="callto-info">
											<h2>Free Shipping Worldwide</h2>
											<p>On order over $150 - 7 days a week</p>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-6">
									<div className="single-callto-action d-flex">
										<figure className="callto-thumb">
											<img src="./img/support.png" alt="Support" />
										</figure>
										<div className="callto-info">
											<h2>24/7 CUSTOMER SERVICE</h2>
											<p>Call us 24/7 at 000 - 123 - 456k</p>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-6">
									<div className="single-callto-action d-flex">
										<figure className="callto-thumb">
											<img src="./img/money-back.png" alt="Money Back" />
										</figure>
										<div className="callto-info">
											<h2>MONEY BACK Guarantee!</h2>
											<p>Send within 30 days</p>
										</div>
									</div>
								</div>

								<div className="col-lg-3 col-md-6">
									<div className="single-callto-action d-flex">
										<figure className="callto-thumb">
											<img src="./img/cog.png" alt="Guide" />
										</figure>
										<div className="callto-info">
											<h2>SHOPPING GUIDE</h2>
											<p>Quis Eum Iure Reprehenderit</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-followup-area">
					<div className="ruby-container">
						<div
							className="followup-wrapper"
							style={{ backgroundImage: `url(./img/page-banner.jpg)` }}>
							<div className="row">
								<div className="col-lg-12 text-center">
									<div className="follow-content-wrap">
										<a href="index.html" className="logo">
											<img src="./img/logo-r.png" alt="logo" />
										</a>
										<p>
											Eodem modo typi, qui nunc nobis videntur parum clari,
											fiant sollemnes in futurum
										</p>

										<div className="footer-social-icons">
											<a href="#">
												<i className="fa fa-facebook"></i>
											</a>
											<a href="#">
												<i className="fa fa-twitter"></i>
											</a>
											<a href="#">
												<i className="fa fa-pinterest"></i>
											</a>
											<a href="#">
												<i className="fa fa-instagram"></i>
											</a>
											<a href="#">
												<i className="fa fa-flickr"></i>
											</a>
										</div>

										<a href="#">
											<img src="./img/payment.png" alt="Payment Method" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default AppFooterComponent
