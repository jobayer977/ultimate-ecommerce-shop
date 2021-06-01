"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthChangePasswordService = void 0;
var tslib_1 = require("tslib");
var _ = require("lodash");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../../app/@utils/responsePlaceholder.util");
var customer_repository_1 = require("../../customer/repository/customer.repository");
var user_repository_1 = require("./../../user/repository/user.repository");
var byript_service_1 = require("./byript.service");
var AuthChangePasswordService = /** @class */ (function () {
    function AuthChangePasswordService(userRepository, customerRepository, bcryptService) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
        this.bcryptService = bcryptService;
    }
    //! Admin
    AuthChangePasswordService.prototype.admin = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newPassword, id, oldPassword, user, isPasswordValid, newHashPassword;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newPassword = data.newPassword, id = data.id, oldPassword = data.oldPassword;
                        return [4 /*yield*/, this.userRepository.findOne({ id: id })
                            //* Verify
                        ];
                    case 1:
                        user = _a.sent();
                        //* Verify
                        if (_.isEmpty(user)) {
                            throw new routing_controllers_1.NotFoundError("User Not Found ");
                        }
                        return [4 /*yield*/, this.bcryptService.compareHash(oldPassword, user.password)];
                    case 2:
                        isPasswordValid = _a.sent();
                        if (isPasswordValid === false) {
                            throw new routing_controllers_1.NotFoundError("Password Not matched");
                        }
                        return [4 /*yield*/, this.bcryptService.hashString(newPassword)
                            //* Update new Password
                        ];
                    case 3:
                        newHashPassword = _a.sent();
                        //* Update new Password
                        return [4 /*yield*/, this.userRepository.update(id, {
                                password: newHashPassword,
                            })];
                    case 4:
                        //* Update new Password
                        _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.successPlaceholder("Password Change Success")];
                }
            });
        });
    };
    //! Customer
    AuthChangePasswordService.prototype.customer = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var newPassword, id, oldPassword, customer, isPasswordValid, newHashPassword;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newPassword = data.newPassword, id = data.id, oldPassword = data.oldPassword;
                        return [4 /*yield*/, this.customerRepository.findOne({ id: id })
                            //* Verify
                        ];
                    case 1:
                        customer = _a.sent();
                        //* Verify
                        if (_.isEmpty(customer)) {
                            throw new routing_controllers_1.NotFoundError("User Not Found ");
                        }
                        return [4 /*yield*/, this.bcryptService.compareHash(oldPassword, customer.password)];
                    case 2:
                        isPasswordValid = _a.sent();
                        if (isPasswordValid === false) {
                            throw new routing_controllers_1.NotFoundError("Password Not matched");
                        }
                        return [4 /*yield*/, this.bcryptService.hashString(newPassword)
                            //* Update new Password
                        ];
                    case 3:
                        newHashPassword = _a.sent();
                        //* Update new Password
                        return [4 /*yield*/, this.customerRepository.update(id, {
                                password: newHashPassword,
                            })];
                    case 4:
                        //* Update new Password
                        _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.successPlaceholder("Password Change Success")];
                }
            });
        });
    };
    AuthChangePasswordService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository,
            customer_repository_1.CustomerRepository,
            byript_service_1.BcryptService])
    ], AuthChangePasswordService);
    return AuthChangePasswordService;
}());
exports.AuthChangePasswordService = AuthChangePasswordService;
//# sourceMappingURL=auth-change-password.service.js.map