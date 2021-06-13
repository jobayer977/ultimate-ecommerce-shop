"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var department_repository_1 = require("../repository/department.repository");
var DepartmentService = /** @class */ (function () {
    function DepartmentService(departmentRepository) {
        this.departmentRepository = departmentRepository;
    }
    //! Filter
    DepartmentService.prototype.filter = function (baseFilterDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentRepository.filter(baseFilterDto, relations)];
            });
        });
    };
    //!Create
    DepartmentService.prototype.create = function (departmentDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var createdDepartment, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.departmentRepository.save(departmentDto)];
                    case 1:
                        createdDepartment = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.insertDataPlaceholder(createdDepartment)];
                    case 2:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.BadRequestError(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Get one
    DepartmentService.prototype.findById = function (id, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var department, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.departmentRepository.findOne(id, {
                                relations: relations,
                            })];
                    case 1:
                        department = _a.sent();
                        if (!department) {
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(department)];
                    case 2:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Update
    DepartmentService.prototype.update = function (id, departmentDto, relations) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var department, updateDepartment, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findById(id, relations)];
                    case 1:
                        department = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.departmentRepository.save(tslib_1.__assign(tslib_1.__assign({}, department.data), departmentDto))];
                    case 3:
                        updateDepartment = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(updateDepartment)];
                    case 4:
                        error_3 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //! Delete
    DepartmentService.prototype.delete = function (id, relations) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var department, error_4;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findById(id, relations)];
                    case 1:
                        department = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.departmentRepository.delete((_a = department.data) === null || _a === void 0 ? void 0 : _a.id)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.deleteDataPlaceholder(department === null || department === void 0 ? void 0 : department.data)];
                    case 4:
                        error_4 = _b.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    DepartmentService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [department_repository_1.DepartmentRepository])
    ], DepartmentService);
    return DepartmentService;
}());
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map