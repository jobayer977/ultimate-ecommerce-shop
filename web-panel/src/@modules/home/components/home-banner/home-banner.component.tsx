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
												}}></div>
										))}
									</Swiper>
								) : (
									""
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default HomeBannerComponent
