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
import { BrandDto } from "./../dtos/brand.dto"
import { BrandRepository } from "./../repository/brand.repository"

@Service()
export class BrandService {
	constructor(
		@InjectRepository()
		private brandRepository: BrandRepository
	) {}

	//! Filter
	async filter(baseFilterDto: BaseFilterDto) {
		return this.brandRepository.filter(baseFilterDto)
	}

	//!Create
	async create(brandDto: BrandDto) {
		try {
			const created = await this.brandRepository.save(brandDto)
			return insertDataPlaceholder(created)
		} catch (error) {
			throw new BadRequestError(error)
		}
	}

	//! Get one
	async findById(id: string) {
		try {
			const brand = await this.brandRepository.findOne(id)
			if (!brand) {
				throw new NotFoundError(`Not Found`)
			}
			return getSingleDataPlaceholder(brand)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Update
	async update(id: string, brandDto: BrandDto) {
		const brand = await this.findById(id)
		try {
			const updated = await this.brandRepository.save({
				...brand.data,
				...brandDto,
			})
			return updateDataPlaceholder(updated)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Delete
	async delete(id: string) {
		const brand = await this.findById(id)
		try {
			await this.brandRepository.delete(brand.data?.id)
			return deleteDataPlaceholder(brand?.data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
}
