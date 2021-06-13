"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var paginate_util_1 = require("../../../@utils/paginate.util");
var product_entity_1 = require("./../entities/product.entity");
var ProductRepository = /** @class */ (function (_super) {
    tslib_1.__extends(ProductRepository, _super);
    function ProductRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductRepository.prototype.filter = function (baseFilterDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var searchTerm, isFeatured, isActive, isHot, isNew, isPopular, pOption, whereQuery, payload, payload;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTerm = baseFilterDto.searchTerm, isFeatured = baseFilterDto.isFeatured, isActive = baseFilterDto.isActive, isHot = baseFilterDto.isHot, isNew = baseFilterDto.isNew, isPopular = baseFilterDto.isPopular;
                        pOption = paginate_util_1.paginationOptions(baseFilterDto);
                        whereQuery = {};
                        if (isFeatured !== undefined) {
                            whereQuery.isFeatured = isFeatured;
                        }
                        if (isActive !== undefined) {
                            whereQuery.isActive = isActive;
                        }
                        if (isHot !== undefined) {
                            whereQuery.isHot = isHot;
                        }
                        if (isNew !== undefined) {
                            whereQuery.isNew = isNew;
                        }
                        if (isPopular !== undefined) {
                            whereQuery.isPopular = isPopular;
                        }
                        if (!(String(searchTerm).length > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findAndCount({
                                relations: relations,
                                order: {
                                    updatedAt: "DESC",
                                },
                                take: pOption.take,
                                skip: pOption.skip,
                                where: tslib_1.__assign({ name: typeorm_1.ILike("%" + searchTerm + "%") }, whereQuery),
                            })];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, paginate_util_1.paginate(baseFilterDto, payload)];
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
                        return [2 /*return*/, paginate_util_1.paginate(baseFilterDto, payload)];
                }
            });
        });
    };
    ProductRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(product_entity_1.ProductEntity)
    ], ProductRepository);
    return ProductRepository;
}(typeorm_1.Repository));
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map