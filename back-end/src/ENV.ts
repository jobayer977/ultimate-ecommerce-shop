import * as config from "config"

import { Customer } from "./app/@modules/customer/entities/customer.entity"
import { User } from "./app/@modules/user/entities/user.entity"

export const ENV = {
	port: config.server.port,

	API_PREFIX: config.docs.API_PREFIX,
	API_TITLE: config.docs.API_TITLE,
	API_DESC: config.docs.API_DESC,
	API_VERSION: config.docs.API_VERSION,

	jwtSecret: config.JWTSecret,
	slatRound: config.saltRound,

	MAIL_HOST: config.MAIL_HOST,
	MAIL_PORT: config.MAIL_PORT,
	MAIL_SECURE: config.MAIL_SECURE,
	MAIL_USER: config.MAIL_USER,
	MAIL_PASSWORD: config.MAIL_PASSWORD,
	MAIL_FROM: config.MAIL_FROM,
}
export const ormConfig = {
	type: config.db.type,
	host: config.db.host,
	port: config.db.port,
	username: config.db.username,
	password: config.db.password,
	database: config.db.database,
	synchronize: config.db.synchronize,
	logging: config.db.logging,
	entities: [User, Customer],
}
