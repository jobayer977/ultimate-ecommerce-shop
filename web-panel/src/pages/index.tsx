import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import HomeBannerComponent from "@modules/home/components/home-banner/home-banner.component"
import HomeProductsComponent from "@modules/home/components/home-products/home-products.component"
import React from "react"

const IndexPageComponent = () => {
	return (
		<AppLayoutComponent>
			<HomeBannerComponent />
			<HomeProductsComponent />
		</AppLayoutComponent>
	)
}

export default IndexPageComponent
