"use strict";
exports.__esModule = true;
exports.BaseAttributeDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var BaseAttributeDto = /** @class */ (function () {
    function BaseAttributeDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" })
    ], BaseAttributeDto.prototype, "isFeatured");
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" })
    ], BaseAttributeDto.prototype, "isActive");
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" })
    ], BaseAttributeDto.prototype, "isPopular");
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" })
    ], BaseAttributeDto.prototype, "isHot");
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsBoolean({ message: "$Property must be true or false" })
    ], BaseAttributeDto.prototype, "isNew");
    return BaseAttributeDto;
}());
exports.BaseAttributeDto = BaseAttributeDto;
