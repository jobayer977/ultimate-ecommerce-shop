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
import { CategoryEntity } from "./../entities/category.entity"
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
	async create(categoryDto: CategoryDto) {
		const {
			name,
			slug,
			image,
			department,
			isFeatured,
			isActive,
			isPopular,
			isHot,
			isNew,
		} = categoryDto
		try {
			const department = await this.departmentRepository.findOne({
				id: categoryDto.department,
			})
			const created = new CategoryEntity()
			created.name = name
			created.slug = slug
			created.image = image
			created.department = [department]
			created.isFeatured = isFeatured
			created.isActive = isActive
			created.isPopular = isPopular
			created.isHot = isHot
			created.isNew = isNew
			await this.categoryRepository.save(created)
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
