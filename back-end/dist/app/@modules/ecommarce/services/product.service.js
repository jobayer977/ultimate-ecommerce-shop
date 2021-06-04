"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var product_repository_1 = require("./../repository/product.repository");
var ProductService = /** @class */ (function () {
    function ProductService(productRepository) {
        this.productRepository = productRepository;
    }
    ProductService.prototype.create = function (productDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var product, payload, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.productRepository.save(productDto)];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, this.productRepository.findOne(product.id, {
                                relations: relations,
                            })];
                    case 2:
                        payload = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.insertDataPlaceholder(payload)];
                    case 3:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.BadRequestError(error_1.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //! Get one
    ProductService.prototype.findById = function (id, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, payload, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.productRepository.findOne({ id: id })];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, this.productRepository.findOne(data.id, {
                                relations: relations,
                            })];
                    case 2:
                        payload = _a.sent();
                        if (!data) {
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(payload)];
                    case 3:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //! Update
    ProductService.prototype.update = function (id, product, relations) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var updateData, payload, error_3;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.findById(id, relations)];
                    case 1:
                        updateData = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.productRepository.update((_a = updateData === null || updateData === void 0 ? void 0 : updateData.data) === null || _a === void 0 ? void 0 : _a.id, product)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.productRepository.findOne((_b = updateData === null || updateData === void 0 ? void 0 : updateData.data) === null || _b === void 0 ? void 0 : _b.id)];
                    case 4:
                        payload = _c.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(payload)];
                    case 5:
                        error_3 = _c.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    //! Delete
    ProductService.prototype.delete = function (id, relations) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var targetData, error_4;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findById(id, relations)];
                    case 1:
                        targetData = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.productRepository.delete((_a = targetData.data) === null || _a === void 0 ? void 0 : _a.id)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.deleteDataPlaceholder(targetData === null || targetData === void 0 ? void 0 : targetData.data)];
                    case 4:
                        error_4 = _b.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //! Filter
    ProductService.prototype.filter = function (baseFilterDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.productRepository.filter(baseFilterDto, relations)];
            });
        });
    };
    ProductService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [product_repository_1.ProductRepository])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map