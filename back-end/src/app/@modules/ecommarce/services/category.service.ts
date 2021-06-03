import { BadRequestError, NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { BaseFilterDto } from "../../../@base/base-filter.dto"
import {
	deleteDataPlaceholder,
	getSingleDataPlaceholder,
	insertDataPlaceholder,
	updateDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { CategoryRepository } from "../repository/category.repository"
import { DepartmentRepository } from "./../repository/department.repository"
@Service()
export class CategoryService {
	constructor(
		@InjectRepository()
		private categoryRepository: CategoryRepository,
		@InjectRepository()
		private departmentRepository: DepartmentRepository
	) {}
	//!Create
	async create(categoryDto: any) {
		try {
			const saveCategory: any = await this.categoryRepository.save(categoryDto)
			const payload = await this.categoryRepository.findOne(saveCategory.id, {
				relations: ["department"],
			})
			return insertDataPlaceholder(payload)
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
	async update(id: string, categoryDto: any) {
		const category: any = await this.findById(id)
		try {
			await this.categoryRepository.update(category?.data?.id, categoryDto)
			const payload = await this.categoryRepository.findOne(
				category?.data?.id,
				{
					relations: ["department"],
				}
			)
			return updateDataPlaceholder(payload)
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
