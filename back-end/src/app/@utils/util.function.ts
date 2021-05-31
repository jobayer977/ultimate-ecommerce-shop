export function generateOtpCode() {
	return "xxxxx".replace(/[xy]/g, function (char) {
		const randomNumber = (Math.random() * 8) | 0
		const value = char == "x" ? randomNumber : (randomNumber & 0x3) | 0x8
		return value.toString(8).toUpperCase()
	})
}
