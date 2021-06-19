"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLoginService = void 0;
var tslib_1 = require("tslib");
var _ = require("lodash");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var userType_enum_1 = require("../../user/enums/userType.enum");
var user_repository_1 = require("../../user/repository/user.repository");
var byript_service_1 = require("./byript.service");
var jwt_service_1 = require("./jwt.service");
var AuthLoginService = /** @class */ (function () {
    function AuthLoginService(userRepository, jwtService, bcryptService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.bcryptService = bcryptService;
    }
    //! Admin
    AuthLoginService.prototype.admin = function (credential) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user, isPasswordValid, token, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = credential.password, phoneNumber = credential.phoneNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.userRepository.findOne({
                                phoneNumber: phoneNumber,
                                type: userType_enum_1.UserTypes.ADMIN,
                            })
                            //* Verify User
                        ];
                    case 2:
                        user = _a.sent();
                        //* Verify User
                        if (_.isEmpty(user)) {
                            throw new routing_controllers_1.NotFoundError("User Not Found with " + phoneNumber + " number");
                        }
                        return [4 /*yield*/, this.bcryptService.compareHash(password, user.password)];
                    case 3:
                        isPasswordValid = _a.sent();
                        if (isPasswordValid === false) {
                            throw new routing_controllers_1.NotFoundError("Password Not matched");
                        }
                        return [4 /*yield*/, this.jwtService.makeAccessToken({ id: user.id })];
                    case 4:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token,
                            }];
                    case 5:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //! Customer
    AuthLoginService.prototype.customer = function (credential) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user, isPasswordValid, token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = credential.password, phoneNumber = credential.phoneNumber;
                        return [4 /*yield*/, this.userRepository.findOne({
                                phoneNumber: phoneNumber,
                                type: userType_enum_1.UserTypes.CUSTOMER,
                            })
                            //* Verify User
                        ];
                    case 1:
                        user = _a.sent();
                        //* Verify User
                        if (_.isEmpty(user)) {
                            throw new routing_controllers_1.NotFoundError("User Not Found with " + phoneNumber + " number");
                        }
                        return [4 /*yield*/, this.bcryptService.compareHash(password, user.password)];
                    case 2:
                        isPasswordValid = _a.sent();
                        if (isPasswordValid === false) {
                            throw new routing_controllers_1.NotFoundError("Password Not matched");
                        }
                        return [4 /*yield*/, this.jwtService.makeAccessToken({ id: user.id })];
                    case 3:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token,
                            }];
                }
            });
        });
    };
    AuthLoginService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository,
            jwt_service_1.JWTService,
            byript_service_1.BcryptService])
    ], AuthLoginService);
    return AuthLoginService;
}());
exports.AuthLoginService = AuthLoginService;
//# sourceMappingURL=auth-login.service.js.map