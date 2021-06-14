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
			{children}
			<AppFooterComponent />
		</>
	)
}

export default AppLayoutComponent
