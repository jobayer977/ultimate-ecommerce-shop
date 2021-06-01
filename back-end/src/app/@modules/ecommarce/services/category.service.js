"use strict";
exports.__esModule = true;
exports.CategoryService = void 0;
var tslib_1 = require("tslib");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var CategoryService = /** @class */ (function () {
    function CategoryService(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    CategoryService.prototype.create = function (categoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, categoryDto];
            });
        });
    };
    CategoryService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository())
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
