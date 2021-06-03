import { NotFoundError } from "routing-controllers"
import { Service } from "typedi"
import { InjectRepository } from "typeorm-typedi-extensions"
import {
	deleteDataPlaceholder,
	getSingleDataPlaceholder,
	insertDataPlaceholder,
	updateDataPlaceholder,
} from "../../../@utils/responsePlaceholder.util"
import { BannerFilterDto } from "../dtos/bannerFilter.dto"
import { BannersRepository } from "../repository/banners.repository"
import { BannerDto } from "./../dtos/banner.dto"

@Service()
export class BannersService {
	constructor(
		@InjectRepository()
		private bannerRepository: BannersRepository
	) {}

	async create(bannerDto: BannerDto) {
		try {
			return insertDataPlaceholder(await this.bannerRepository.save(bannerDto))
		} catch (error) {
			throw new NotFoundError(error.message)
		}
	}
	//! Filter
	async filter(bannerFilterDto: BannerFilterDto) {
		return this.bannerRepository.filter(bannerFilterDto)
	}

	async findById(id: string) {
		try {
			const banner = await this.bannerRepository.findOne(id)
			return getSingleDataPlaceholder(banner)
		} catch (error) {
			throw new NotFoundError(error.message)
		}
	}

	//! Update
	async update(id: string, bannerDto: BannerDto) {
		const brand = await this.findById(id)
		try {
			const updated = await this.bannerRepository.save({
				...brand.data,
				...bannerDto,
			})
			return updateDataPlaceholder(updated)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}

	//! Delete
	async delete(id: string) {
		const banner = await this.findById(id)
		try {
			await this.bannerRepository.delete(banner.data?.id)
			return deleteDataPlaceholder(banner?.data)
		} catch (error) {
			throw new NotFoundError(`Not Found`)
		}
	}
}
