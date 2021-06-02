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
import { DepartmentRepository } from "../repository/department.repository"
import { DepartmentDto } from "./../dtos/department.dto"

@Service()
export class DepartmentService {
	constructor(
		@InjectRepository()
		private departmentRepository: DepartmentRepository
	) {}

	//! Filter
	async filter(baseFilterDto: BaseFilterDto) {
		return this.departmentRepository.filter(baseFilterDto)
	}

	//!Create
	async create(departmentDto: DepartmentDto) {
		try {
			const createdDepartment = await this.departmentRepository.save(
				departmentDto
			)
			return insertDataPlaceholder(createdDepartment)
		} catch (error) {
			throw new BadRequestError(error)
		}
	}

	//! Get one
	async findById(id: string) {
		try {
			const department = await this.departmentRepository.findOne({ id })
			if (!department) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(department)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Update
	async update(id: string, departmentDto: DepartmentDto) {
		const department = await this.findById(id)
		try {
			const updateDepartment = await this.departmentRepository.save({
				...department,
				...departmentDto,
			})
			return updateDataPlaceholder(updateDepartment)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Delete
	async delete(id: string) {
		const department = await this.findById(id)
		try {
			await this.departmentRepository.delete(department.data?.id)
			return deleteDataPlaceholder(department?.data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
}
