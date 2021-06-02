import { BadRequestError, NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { BaseFilterDto } from "../../../@base/base-filter.dto"
import {
	deleteDataPlaceholder,
	getSingleDataPlaceholder,
	insertDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { CategoryDto } from "../dtos/category.dto"
import { CategoryRepository } from "../repository/category.repository"

@Service()
export class CategoryService {
	constructor(
		@InjectRepository()
		private categoryRepository: CategoryRepository
	) {}

	//!Create
	async create(categoryDto: any) {
		console.log(categoryDto)
		try {
			const created = await this.categoryRepository.save(categoryDto)
			return insertDataPlaceholder(created)
		} catch (error) {
			throw new BadRequestError(error)
		}
	}

	//! Get one
	async findById(id: string) {
		try {
			const data = await this.categoryRepository.findOne({ id })
			if (!data) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Update
	async update(id: string, categoryDto: CategoryDto) {
		const category = await this.findById(id)
		try {
			// const updateData = await this.categoryRepository.save({
			// 	...category,
			// 	...categoryDto,
			// })
			// return updateDataPlaceholder(updateData)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Delete
	async delete(id: string) {
		const targetData = await this.findById(id)
		try {
			await this.categoryRepository.delete(targetData.data?.id)
			return deleteDataPlaceholder(targetData?.data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
	//! Filter
	async filter(baseFilterDto: BaseFilterDto) {
		return this.categoryRepository.filter(baseFilterDto)
	}
}
