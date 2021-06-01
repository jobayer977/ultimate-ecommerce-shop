"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailHelper = void 0;
var tslib_1 = require("tslib");
var nodemailer = require("nodemailer");
var ENV_1 = require("./../../ENV");
var MailHelper = /** @class */ (function () {
    function MailHelper() {
    }
    MailHelper.prototype.Mail = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var transporter_1, mailOptions_1, myPromise;
            return tslib_1.__generator(this, function (_a) {
                try {
                    transporter_1 = nodemailer.createTransport({
                        host: ENV_1.ENV.MAIL_HOST,
                        port: ENV_1.ENV.MAIL_PORT,
                        secure: ENV_1.ENV.MAIL_SECURE,
                        auth: {
                            user: ENV_1.ENV.MAIL_USER,
                            pass: ENV_1.ENV.MAIL_PASSWORD, // generated ethereal password
                        },
                        tls: {
                            rejectUnauthorized: false,
                        },
                    });
                    mailOptions_1 = {
                        from: ENV_1.ENV.MAIL_FROM,
                        to: data.email,
                        subject: data.subject,
                        text: data.body,
                    };
                    myPromise = new Promise(function (resolve, reject) {
                        transporter_1.sendMail(mailOptions_1, function (error) {
                            if (error) {
                                reject(error);
                            }
                            resolve(200);
                        });
                    });
                    return [2 /*return*/, myPromise];
                }
                catch (error) {
                    return [2 /*return*/, error];
                }
                return [2 /*return*/];
            });
        });
    };
    return MailHelper;
}());
exports.MailHelper = MailHelper;
//# sourceMappingURL=mail.helper.js.map