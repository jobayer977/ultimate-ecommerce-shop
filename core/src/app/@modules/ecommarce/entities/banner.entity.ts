import { Column, Entity } from "typeorm"

import { BannerType } from "../enums/banner.enums"
import { BaseAttributeEntity } from "../../../@base/entities/base-attribute.entity"

@Entity("banners")
export class BannerEntity extends BaseAttributeEntity {
	@Column({ nullable: true })
	image: string

	@Column({ nullable: true })
	title: string

	@Column({ nullable: true })
	url: string
	@Column({
		type: "enum",
		enum: BannerType,
		nullable: false,
	})
	type: BannerType
}
