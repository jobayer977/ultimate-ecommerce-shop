import { NotFoundError } from "routing-controllers"
import { Profile } from "../entities/Profile.entity"
import { Service } from "typedi"
import { User } from "../entities/User.entity"
import { getManager } from "typeorm"

@Service()
export class DefaultService {
	private entityManager = getManager()

	constructor() {}

	async createUser(data: any) {
		try {
			const profile = new Profile()
			profile.gender = "male"
			profile.photo = "me.jpg"
			// await this.entityManager.save(profile)

			const user = new User()
			user.name = "Joe Smith"
			user.profile = profile

			await this.entityManager.save(user)

			const userRepository = this.entityManager.getRepository(User)
			return await userRepository.find({ relations: ["profile"] })
		} catch (error) {
			throw new NotFoundError(error.message)
		}
	}
}
