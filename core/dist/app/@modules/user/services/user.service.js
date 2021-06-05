"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var user_repository_1 = require("./../repository/user.repository");
var UserService = /** @class */ (function () {
    function UserService(userRepository) {
        this.userRepository = userRepository;
    }
    //!Get One
    UserService.prototype.getOne = function (id) {
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
                        return [2 /*return*/, user];
                    case 2:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("User Not Exist");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //!Details
    UserService.prototype.updateOne = function (id, userDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOne(id)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.userRepository.save(tslib_1.__assign(tslib_1.__assign({}, user), userDto))];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(res)];
                }
            });
        });
    };
    UserService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map