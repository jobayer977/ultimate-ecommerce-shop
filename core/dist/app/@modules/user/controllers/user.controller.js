"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var typedi_1 = require("typedi");
var userType_enum_1 = require("../enums/userType.enum");
var user_service_1 = require("../services/user.service");
var user_filter_dto_1 = require("./../dto/user-filter.dto");
var userChangePhoneNumber_dto_1 = require("./../dto/userChangePhoneNumber.dto");
var user_entity_1 = require("./../entities/user.entity");
var UserController = /** @class */ (function () {
    function UserController() {
        this.userService = typedi_1.Container.get(user_service_1.UserService);
        this.relations = ["userInfo"];
    }
    UserController.prototype.filter = function (userFilterDto) {
        return this.userService.filter(userFilterDto, this.relations);
    };
    UserController.prototype.findById = function (id) {
        return this.userService.findById(id);
    };
    UserController.prototype.changePhoneNumber = function (user, userChangePhoneNumberDto) {
        return this.userService.changePhoneNumber(user.id, userChangePhoneNumberDto);
    };
    UserController.prototype.deleteUser = function (id) {
        try {
            return this.userService.deleteUser(id);
        }
        catch (error) { }
    };
    tslib_1.__decorate([
        routing_controllers_1.Get("/filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [user_filter_dto_1.UserFilterDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UserController.prototype, "filter", null);
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UserController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Put("/changePhoneNumber"),
        tslib_1.__param(0, routing_controllers_1.CurrentUser()),
        tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [user_entity_1.User,
            userChangePhoneNumber_dto_1.UserChangePhoneNumberDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UserController.prototype, "changePhoneNumber", null);
    tslib_1.__decorate([
        routing_controllers_1.Authorized([userType_enum_1.UserTypes.ADMIN]),
        routing_controllers_openapi_1.OpenAPI({ description: "Protected By Admin User only" }),
        routing_controllers_1.Delete("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UserController.prototype, "deleteUser", null);
    UserController = tslib_1.__decorate([
        routing_controllers_1.JsonController("user")
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map