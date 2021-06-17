import { Empty, Spin } from "antd"

import React from "react"

interface Props {
	loading?: boolean
	empty?: boolean
	hide?: "*" | "loader" | "empty"
	children?: any
}
export const Purify: React.FC<Props> = ({
	empty = false,
	loading = false,
	hide,
	children,
}) => {
	return loading === true ? (
		hide === "loader" || hide === "*" ? (
			<span></span>
		) : (
			<Spin style={{ ...style }} />
		)
	) : empty === true ? (
		hide === "empty" || hide === "*" ? (
			<span></span>
		) : (
			<Empty style={{ ...style }} />
		)
	) : (
		children
	)
}

const style: any = {
	flexDirection: "column",
	justifyContent: "center",
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
}
