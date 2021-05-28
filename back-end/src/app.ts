import { AuthController } from "./app/modules/auth/controller/auth.controller"
import { Pool } from "pg"
import { config } from "dotenv"
import { createExpressServer } from "routing-controllers"

export const pool = new Pool({
	user: "root",
	host: "localhost",
	database: "ishop",
	password: "root",
	port: 5432,
})

const app = createExpressServer({
	routePrefix: "/api/v1/",
	controllers: [AuthController],
})
config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
