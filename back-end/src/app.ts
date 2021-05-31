require("module-alias/register")

import "reflect-metadata"

import * as express from "express"

import { createConnection, useContainer } from "typeorm"

import { AuthChangePasswordController } from "./app/@modules/auth/controller/auth-change-passwordcontroller"
import { AuthLoginController } from "./app/@modules/auth/controller/auth-login.controller"
import { AuthRegisterController } from "./app/@modules/auth/controller/auth-register.controller"
import { Container } from "typeorm-typedi-extensions"
import { config } from "dotenv"
import { createExpressServer } from "routing-controllers"
import { ormConfig } from "./ENV"

useContainer(Container)

//* DATABASE CONNECTION
const connectDB = async () => {
	await createConnection(ormConfig)
}

//* SERVER INITIALIZED
const app = createExpressServer({
	routePrefix: "/api/v1/",
	development: false,
	controllers: [
		AuthLoginController,
		AuthRegisterController,
		AuthChangePasswordController,
	],
	validation: { validationError: { target: false } },
})

app.use(express.json())
config()

const port: Number = Number(process.env.PORT) || 3000

//* Application bootstrap
;(async () => {
	await connectDB()
	await app.listen(port, () => {
		console.log(`Server running on http://localhost:${port}`)
	})
})()
