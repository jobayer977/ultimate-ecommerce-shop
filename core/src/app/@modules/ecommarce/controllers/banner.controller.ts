import {
	Body,
	Delete,
	Get,
	JsonController,
	Param,
	Post,
	Put,
	QueryParams,
} from "routing-controllers"
import { Container } from "typedi"
import { BannerDto } from "./../dtos/banner.dto"
import { BannerFilterDto } from "./../dtos/bannerFilter.dto"
import { BannersService } from "./../services/banners.service"

@JsonController("banners")
export class BannerController {
	private bannerService = Container.get(BannersService)
	@Post("")
	async create(@Body() bannerDto: BannerDto) {
		return this.bannerService.create(bannerDto)
	}

	@Get("/filter")
	async filter(@QueryParams() bannerFilterDto: BannerFilterDto) {
		return this.bannerService.filter(bannerFilterDto)
	}

	@Get("/:id")
	async findById(@Param("id") id: string) {
		return await this.bannerService.findById(id)
	}

	// @Authorized([UserType.ADMIN])
	@Put("/:id")
	async update(@Param("id") id: string, @Body() bannerDto: BannerDto) {
		return this.bannerService.update(id, bannerDto)
	}

	// @Authorized([UserType.ADMIN])
	@Delete("/:id")
	async delete(@Param("id") id: string) {
		return this.bannerService.delete(id)
	}
}
