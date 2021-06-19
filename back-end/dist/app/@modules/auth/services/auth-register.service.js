"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRegisterService = void 0;
var tslib_1 = require("tslib");
var _ = require("lodash");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var user_entity_1 = require("../../user/entities/user.entity");
var userType_enum_1 = require("../../user/enums/userType.enum");
var user_info_repository_1 = require("../../user/repository/user-info.repository");
var user_repository_1 = require("../../user/repository/user.repository");
var byript_service_1 = require("./byript.service");
var jwt_service_1 = require("./jwt.service");
var AuthRegisterService = /** @class */ (function () {
    function AuthRegisterService(userRepository, userProfileRepository, jwtService, bcryptService) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
        this.jwtService = jwtService;
        this.bcryptService = bcryptService;
    }
    //! Admin
    AuthRegisterService.prototype.admin = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user_1, hashPassword, userInfo, newUser, token, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = user.password, phoneNumber = user.phoneNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, this.userRepository.findOne({
                                phoneNumber: phoneNumber,
                                type: userType_enum_1.UserTypes.ADMIN,
                            })
                            //* Verify User
                        ];
                    case 2:
                        user_1 = _a.sent();
                        //* Verify User
                        if (_.isEmpty(user_1) === false) {
                            throw new routing_controllers_1.NotFoundError("User Already Exist with " + phoneNumber + " number");
                        }
                        return [4 /*yield*/, this.bcryptService.hashString(password)];
                    case 3:
                        hashPassword = _a.sent();
                        return [4 /*yield*/, this.userProfileRepository.save({ phoneNumber: phoneNumber })];
                    case 4:
                        userInfo = _a.sent();
                        newUser = new user_entity_1.User();
                        newUser.phoneNumber = phoneNumber;
                        newUser.password = hashPassword;
                        newUser.userInfo = userInfo;
                        newUser.type = userType_enum_1.UserTypes.ADMIN;
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.jwtService.makeAccessToken({
                                id: newUser === null || newUser === void 0 ? void 0 : newUser.id,
                            })];
                    case 6:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token,
                            }];
                    case 7:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.NotFoundError(error_1.message);
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    //! Customer
    AuthRegisterService.prototype.customer = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user_2, hashPassword, userInfo, newUser, token, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = user.password, phoneNumber = user.phoneNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, this.userRepository.findOne({ phoneNumber: phoneNumber })];
                    case 2:
                        user_2 = _a.sent();
                        console.log(user_2);
                        //* Verify User
                        if (_.isEmpty(user_2) === false) {
                            throw new routing_controllers_1.NotFoundError("User Already Exist with " + phoneNumber + " number");
                        }
                        return [4 /*yield*/, this.bcryptService.hashString(password)];
                    case 3:
                        hashPassword = _a.sent();
                        return [4 /*yield*/, this.userProfileRepository.save({ phoneNumber: phoneNumber })];
                    case 4:
                        userInfo = _a.sent();
                        newUser = new user_entity_1.User();
                        newUser.phoneNumber = phoneNumber;
                        newUser.password = hashPassword;
                        newUser.userInfo = userInfo;
                        newUser.type = userType_enum_1.UserTypes.CUSTOMER;
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.jwtService.makeAccessToken({
                                id: newUser === null || newUser === void 0 ? void 0 : newUser.id,
                            })];
                    case 6:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token,
                            }];
                    case 7:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError(error_2);
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    AuthRegisterService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository,
            user_info_repository_1.userInfoRepository,
            jwt_service_1.JWTService,
            byript_service_1.BcryptService])
    ], AuthRegisterService);
    return AuthRegisterService;
}());
exports.AuthRegisterService = AuthRegisterService;
//# sourceMappingURL=auth-register.service.js.map