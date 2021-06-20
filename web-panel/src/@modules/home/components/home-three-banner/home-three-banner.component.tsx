import { IFBanner } from "@shared/interfaces/banner.interface"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface IFProps {
	banners: IFBanner[]
}
const HomeThreeBannerComponent: React.FC<IFProps> = ({ banners }) => {
	return (
		<div id="category-feature-product" style={{ marginTop: 25 }}>
			<div className="ruby-container">
				<div className="row no-gutters">
					{banners?.map((banner: IFBanner) => (
						<div className="col-lg-4 col-md-4 col-4" key={String(banner?.id)}>
							<div className="single-featured-product m-1">
								<Link href={String(banner.url)}>
									<a>
										<Image
											src={String(banner?.image)}
											alt="Picture of the author"
											width={500}
											height={310}
										/>
									</a>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default HomeThreeBannerComponent
