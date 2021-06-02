import "reflect-metadata"

import * as jwt from "jsonwebtoken"
import * as swaggerUiExpress from "swagger-ui-express"

import {
	Action,
	UnauthorizedError,
	createExpressServer,
} from "routing-controllers"
import { ENV, ormConfig } from "./ENV"
import { createConnection, getManager, useContainer } from "typeorm"

import { CategoryEntity } from "./app/@modules/ecommarce/entities/category.entity"
import { Container } from "typeorm-typedi-extensions"
import { Customer } from "./app/@modules/customer/entities/customer.entity"
import { DepartmentEntity } from "./app/@modules/ecommarce/entities/department.entity"
import { User } from "./app/@modules/user/entities/user.entity"
import { UserType } from "./app/@enums/userType.enum"
import { config } from "dotenv"
import { spec } from "./docs"

import _ = require("lodash")
import process = require("process")

useContainer(Container)

config()
//*  Database Connection
const connectDB = async () => {
	if (process.env.DBATABASE_URL) {
		await createConnection({
			type: "postgres",
			url: "postgres://mvqlsmbjohzuys:5d369bee6d76f3193a990a98ba830ca52d5fbc295953407cb221ab90d2498eb0@ec2-34-193-113-223.compute-1.amazonaws.com:5432/dd0j05ms4ol6dm",
			ssl: {
				rejectUnauthorized: false,
			},
			logging: true,
			entities: [Customer, User, CategoryEntity, DepartmentEntity],
		})
	} else {
		await createConnection(ormConfig)
	}
}

//* Auth Role Verify
const roleVerify = async (roles: string[], token: string) => {
	const entityManager = getManager()
	const decodedToken: any = jwt.decode(token)

	// Role wise find DB return true or error exception
	if (roles.includes(UserType.ADMIN)) {
		const admin = await entityManager.findOne(User, {
			id: decodedToken.id,
		})

		if (_.isEmpty(admin)) throw new UnauthorizedError("UnAuthorized Admin ")
		return true
	} else if (roles.includes(UserType.CUSTOMER)) {
		const customer = await entityManager.findOne(Customer, {
			id: decodedToken.id,
		})
		if (_.isEmpty(customer)) throw new UnauthorizedError("UnAuthorized Admin ")
		return true
	}
}

//*  App Initialized
const app = createExpressServer({
	routePrefix: ENV.API_PREFIX,
	development: false,
	controllers: [__dirname + "/app/@modules/**/**/*.controller{.ts,.js}"],
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
			console.log(await roleVerify(roles, token))
			await roleVerify(roles, token) // Return true or Error exception

			return true
		} catch (error) {
			throw new UnauthorizedError(`UnAuthorized Auth`)
		}
	},
})
//*  Doc
app.use(ENV.API_DOCS_URL, swaggerUiExpress.serve, swaggerUiExpress.setup(spec))

//*  Application bootstrap
const PORT: any = Number(process.env.PORT) || ENV.port || 3000
;(async () => {
	await connectDB()
	await app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`)
	})
})()
