import { diskStorage } from "multer"

export function generateOtpCode() {
	return "xxxxx".replace(/[xy]/g, function (char) {
		const randomNumber = (Math.random() * 8) | 0
		const value = char == "x" ? randomNumber : (randomNumber & 0x3) | 0x8
		return value.toString(8).toUpperCase()
	})
}
export function toBool(value: string): boolean {
	return value === "true"
}

export const storageOptions = diskStorage({
	destination: "./uploads",
	filename: (req: any, file: any, callback) => {
		callback(null, generateFilename(file))
	},
})

function generateFilename(file: any) {
	return `${Date.now()}.jpg`
}
