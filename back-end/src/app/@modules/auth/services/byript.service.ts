import * as bcryptjs from "bcryptjs"

import { ENV } from "../../../../ENV"
import { Service } from "typedi"

@Service()
export class BcryptService {
	public async hashString(str: string) {
		const salt = await bcryptjs.genSalt(Number(ENV.slatRound || 10))
		return await bcryptjs.hash(str, salt)
	}

	public async compareHash(str: string, hashStr: string) {
		hashStr
		return await bcryptjs.compare(str, hashStr)
	}
}
