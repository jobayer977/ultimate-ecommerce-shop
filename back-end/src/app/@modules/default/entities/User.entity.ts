import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm"

import { Profile } from "./Profile.entity"

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@OneToOne(() => Profile, (profile) => profile.user, { cascade: ["insert"] })
	@JoinColumn()
	profile: Profile
}
