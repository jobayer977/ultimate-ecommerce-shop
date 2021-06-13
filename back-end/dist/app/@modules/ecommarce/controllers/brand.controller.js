"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var base_filter_dto_1 = require("../../../@base/dto/base-filter.dto");
var brand_dto_1 = require("../dtos/brand.dto");
var brand_service_1 = require("../services/brand.service");
var BrandController = /** @class */ (function () {
    function BrandController() {
        this.departmentService = typeorm_typedi_extensions_1.Container.get(brand_service_1.BrandService);
    }
    // @Authorized([UserType.ADMIN])
    BrandController.prototype.create = function (brandDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.create(brandDto)];
            });
        });
    };
    BrandController.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.filter(baseFilterDto)];
            });
        });
    };
    BrandController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.findById(id)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    BrandController.prototype.update = function (id, brandDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.update(id, brandDto)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    BrandController.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.delete(id)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Post(""),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [brand_dto_1.BrandDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BrandController.prototype, "create", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [base_filter_dto_1.BaseAttributeFilterDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BrandController.prototype, "filter", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BrandController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.Put("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, brand_dto_1.BrandDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BrandController.prototype, "update", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BrandController.prototype, "delete", null);
    BrandController = tslib_1.__decorate([
        routing_controllers_1.JsonController("brands")
    ], BrandController);
    return BrandController;
}());
exports.BrandController = BrandController;
//# sourceMappingURL=brand.controller.js.map