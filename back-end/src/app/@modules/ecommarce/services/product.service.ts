import { BadRequestError, NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { BaseFilterDto } from "../../../@base/dto/base-filter.dto"
import {
	deleteDataPlaceholder,
	getSingleDataPlaceholder,
	insertDataPlaceholder,
	updateDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { ProductRepository } from "./../repository/product.repository"
@Service()
export class ProductService {
	constructor(
		@InjectRepository()
		private productRepository: ProductRepository
	) {}
	async create(productDto: any, relations: string[]) {
		try {
			const product = await this.productRepository.save(productDto)
			const payload = await this.productRepository.findOne(product.id, {
				relations,
			})
			return insertDataPlaceholder(payload)
		} catch (error) {
			throw new BadRequestError(error.message)
		}
	}
	//! Get one
	async findById(id: string, relations: string[]) {
		try {
			const data = await this.productRepository.findOne({ id })

			const payload = await this.productRepository.findOne(data.id, {
				relations,
			})
			if (!data) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(payload)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
	//! Update
	async update(id: string, product: any, relations: string[]) {
		const updateData: any = await this.findById(id, relations)
		try {
			await this.productRepository.update(updateData?.data?.id, product)
			const payload = await this.productRepository.findOne(updateData?.data?.id)
			return updateDataPlaceholder(payload)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
	//! Delete
	async delete(id: string, relations: string[]) {
		const targetData = await this.findById(id, relations)
		try {
			await this.productRepository.delete(targetData.data?.id)
			return deleteDataPlaceholder(targetData?.data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
	//! Filter
	async filter(baseFilterDto: BaseFilterDto, relations: string[]) {
		return this.productRepository.filter(baseFilterDto, relations)
	}
}
