import "reflect-metadata"

import * as express from "express"

import { AuthController } from "./app/controller/auth-admin.controller"
import { config } from "dotenv"
import { connectDB } from "./db/database"
import { createExpressServer } from "routing-controllers"

const baseDir = __dirname

const app = createExpressServer({
	routePrefix: "/api/v1/",
	controllers: [AuthController],
	middlewares: [baseDir + "/middleware/**/*{.js,.ts}"],
	validation: { validationError: { target: false } },
})

app.use(express.json())
config()

const port: Number = Number(process.env.PORT) || 3000
const startServer = async () => {
	await app.listen(port, () => {
		console.log(`Server running on http://localhost:${port}`)
	})
}

;(async () => {
	await connectDB()
	await startServer()
})()
