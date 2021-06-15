import { IFDepartment } from "@shared/interfaces/department.interface"
import Image from "next/image"
import React from "react"

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
											<div className="single-cat-item">
												<figure className="category-thumb">
													<a href="#">
														{/* <img
															src={x.image}
															alt="Men Category"
															className="img-fluid"
														/> */}
														<Image
															src={String(x.image)}
															alt="Picture of the author"
															width={500}
															height={500}
														/>
													</a>

													<figcaption className="category-name">
														<a href="#">{x?.name}</a>
													</figcaption>
												</figure>
											</div>
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
