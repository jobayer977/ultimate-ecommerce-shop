"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var category_repository_1 = require("../repository/category.repository");
var department_repository_1 = require("./../repository/department.repository");
var CategoryService = /** @class */ (function () {
    function CategoryService(categoryRepository, departmentRepository) {
        this.categoryRepository = categoryRepository;
        this.departmentRepository = departmentRepository;
    }
    //!Create
    CategoryService.prototype.create = function (categoryDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var saveCategory, payload, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.categoryRepository.save(categoryDto)];
                    case 1:
                        saveCategory = _a.sent();
                        return [4 /*yield*/, this.categoryRepository.findOne(saveCategory.id, {
                                relations: ["department"],
                            })];
                    case 2:
                        payload = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.insertDataPlaceholder(payload)];
                    case 3:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.BadRequestError(error_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //! Get one
    CategoryService.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.categoryRepository.findOne({ id: id })];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(data)];
                    case 2:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Update
    CategoryService.prototype.update = function (id, categoryDto) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var category, payload, error_3;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        category = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, , 6]);
                        return [4 /*yield*/, this.categoryRepository.update((_a = category === null || category === void 0 ? void 0 : category.data) === null || _a === void 0 ? void 0 : _a.id, categoryDto)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.categoryRepository.findOne((_b = category === null || category === void 0 ? void 0 : category.data) === null || _b === void 0 ? void 0 : _b.id, {
                                relations: ["department"],
                            })];
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
    CategoryService.prototype.delete = function (id) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var targetData, error_4;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        targetData = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.categoryRepository.delete((_a = targetData.data) === null || _a === void 0 ? void 0 : _a.id)];
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
    CategoryService.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.categoryRepository.filter(baseFilterDto)];
            });
        });
    };
    CategoryService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [category_repository_1.CategoryRepository,
            department_repository_1.DepartmentRepository])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map