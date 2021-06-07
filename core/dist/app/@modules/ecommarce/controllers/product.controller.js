"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var base_filter_dto_1 = require("../../../@base/dto/base-filter.dto");
var product_dto_1 = require("./../dtos/product.dto");
var product_service_1 = require("./../services/product.service");
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.relations = ["brand", "category", "department"];
        this.productService = typedi_1.Container.get(product_service_1.ProductService);
    }
    ProductController.prototype.create = function (productDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.productService.create(productDto, this.relations)];
            });
        });
    };
    ProductController.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.productService.filter(baseFilterDto, this.relations)];
            });
        });
    };
    ProductController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.productService.findById(id, this.relations)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    ProductController.prototype.update = function (id, productDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.productService.update(id, productDto, this.relations)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    ProductController.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.productService.delete(id, this.relations)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Post(""),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [product_dto_1.ProductDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProductController.prototype, "create", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [base_filter_dto_1.BaseAttributeFilterDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProductController.prototype, "filter", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProductController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.Put("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, product_dto_1.ProductDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProductController.prototype, "update", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], ProductController.prototype, "delete", null);
    ProductController = tslib_1.__decorate([
        routing_controllers_1.JsonController("products")
    ], ProductController);
    return ProductController;
}());
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map