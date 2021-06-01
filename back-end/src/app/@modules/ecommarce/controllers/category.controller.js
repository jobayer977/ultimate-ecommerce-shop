"use strict";
exports.__esModule = true;
exports.CategoryController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var category_service_1 = require("../services/category.service");
var CategoryController = /** @class */ (function () {
    function CategoryController() {
        this.categoryService = typedi_1["default"].get(category_service_1.CategoryService);
    }
    CategoryController.prototype.create = function (categoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryService.create(categoryDto)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Post(""),
        tslib_1.__param(0, routing_controllers_1.Body())
    ], CategoryController.prototype, "create");
    CategoryController = tslib_1.__decorate([
        routing_controllers_1.JsonController("category")
    ], CategoryController);
    return CategoryController;
}());
exports.CategoryController = CategoryController;
