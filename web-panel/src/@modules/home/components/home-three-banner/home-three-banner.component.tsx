import { IFBanner } from "@shared/interfaces/banner.interface"
import React from "react"

interface IFProps {
	banners: IFBanner[]
}
const HomeThreeBannerComponent: React.FC<IFProps> = ({ banners }) => {
	return (
		<div id="category-feature-product" style={{ marginTop: 25 }}>
			<div className="ruby-container">
				<div className="row">
					{banners?.map((banner: IFBanner) => (
						<div className="col-lg-4" key={String(banner?.id)}>
							<div className="single-featured-product">
								<a href="#">
									<img
										src={String(banner?.image)}
										alt="Products"
										className="img-fluid"
									/>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomeThreeBannerComponent
