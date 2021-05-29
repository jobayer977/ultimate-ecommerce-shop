import "reflect-metadata"

import { AuthController } from "./app/modules/auth/controller/auth.controller"
import { connectDB } from "./db/database"
import { createExpressServer } from "routing-controllers"

const app = createExpressServer({
	routePrefix: "/api/v1/",
	controllers: [AuthController],
})

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
