import * as nodemailer from "nodemailer"

import { ENV } from "./../../ENV"

export class MailHelper {
	public async Mail(data: any) {
		try {
			const transporter = nodemailer.createTransport({
				host: ENV.MAIL_HOST,
				port: ENV.MAIL_PORT,
				secure: ENV.MAIL_SECURE,
				auth: {
					user: ENV.MAIL_USER, // generated ethereal user
					pass: ENV.MAIL_PASSWORD, // generated ethereal password
				},
				tls: {
					rejectUnauthorized: false,
				},
			})
			// setup email data with unicode symbols
			const mailOptions = {
				from: ENV.MAIL_FROM,
				to: data.email,
				subject: data.subject,
				text: data.body,
			}
			// send mail with defined transport object
			const myPromise = new Promise((resolve, reject) => {
				transporter.sendMail(mailOptions, (error: any) => {
					if (error) {
						reject(error)
					}
					resolve(200)
				})
			})
			return myPromise
		} catch (error) {
			return error
		}
	}
}
