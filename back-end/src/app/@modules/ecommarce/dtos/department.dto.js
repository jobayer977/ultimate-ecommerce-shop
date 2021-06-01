"use strict";
exports.__esModule = true;
exports.DepartmentDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_attribute_dto_1 = require("./../../../@base/base-attribute.dto");
var DepartmentDto = /** @class */ (function (_super) {
    tslib_1.__extends(DepartmentDto, _super);
    function DepartmentDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" })
    ], DepartmentDto.prototype, "name");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" })
    ], DepartmentDto.prototype, "slug");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" })
    ], DepartmentDto.prototype, "image");
    return DepartmentDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.DepartmentDto = DepartmentDto;
