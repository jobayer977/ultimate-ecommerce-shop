import { BaseEntity } from "./base.entity"
import { Column } from "typeorm"

export class BaseAttributeEntity extends BaseEntity {
	@Column({ nullable: true, default: false })
	isFeatured: boolean

	@Column({ nullable: true, default: false })
	isActive: boolean

	@Column({ nullable: true, default: false })
	isPopular: boolean

	@Column({ nullable: true, default: false })
	isHot: boolean

	@Column({ nullable: true, default: false })
	isNew: boolean
}
