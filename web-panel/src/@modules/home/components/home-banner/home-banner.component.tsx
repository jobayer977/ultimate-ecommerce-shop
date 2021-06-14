import React from "react"

const HomeBannerComponent = () => {
	return (
		<>
			<section id="banner-area" className="banner__2">
				<div className="ruby-container">
					<div className="row">
						<div className="col-lg-12">
							<div id="banner-carousel">
								<div
									className="single-carousel-wrap slide-item-1"
									style={{ backgroundImage: `url(./img/home_6_slide_2.jpg)` }}>
									<div className="banner-caption text-center text-lg-left">
										<h4>Rubby Store</h4>
										<h2>Ring Solitaire Princess</h2>
										<p>
											Eodem modo typi, qui nunc nobis videntur parum clari,
											fiant sollemnes in futurum.
										</p>
										<a href="#" className="btn-long-arrow">
											Shop Now
										</a>
									</div>
								</div>

								{/* <div className="single-carousel-wrap slide-item-2">
									<div className="banner-caption text-center text-lg-left">
										<h4>New Collection 2017</h4>
										<h2>Beautiful Earrings</h2>
										<p>
											Eodem modo typi, qui nunc nobis videntur parum clari,
											fiant sollemnes in futurum.
										</p>
										<a href="#" className="btn-long-arrow">
											Shop Now
										</a>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomeBannerComponent
