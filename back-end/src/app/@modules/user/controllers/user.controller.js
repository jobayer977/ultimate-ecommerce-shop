"use strict";
exports.__esModule = true;
exports.UserController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var user_service_1 = require("../services/user.service");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userService = typedi_1.Container.get(user_service_1.UserService);
    }
    UserController.prototype.getOne = function (id) {
        return this.userService.getOne(id);
    };
    UserController.prototype.updateOne = function (userDto, id) {
        return this.userService.updateOne(id, userDto);
    };
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id"))
    ], UserController.prototype, "getOne");
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Put("/:id"),
        tslib_1.__param(0, routing_controllers_1.Body()), tslib_1.__param(1, routing_controllers_1.Param("id"))
    ], UserController.prototype, "updateOne");
    UserController = tslib_1.__decorate([
        routing_controllers_1.JsonController("user")
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
