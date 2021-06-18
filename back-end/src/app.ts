import "reflect-metadata"

import * as express from "express"
import * as jwt from "jsonwebtoken"
import * as swaggerUiExpress from "swagger-ui-express"

import {
	Action,
	NotFoundError,
	UnauthorizedError,
	useExpressServer,
} from "routing-controllers"
import { ENV, ormConfig } from "./ENV"
import { createConnection, getManager, useContainer } from "typeorm"

import { Container } from "typeorm-typedi-extensions"
import { CustomErroHandler } from "./app/@middlewares/custom-error-handler.middleware"
import { User } from "./app/@modules/user/entities/user.entity"
import { UserType } from "./app/@enums/userType.enum"
import { config } from "dotenv"
import { spec } from "./docs"

import _ = require("lodash")
import process = require("process")
import path = require("path")
const cloudinary = require("cloudinary").v2
const expressApp = express()

useContainer(Container)

config()

//*Cloudinary
cloudinary.config({
	cloud_name: ENV.CN_CLOUD_NAME,
	api_key: ENV.CN_API_KEY,
	api_secret: ENV.CN_API_SECRET,
	enhance_image_tag: ENV.CN_ENHANCE_IMAGE_TAG,
	static_file_support: ENV.CN_STATIC_FILE_SUPPORT,
})

//*  Database Connection
const connectDB = async () => {
	await createConnection(ormConfig)
}

//* Auth Role Verify
const roleVerify = async (roles: string[], token: string) => {
	const entityManager = getManager()
	const decodedToken: any = jwt.decode(token)

	// Role wise find DB return true or error exception
	if (_.isEmpty(decodedToken.id) === false) {
		const user = await entityManager.findOne(User, {
			id: decodedToken.id,
		})
		if (roles.includes(String(user.type)) === false)
			throw new UnauthorizedError("UnAuthorized Admin ")
		return true
	} else {
		throw new UnauthorizedError("UnAuthorized Admin ")
	}
}

//*  App Initialized
const app = useExpressServer(expressApp, {
	defaults: {
		nullResultCode: 404,
		undefinedResultCode: 204,
	},
	cors: true,
	routePrefix: ENV.API_PREFIX,
	development: false,
	controllers: [__dirname + "/app/@modules/**/**/*.controller{.ts,.js}"],
	middlewares: [CustomErroHandler],
	validation: {
		validationError: { target: false, value: false },
	},
	authorizationChecker: async (action: Action, roles: UserType[]) => {
		try {
			const { request } = action
			//*  Token Verify
			let token = request.headers.authorization
			if (!token) throw new UnauthorizedError(`UnAuthorized Token`)
			token = token.split(" ")[1]
			let verifiedUser = jwt.verify(token, ENV.jwtSecret)
			if (!verifiedUser) {
				throw new UnauthorizedError(`UnAuthorized User`)
			}

			//*  Role Verify
			await roleVerify(roles, token) // Return true or Error exception

			return true
		} catch (error) {
			throw new UnauthorizedError(`UnAuthorized Auth`)
		}
	},
	currentUserChecker: async (action: Action) => {
		const entityManager = getManager()

		const { request } = action
		try {
			let token = await request.headers.authorization
			token = token.split(" ")[1]

			const decodedToken: any = jwt.decode(token)
			const user = await entityManager.findOne(User, {
				id: decodedToken.id,
			})

			return user
		} catch (error) {
			new NotFoundError("Not Found")
		}
	},
})
//*  Doc
app.use(ENV.API_DOCS_URL, swaggerUiExpress.serve, swaggerUiExpress.setup(spec))

//* Serve media static path
app.use("/uploads", express.static("uploads"))

//*  Application bootstrap
const PORT: any = Number(process.env.PORT) || ENV.port || 3000
;(async () => {
	await connectDB()
	await app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`)
	})
})()
