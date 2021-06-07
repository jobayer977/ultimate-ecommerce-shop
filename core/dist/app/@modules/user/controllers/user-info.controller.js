"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var user_info_dto_1 = require("../dto/user-info.dto");
var user_info_service_1 = require("../services/user-info.service");
var user_entity_1 = require("./../entities/user.entity");
var UserInfoController = /** @class */ (function () {
    function UserInfoController() {
        this.userProfileService = typedi_1.Container.get(user_info_service_1.UserInfoService);
    }
    UserInfoController.prototype.updateCurrentUser = function (user, userProfileDto) {
        return this.userProfileService.updateCurrentUser(tslib_1.__assign(tslib_1.__assign({}, userProfileDto), { user: user.id }));
    };
    UserInfoController.prototype.currentUserInfo = function (user) {
        try {
            return this.userProfileService.getCurrentUserInfo(user.id);
        }
        catch (error) {
            throw new routing_controllers_1.NotFoundError("Not Found");
        }
    };
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(202),
        routing_controllers_1.Put("/current"),
        tslib_1.__param(0, routing_controllers_1.CurrentUser()),
        tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [user_entity_1.User,
            user_info_dto_1.UserInfoDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UserInfoController.prototype, "updateCurrentUser", null);
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(202),
        routing_controllers_1.Get("/current"),
        tslib_1.__param(0, routing_controllers_1.CurrentUser()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [user_entity_1.User]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UserInfoController.prototype, "currentUserInfo", null);
    UserInfoController = tslib_1.__decorate([
        routing_controllers_1.JsonController("userInfo")
    ], UserInfoController);
    return UserInfoController;
}());
exports.UserInfoController = UserInfoController;
//# sourceMappingURL=user-info.controller.js.map