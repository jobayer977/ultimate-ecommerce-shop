import { ForgetPasswordCheckDto } from "../dto/forgetPassword.dto"
import { MailHelper } from "./../../../@helpers/mail.helper"
import { Service } from "typedi"
import { generateOtpCode } from "../../../@utils/util.function"

@Service()
export class AuthForgotPasswordService {
	mailHelper = new MailHelper()

	constructor() {}

	async sendOtp(data: ForgetPasswordCheckDto) {
		const otp = generateOtpCode()
		const mailInfo = {
			email: data.email,
			subject: "Forget Password Otp",
			body: `Your Otp is ${otp} which expires in 5 min`,
		}
		const res = await this.mailHelper.Mail(mailInfo)

		return { res, otp }
	}
}
