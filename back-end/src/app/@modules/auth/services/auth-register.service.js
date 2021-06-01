"use strict";
exports.__esModule = true;
exports.AuthRegisterService = void 0;
var tslib_1 = require("tslib");
var _ = require("lodash");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var user_entity_1 = require("../../user/entities/user.entity");
var customer_entity_1 = require("./../../customer/entities/customer.entity");
var AuthRegisterService = /** @class */ (function () {
    function AuthRegisterService(userRepository, customerRepository, jwtService, bcryptService) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.jwtService = jwtService;
        this.bcryptService = bcryptService;
    }
    //! Admin
    AuthRegisterService.prototype.admin = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user_1, hashPassword, newUser, token, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = user.password, phoneNumber = user.phoneNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.userRepository.findOne({ phoneNumber: phoneNumber })
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
                        newUser = new user_entity_1.User();
                        newUser.phoneNumber = phoneNumber;
                        newUser.password = hashPassword;
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.jwtService.makeAccessToken({
                                id: newUser === null || newUser === void 0 ? void 0 : newUser.id
                            })];
                    case 5:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token
                            }];
                    case 6:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("User Already Exist");
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    //! Customer
    AuthRegisterService.prototype.customer = function (user) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var password, phoneNumber, user_2, hashPassword, newCustomer, token, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = user.password, phoneNumber = user.phoneNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.customerRepository.findOne({ phoneNumber: phoneNumber })
                            //* Verify User
                        ];
                    case 2:
                        user_2 = _a.sent();
                        //* Verify User
                        if (_.isEmpty(user_2) === false) {
                            throw new routing_controllers_1.NotFoundError("User Already Exist with " + phoneNumber + " number");
                        }
                        return [4 /*yield*/, this.bcryptService.hashString(password)];
                    case 3:
                        hashPassword = _a.sent();
                        newCustomer = new customer_entity_1.Customer();
                        newCustomer.phoneNumber = phoneNumber;
                        newCustomer.password = hashPassword;
                        return [4 /*yield*/, this.customerRepository.save(newCustomer)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.jwtService.makeAccessToken({
                                id: newCustomer === null || newCustomer === void 0 ? void 0 : newCustomer.id
                            })];
                    case 5:
                        token = _a.sent();
                        return [2 /*return*/, {
                                auth: true,
                                token: token
                            }];
                    case 6:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("User Already Exist");
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthRegisterService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository())
    ], AuthRegisterService);
    return AuthRegisterService;
}());
exports.AuthRegisterService = AuthRegisterService;
