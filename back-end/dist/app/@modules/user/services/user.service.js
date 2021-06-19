"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var user_info_repository_1 = require("./../repository/user-info.repository");
var user_repository_1 = require("./../repository/user.repository");
var UserService = /** @class */ (function () {
    function UserService(userRepository, userInfoRepository) {
        this.userRepository = userRepository;
        this.userInfoRepository = userInfoRepository;
    }
    //! Filter
    UserService.prototype.filter = function (userFilterDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.userRepository.filter(userFilterDto, relations)];
            });
        });
    };
    //!Get One
    UserService.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userRepository.findOne({ id: id })];
                    case 1:
                        user = _a.sent();
                        delete user.password;
                        if (!user) {
                            throw new routing_controllers_1.NotFoundError("User Not Exist");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(user)];
                    case 2:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("User Not Exist");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //!Update Phone Number
    UserService.prototype.changePhoneNumber = function (id, userChangePhoneNumberDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newPhoneNumber, oldPhoneNumber, userForId, payload, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newPhoneNumber = userChangePhoneNumberDto.newPhoneNumber, oldPhoneNumber = userChangePhoneNumberDto.oldPhoneNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.userRepository.findOne({
                                id: id,
                                phoneNumber: oldPhoneNumber,
                            }, { relations: ["userInfo"] })];
                    case 2:
                        userForId = _a.sent();
                        if (!userForId)
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        //* Update in user table
                        return [4 /*yield*/, this.userRepository.update(id, {
                                phoneNumber: newPhoneNumber,
                            })
                            //* Update in userInfo table
                        ];
                    case 3:
                        //* Update in user table
                        _a.sent();
                        //* Update in userInfo table
                        return [4 /*yield*/, this.userInfoRepository.update(userForId.userInfo.id, {
                                phoneNumber: newPhoneNumber,
                            })
                            //* Find for payload
                        ];
                    case 4:
                        //* Update in userInfo table
                        _a.sent();
                        return [4 /*yield*/, this.userRepository.findOne({
                                id: id,
                                phoneNumber: newPhoneNumber,
                            })];
                    case 5:
                        payload = _a.sent();
                        delete payload.password;
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(payload)];
                    case 6:
                        error_2 = _a.sent();
                        throw new Error(error_2.message);
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    //! Delete User
    UserService.prototype.deleteUser = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.userRepository.findOne({ id: id }, { relations: ["userInfo"] })];
                    case 2:
                        user = _a.sent();
                        console.log(user);
                        return [4 /*yield*/, this.userRepository.delete(user === null || user === void 0 ? void 0 : user.id)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userInfoRepository.delete(user === null || user === void 0 ? void 0 : user.userInfo.id)];
                    case 4:
                        _a.sent();
                        delete user.password;
                        delete user.userInfo;
                        return [2 /*return*/, responsePlaceholder_util_1.deleteDataPlaceholder(user)];
                    case 5:
                        error_3 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository,
            user_info_repository_1.userInfoRepository])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map