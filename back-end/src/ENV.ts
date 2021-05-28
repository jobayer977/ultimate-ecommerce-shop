import { config } from "dotenv"
config()

export const ENV: any = {
	port: 3000,

	API_PREFIX: process.env.API_PREFIX,
	API_TITLE: process.env.API_TITLE,
	API_DESC: process.env.API_DESC,
	API_VERSION: process.env.API_VERSION,

	X_REQUEST_ID: process.env.X_REQUEST_ID,
	X_CLIENT_NAME: process.env.X_CLIENT_NAME,
	X_COUNTRY_CODE: process.env.X_COUNTRY_CODE,
	X_CLIENT_VERSION: process.env.X_CLIENT_VERSION,
}
