"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var user_info_repository_1 = require("../repository/user-info.repository");
var user_repository_1 = require("./../repository/user.repository");
var UserInfoService = /** @class */ (function () {
    function UserInfoService(userInfoRepository, userRepository) {
        this.userInfoRepository = userInfoRepository;
        this.userRepository = userRepository;
    }
    //! Update current User info
    UserInfoService.prototype.updateCurrentUser = function (userProfileDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, userInfoForId, payload, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = userProfileDto.user;
                        userProfileDto === null || userProfileDto === void 0 ? true : delete userProfileDto.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.userRepository.findOne(user, {
                                relations: ["userInfo"],
                            })];
                    case 2:
                        userInfoForId = _a.sent();
                        return [4 /*yield*/, this.userInfoRepository.update(userInfoForId.userInfo.id, userProfileDto)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userInfoRepository.findOne({
                                id: userInfoForId.userInfo.id,
                            })];
                    case 4:
                        payload = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(payload)];
                    case 5:
                        error_1 = _a.sent();
                        throw new Error("Not Found");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //! Get Current User info
    UserInfoService.prototype.getCurrentUserInfo = function (userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.findOne(userId, {
                                relations: ["userInfo"],
                            })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(user.userInfo)];
                    case 2:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserInfoService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_info_repository_1.userInfoRepository,
            user_repository_1.UserRepository])
    ], UserInfoService);
    return UserInfoService;
}());
exports.UserInfoService = UserInfoService;
//# sourceMappingURL=user-info.service.js.map