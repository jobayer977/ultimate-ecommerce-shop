import * as bcryptjs from "bcryptjs"

import { ENV } from "../../../../ENV"
import { Service } from "typedi"

@Service()
export class BcryptService {
	public async hashString(str: string) {
		return bcryptjs.hash(str, ENV.slatRound)
	}

	public async compareHash(str: string, hashString: string) {
		return bcryptjs.compare(str, hashString)
	}
}
