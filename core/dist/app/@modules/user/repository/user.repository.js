"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var paginate_util_1 = require("../../../@utils/paginate.util");
var user_entity_1 = require("../entities/user.entity");
var UserRepository = /** @class */ (function (_super) {
    tslib_1.__extends(UserRepository, _super);
    function UserRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRepository.prototype.filter = function (userFilterDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var searchTerm, type, pOption, whereQuery, payload, payload;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTerm = userFilterDto.searchTerm, type = userFilterDto.type;
                        pOption = paginate_util_1.paginationOptions(userFilterDto);
                        whereQuery = {};
                        if (type !== undefined) {
                            whereQuery.type = type;
                        }
                        if (!(String(searchTerm).length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findAndCount({
                                relations: relations,
                                order: {
                                    updatedAt: "DESC",
                                },
                                take: pOption.take,
                                skip: pOption.skip,
                                where: tslib_1.__assign({ phoneNumber: typeorm_1.ILike("%" + searchTerm + "%") }, whereQuery),
                            })];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, paginate_util_1.paginate(userFilterDto, payload)];
                    case 2: return [4 /*yield*/, this.findAndCount({
                            relations: relations,
                            order: {
                                updatedAt: "DESC",
                            },
                            take: pOption.take,
                            skip: pOption.skip,
                            where: whereQuery,
                        })];
                    case 3:
                        payload = _a.sent();
                        return [2 /*return*/, paginate_util_1.paginate(userFilterDto, payload)];
                }
            });
        });
    };
    UserRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(user_entity_1.User)
    ], UserRepository);
    return UserRepository;
}(typeorm_1.Repository));
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map