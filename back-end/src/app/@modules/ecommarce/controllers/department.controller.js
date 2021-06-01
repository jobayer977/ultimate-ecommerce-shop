"use strict";
exports.__esModule = true;
exports.DepartmentController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var userType_enum_1 = require("./../../../@enums/userType.enum");
var department_service_1 = require("./../services/department.service");
var DepartmentController = /** @class */ (function () {
    function DepartmentController() {
        this.departmentService = typeorm_typedi_extensions_1.Container.get(department_service_1.DepartmentService);
    }
    DepartmentController.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.filter(baseFilterDto)];
            });
        });
    };
    DepartmentController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.findById(id)];
            });
        });
    };
    DepartmentController.prototype.create = function (departmentDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.create(departmentDto)];
            });
        });
    };
    DepartmentController.prototype.update = function (id, departmentDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService.update(id, departmentDto)];
            });
        });
    };
    DepartmentController.prototype["delete"] = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.departmentService["delete"](id)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Get("/filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams())
    ], DepartmentController.prototype, "filter");
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id"))
    ], DepartmentController.prototype, "findById");
    tslib_1.__decorate([
        routing_controllers_1.Authorized([userType_enum_1.UserType.ADMIN]),
        routing_controllers_1.Post(""),
        tslib_1.__param(0, routing_controllers_1.Body())
    ], DepartmentController.prototype, "create");
    tslib_1.__decorate([
        routing_controllers_1.Authorized([userType_enum_1.UserType.ADMIN]),
        routing_controllers_1.Put("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Body())
    ], DepartmentController.prototype, "update");
    tslib_1.__decorate([
        routing_controllers_1.Authorized([userType_enum_1.UserType.ADMIN]),
        routing_controllers_1.Delete("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id"))
    ], DepartmentController.prototype, "delete");
    DepartmentController = tslib_1.__decorate([
        routing_controllers_1.JsonController("department")
    ], DepartmentController);
    return DepartmentController;
}());
exports.DepartmentController = DepartmentController;
