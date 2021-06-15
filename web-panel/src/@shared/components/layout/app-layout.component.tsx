import AppFooterComponent from "./app-footer.component"
import AppHeaderComponent from "./app-header.component"
import React from "react"

interface IFProps {
	children: any
}
const AppLayoutComponent: React.FC<IFProps> = ({ children }) => {
	return (
		<>
			<AppHeaderComponent />
			<main style={{ paddingTop: 69 }}>{children}</main>
			<AppFooterComponent />
		</>
	)
}

export default AppLayoutComponent
