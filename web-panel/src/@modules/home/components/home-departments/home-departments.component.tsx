import { IFDepartment } from "@shared/interfaces/department.interface"
import React from "react"
import WideCardComponent from "@shared/components/wide-card/wide-card.component"

interface IFProps {
	departments: IFDepartment[]
}
const HomeDepartmentsComponent: React.FC<IFProps> = ({ departments }) => {
	return (
		<>
			<div id="product-categories-area">
				<div className="ruby-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="small-size-cate">
								<div className="row">
									{departments.map((x: IFDepartment) => (
										<div className="col-sm-3" key={x?.id}>
											<WideCardComponent image={x?.image} title={x.name} />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeDepartmentsComponent
