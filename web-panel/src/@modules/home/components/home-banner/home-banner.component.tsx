import { IFBanner } from "@shared/interfaces/banner.interface"
import React from "react"
import Swiper from "react-id-swiper"
import { useRouter } from "next/dist/client/router"

interface IFProps {
	banners: IFBanner[]
}
const HomeBannerComponent: React.FC<IFProps> = ({ banners }) => {
	const router = useRouter()
	const params: any = {
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		watchSlidesVisibility: true,
		effect: "fade",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	}

	return (
		<>
			<section id="banner-area" className="banner__2">
				<div className="ruby-container">
					<div className="row">
						<div className="col-lg-12">
							<div id="banner-carousel">
								{banners.length !== 0 ? (
									<Swiper {...params}>
										{banners?.map((x: IFBanner) => (
											<div
												onClick={() => router.push(String(x?.url))}
												key={String(x.id)}
												className="single-carousel-wrap slide-item-1"
												style={{
													backgroundImage: `url(${x.image})`,
													cursor: "pointer",
												}}>
												<div
													className="banner-caption text-center text-lg-left"
													style={{ visibility: "hidden" }}>
													<h4>Rubby Store</h4>
													<h2>Ring Solitaire Princess</h2>
													<p>
														Eodem modo typi, qui nunc nobis videntur parum
														clari, fiant sollemnes in futurum.
													</p>
													<a href="#" className="btn-long-arrow">
														Shop Now
													</a>
												</div>
											</div>
										))}
									</Swiper>
								) : (
									""
								)}

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
