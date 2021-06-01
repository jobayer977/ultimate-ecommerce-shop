"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginController = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var auth_credentials_dto_1 = require("../dto/auth-credentials.dto");
var auth_login_service_1 = require("../services/auth-login.service");
var AuthLoginController = /** @class */ (function () {
    function AuthLoginController() {
        this.authLoginService = typedi_1.default.get(auth_login_service_1.AuthLoginService);
    }
    AuthLoginController.prototype.admin = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authLoginService.admin(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthLoginController.prototype.customer = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authLoginService.customer(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Post("/admin"),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AuthLoginController.prototype, "admin", null);
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Post("/customer"),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], AuthLoginController.prototype, "customer", null);
    AuthLoginController = tslib_1.__decorate([
        routing_controllers_1.JsonController("auth/login")
    ], AuthLoginController);
    return AuthLoginController;
}());
exports.AuthLoginController = AuthLoginController;
//# sourceMappingURL=auth-login.controller.js.map