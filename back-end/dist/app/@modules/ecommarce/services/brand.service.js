"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var brand_repository_1 = require("./../repository/brand.repository");
var BrandService = /** @class */ (function () {
    function BrandService(brandRepository) {
        this.brandRepository = brandRepository;
    }
    //! Filter
    BrandService.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.brandRepository.filter(baseFilterDto)];
            });
        });
    };
    //!Create
    BrandService.prototype.create = function (brandDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var created, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.brandRepository.save(brandDto)];
                    case 1:
                        created = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.insertDataPlaceholder(created)];
                    case 2:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.BadRequestError(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Get one
    BrandService.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var brand, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.brandRepository.findOne(id, {
                                relations: ["products"],
                            })];
                    case 1:
                        brand = _a.sent();
                        if (!brand) {
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(brand)];
                    case 2:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Update
    BrandService.prototype.update = function (id, brandDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var brand, updated, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        brand = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.brandRepository.save(tslib_1.__assign(tslib_1.__assign({}, brand.data), brandDto))];
                    case 3:
                        updated = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(updated)];
                    case 4:
                        error_3 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //! Delete
    BrandService.prototype.delete = function (id) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var brand, error_4;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        brand = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.brandRepository.delete((_a = brand.data) === null || _a === void 0 ? void 0 : _a.id)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.deleteDataPlaceholder(brand === null || brand === void 0 ? void 0 : brand.data)];
                    case 4:
                        error_4 = _b.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BrandService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [brand_repository_1.BrandRepository])
    ], BrandService);
    return BrandService;
}());
exports.BrandService = BrandService;
//# sourceMappingURL=brand.service.js.map