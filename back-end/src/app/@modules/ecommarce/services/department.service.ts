import { BadRequestError, NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import { BaseAttributeFilterDto } from "../../../@base/dto/base-filter.dto"
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
	async filter(baseFilterDto: BaseAttributeFilterDto, relations: string[]) {
		return this.departmentRepository.filter(baseFilterDto, relations)
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
	async findById(id: string, relations: string[]) {
		try {
			const department = await this.departmentRepository.findOne(id, {
				relations: relations,
			})
			if (!department) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(department)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Update
	async update(id: string, departmentDto: DepartmentDto, relations: string[]) {
		const department = await this.findById(id, relations)
		try {
			const updateDepartment = await this.departmentRepository.save({
				...department.data,
				...departmentDto,
			})
			return updateDataPlaceholder(updateDepartment)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Delete
	async delete(id: string, relations: string[]) {
		const department = await this.findById(id, relations)
		try {
			await this.departmentRepository.delete(department.data?.id)
			return deleteDataPlaceholder(department?.data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
}
