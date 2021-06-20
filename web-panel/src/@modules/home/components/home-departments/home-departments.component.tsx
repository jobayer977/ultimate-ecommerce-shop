import { IFDepartment } from "@shared/interfaces/department.interface"
import React from "react"
import WideCardComponent from "@shared/components/wide-card/wide-card.component"
import { routeConstant } from "@shared/constant/routes.constant"

interface IFProps {
	departments: IFDepartment[]
}
const HomeDepartmentsComponent: React.FC<IFProps> = ({ departments }) => {
	return (
		<>
			<div id="product-categories-area">
				<div className="ruby-container">
					<div className="small-size-cate">
						<div className="row no-gutters">
							{departments.map((x: IFDepartment) => (
								<div className="col-sm-3 col-6" key={x?.id}>
									<WideCardComponent
										link={{
											pathname: routeConstant.departmentsId,
											query: {
												id: x.id,
											},
										}}
										image={x?.image}
										title={x.name}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeDepartmentsComponent
