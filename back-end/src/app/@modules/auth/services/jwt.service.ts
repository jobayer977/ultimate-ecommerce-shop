import * as jwt from "jsonwebtoken"

import { ENV } from "../../../../ENV"
import { Service } from "typedi"

@Service()
export class JWTService {
	public sign(payload: any, options: jwt.SignOptions) {
		return jwt.sign(payload, ENV.jwtSecret, options)
	}
	public verify(token: string) {
		return jwt.verify(token, ENV.jwtSecret)
	}

	public async makeAccessToken(data: any) {
		const config: any = {
			payload: data,
			options: {
				algorithm: "HS512",
				expiresIn: "60m",
			},
		}
		const token = this.sign(config.payload, config.options)
		const tokenData: any = jwt.decode(token)
		return { token, exp: tokenData.exp }
	}
}
