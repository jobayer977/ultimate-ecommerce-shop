"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
var tslib_1 = require("tslib");
var jwt = require("jsonwebtoken");
var ENV_1 = require("../../../../ENV");
var typedi_1 = require("typedi");
var JWTService = /** @class */ (function () {
    function JWTService() {
    }
    JWTService.prototype.sign = function (payload, options) {
        return jwt.sign(payload, ENV_1.ENV.jwtSecret, options);
    };
    JWTService.prototype.verify = function (token) {
        return jwt.verify(token, ENV_1.ENV.jwtSecret);
    };
    JWTService.prototype.makeAccessToken = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var config, token, tokenData;
            return tslib_1.__generator(this, function (_a) {
                config = {
                    payload: data,
                    options: {
                        algorithm: "HS512",
                        expiresIn: "60m",
                    },
                };
                token = this.sign(config.payload, config.options);
                tokenData = jwt.decode(token);
                return [2 /*return*/, { token: token, exp: tokenData.exp }];
            });
        });
    };
    JWTService = tslib_1.__decorate([
        typedi_1.Service()
    ], JWTService);
    return JWTService;
}());
exports.JWTService = JWTService;
//# sourceMappingURL=jwt.service.js.map