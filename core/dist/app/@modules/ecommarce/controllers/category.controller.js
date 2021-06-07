"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var base_filter_dto_1 = require("../../../@base/dto/base-filter.dto");
var category_service_1 = require("../services/category.service");
var category_dto_1 = require("./../dtos/category.dto");
var CategoryController = /** @class */ (function () {
    function CategoryController() {
        this.categoryService = typedi_1.default.get(category_service_1.CategoryService);
    }
    CategoryController.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.filter(baseFilterDto)];
            });
        });
    };
    CategoryController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.findById(id)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    CategoryController.prototype.create = function (categoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.create(categoryDto)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    CategoryController.prototype.update = function (id, categoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.update(id, categoryDto)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    CategoryController.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.delete(id)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Get("/filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [base_filter_dto_1.BaseAttributeFilterDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CategoryController.prototype, "filter", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CategoryController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.Post(""),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [category_dto_1.CategoryDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CategoryController.prototype, "create", null);
    tslib_1.__decorate([
        routing_controllers_1.Put("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, category_dto_1.CategoryDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CategoryController.prototype, "update", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CategoryController.prototype, "delete", null);
    CategoryController = tslib_1.__decorate([
        routing_controllers_1.JsonController("category")
    ], CategoryController);
    return CategoryController;
}());
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controller.js.map