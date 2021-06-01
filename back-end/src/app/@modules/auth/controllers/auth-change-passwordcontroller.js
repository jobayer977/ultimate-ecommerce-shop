"use strict";
exports.__esModule = true;
exports.AuthChangePasswordController = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var auth_change_password_service_1 = require("../services/auth-change-password.service");
var AuthChangePasswordController = /** @class */ (function () {
    function AuthChangePasswordController() {
        this.authChangePasswordService = typedi_1["default"].get(auth_change_password_service_1.AuthChangePasswordService);
    }
    AuthChangePasswordController.prototype.admin = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.authChangePasswordService.admin(data)];
            });
        });
    };
    AuthChangePasswordController.prototype.customer = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.authChangePasswordService.customer(data)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.OnUndefined(404),
        routing_controllers_1.Post("/admin"),
        tslib_1.__param(0, routing_controllers_1.Body())
    ], AuthChangePasswordController.prototype, "admin");
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.OnUndefined(404),
        routing_controllers_1.Post("/customer"),
        tslib_1.__param(0, routing_controllers_1.Body())
    ], AuthChangePasswordController.prototype, "customer");
    AuthChangePasswordController = tslib_1.__decorate([
        routing_controllers_1.JsonController("auth/changePassword")
    ], AuthChangePasswordController);
    return AuthChangePasswordController;
}());
exports.AuthChangePasswordController = AuthChangePasswordController;
