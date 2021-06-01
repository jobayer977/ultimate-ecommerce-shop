"use strict";
exports.__esModule = true;
exports.AuthRegisterController = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var auth_register_service_1 = require("../services/auth-register.service");
var AuthRegisterController = /** @class */ (function () {
    function AuthRegisterController() {
        this.authRegisterService = typedi_1["default"].get(auth_register_service_1.AuthRegisterService);
    }
    AuthRegisterController.prototype.admin = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.authRegisterService.admin(user)];
            });
        });
    };
    AuthRegisterController.prototype.customer = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.authRegisterService.customer(user)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Post("/admin"),
        routing_controllers_1.HttpCode(201),
        tslib_1.__param(0, routing_controllers_1.Body())
    ], AuthRegisterController.prototype, "admin");
    tslib_1.__decorate([
        routing_controllers_1.Post("/customer"),
        routing_controllers_1.HttpCode(201),
        tslib_1.__param(0, routing_controllers_1.Body())
    ], AuthRegisterController.prototype, "customer");
    AuthRegisterController = tslib_1.__decorate([
        routing_controllers_1.JsonController("auth/register")
    ], AuthRegisterController);
    return AuthRegisterController;
}());
exports.AuthRegisterController = AuthRegisterController;
