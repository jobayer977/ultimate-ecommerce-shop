import * as config from "config"

import { User } from "./app/entities/user.entity"

export const ENV = {
	port: config.server.port,

	API_PREFIX: config.docs.API_PREFIX,
	API_TITLE: config.docs.API_TITLE,
	API_DESC: config.docs.API_DESC,
	API_VERSION: config.docs.API_VERSION,

	jwtSecret: config.JWTSecret,
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
	entities: [User],
}
