"use strict";
exports.__esModule = true;
exports.BaseFilterDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var BaseFilterDto = /** @class */ (function () {
    function BaseFilterDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional()
    ], BaseFilterDto.prototype, "searchTerm");
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber()
    ], BaseFilterDto.prototype, "page");
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber()
    ], BaseFilterDto.prototype, "take");
    return BaseFilterDto;
}());
exports.BaseFilterDto = BaseFilterDto;
