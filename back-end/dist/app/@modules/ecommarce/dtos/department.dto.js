"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_attribute_dto_1 = require("../../../@base/dto/base-attribute.dto");
var DepartmentDto = /** @class */ (function (_super) {
    tslib_1.__extends(DepartmentDto, _super);
    function DepartmentDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentDto.prototype, "name", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], DepartmentDto.prototype, "slug", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentDto.prototype, "image", void 0);
    return DepartmentDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.DepartmentDto = DepartmentDto;
//# sourceMappingURL=department.dto.js.map