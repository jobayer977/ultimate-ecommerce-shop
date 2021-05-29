import { createConnection } from "typeorm"
import { ormConfig } from "../ENV"

export const connectDB = async () => {
	await createConnection(ormConfig)
}
