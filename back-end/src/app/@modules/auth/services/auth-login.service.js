"use strict";
exports.__esModule = true;
exports.AuthLoginService = void 0;
var tslib_1 = require("tslib");
var _ = require("lodash");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var AuthLoginService = /** @class */ (function () {
    function AuthLoginService(userRepository, customerRepository, jwtService, bcryptService) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.jwtService = jwtService;
        this.bcryptService = bcryptService;
    }
    //! Admin
    AuthLoginService.prototype.admin = function (credential) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user, isPasswordValid, token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = credential.password, phoneNumber = credential.phoneNumber;
                        return [4 /*yield*/, this.userRepository.findOne({ phoneNumber: phoneNumber })
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
                                token: token
                            }];
                }
            });
        });
    };
    //! Customer
    AuthLoginService.prototype.customer = function (credential) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, customer, isPasswordValid, token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = credential.password, phoneNumber = credential.phoneNumber;
                        console.log(credential);
                        return [4 /*yield*/, this.customerRepository.findOne({ phoneNumber: phoneNumber })];
                    case 1:
                        customer = _a.sent();
                        console.log(customer, 9999999999999999999999999999999999999999999999999999999999);
                        //* Verify User
                        if (_.isEmpty(customer)) {
                            throw new routing_controllers_1.NotFoundError("User Not Found with " + phoneNumber + " number");
                        }
                        return [4 /*yield*/, this.bcryptService.compareHash(password, customer.password)];
                    case 2:
                        isPasswordValid = _a.sent();
                        if (isPasswordValid === false) {
                            throw new routing_controllers_1.NotFoundError("Password Not matched");
                        }
                        return [4 /*yield*/, this.jwtService.makeAccessToken({ id: customer.id })];
                    case 3:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token
                            }];
                }
            });
        });
    };
    AuthLoginService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository())
    ], AuthLoginService);
    return AuthLoginService;
}());
exports.AuthLoginService = AuthLoginService;
