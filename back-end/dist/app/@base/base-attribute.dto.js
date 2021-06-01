"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAttributeDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var BaseAttributeDto = /** @class */ (function () {
    function BaseAttributeDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeDto.prototype, "isFeatured", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeDto.prototype, "isActive", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeDto.prototype, "isPopular", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeDto.prototype, "isHot", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeDto.prototype, "isNew", void 0);
    return BaseAttributeDto;
}());
exports.BaseAttributeDto = BaseAttributeDto;
//# sourceMappingURL=base-attribute.dto.js.map