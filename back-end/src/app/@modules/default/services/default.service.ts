import { NotFoundError } from "routing-controllers"
import { Photo } from "../entities/Photo.entity"
import { Service } from "typedi"
import { User } from "../entities/User.entity"
import { getManager } from "typeorm"

@Service()
export class DefaultService {
	private entityManager = getManager()

	constructor() {}

	async createUser(data: any) {
		try {
			const photo1 = new Photo()
			photo1.url = "me.jpg"
			await this.entityManager.save(photo1)

			const photo2 = new Photo()
			photo2.url = "me-and-bears.jpg"
			await this.entityManager.save(photo2)

			const user = new User()
			user.name = "John"
			user.photos = [photo1, photo2]

			return await this.entityManager.save(user)
		} catch (error) {
			throw new NotFoundError(error.message)
		}
	}

	async find() {
		try {
			const userRepo = this.entityManager.getRepository(User)
			const users = await userRepo.find({ relations: ["photos"] })

			// /inverse

			const photoRepository = this.entityManager.getRepository(Photo)
			const photos = await photoRepository.find({ relations: ["user"] })

			return { photos }
		} catch (error) {}
	}
}
