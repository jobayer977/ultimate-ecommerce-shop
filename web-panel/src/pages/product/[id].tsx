import AppLayoutComponent from "@shared/components/layout/app-layout.component"
import { IFProduct } from "@shared/interfaces/product.interface"
import { ProductsService } from "@shared/services/products.service"
import React from "react"

interface IFProps {
	product: IFProduct
}
const ProductSinglePage: React.FC<IFProps> = ({ product }) => {
	return (
		<AppLayoutComponent>
			<div id="page-content-wrapper" className="p-9">
				<div className="ruby-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="single-product-page-content">
								<div className="row">
									<div className="col-lg-5">
										<div className="product-thumbnail-wrap">
											<div className="product-thumb-carousel">
												<div className="single-thumb-item">
													<img
														className="img-fluid"
														src={String(product?.productImages)}
														alt="Product"
													/>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-7 mt-5 mt-lg-0 pl-5">
										<div className="product-details">
											<h2>{product?.name}</h2>

											<span className="price">৳ {product.mrp} TK</span>

											<div className="product-info-stock-sku">
												<span className="product-stock-status">
													{Number(product.stock) > 0 ? "In Stock" : ""}
												</span>
												<span className="product-sku-status ml-5">
													<strong>CODE:</strong> {product?.productCode}
												</span>
											</div>

											<p className="products-desc">{product.description}</p>

											<div className="product-quantity d-flex align-items-center">
												<button className="btn btn-add-to-cart">
													<i className="fa fa-shopping-cart"></i> Buy Now
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppLayoutComponent>
	)
}

export async function getServerSideProps(context: any) {
	const { id } = context.params

	const fetchProduct = await ProductsService.findById(id)
	return {
		props: {
			product: await fetchProduct?.data?.data,
		},
	}
}
export default ProductSinglePage
