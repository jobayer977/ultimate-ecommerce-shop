import * as path from "path"

import { config } from "dotenv"
import { toBool } from "./app/@utils/util.function"

config({
	path: path.join(
		`${process.cwd()}/${process.env.NODE_ENV || "development"}.env`
	),
})

export const ENV = {
	port: process.env.PORT,
	UPLOAD_BASE_PUBLIC_PATH: process.env.UPLOAD_BASE_PUBLIC_PATH,

	API_PREFIX: process.env.API_PREFIX,
	API_TITLE: process.env.API_TITLE,
	API_DESC: process.env.API_DESC,
	API_VERSION: process.env.API_VERSION,
	API_DOCS_URL: "/api/v1/" + "docs",

	jwtSecret: process.env.JWTSecret,
	slatRound: process.env.saltRound,

	MAIL_HOST: process.env.MAIL_HOST,
	MAIL_PORT: process.env.MAIL_PORT,
	MAIL_SECURE: process.env.MAIL_SECURE,
	MAIL_USER: process.env.MAIL_USER,
	MAIL_PASSWORD: process.env.MAIL_PASSWORD,
	MAIL_FROM: process.env.MAIL_FROM,

	CN_CLOUD_NAME: process.env.CN_CLOUD_NAME,
	CN_API_KEY: process.env.CN_API_KEY,
	CN_API_SECRET: process.env.CN_API_SECRET,
	CN_ENHANCE_IMAGE_TAG: toBool(process.env.CN_ENHANCE_IMAGE_TAG),
	CN_STATIC_FILE_SUPPORT: toBool(process.env.CN_STATIC_FILE_SUPPORT),
}
export const ormConfig: any = {
	type: process.env.DB_TYPE,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	synchronize: toBool(process.env.DB_SYNCHRONIZE),
	logging: toBool(process.env.DB_LOGGING),
	ssl: {
		rejectUnauthorized: toBool(process.env.REJECT_UNAUTHORIZED),
	},
	entities: [__dirname + "/app/@modules/**/**/*.entity{.ts,.js}"],
}
