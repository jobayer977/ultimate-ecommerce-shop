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

export const asyncForEach = async (data: any[], callBack: any) => {
	for (let index = 0; index < data.length; index++) {
		await callBack(data[index], index, data)
	}
}
export const getRandomString = (length) => {
	var randomChars = "0123456789"
	var result = ""
	for (var i = 0; i < length; i++) {
		result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
	}
	return result
}
