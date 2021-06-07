"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAttributeFilterDto = exports.BaseFilterDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_attribute_dto_1 = require("./base-attribute.dto");
var BaseFilterDto = /** @class */ (function () {
    function BaseFilterDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], BaseFilterDto.prototype, "searchTerm", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], BaseFilterDto.prototype, "page", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], BaseFilterDto.prototype, "take", void 0);
    return BaseFilterDto;
}());
exports.BaseFilterDto = BaseFilterDto;
var BaseAttributeFilterDto = /** @class */ (function (_super) {
    tslib_1.__extends(BaseAttributeFilterDto, _super);
    function BaseAttributeFilterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], BaseAttributeFilterDto.prototype, "searchTerm", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], BaseAttributeFilterDto.prototype, "page", void 0);
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsNumber(),
        tslib_1.__metadata("design:type", Number)
    ], BaseAttributeFilterDto.prototype, "take", void 0);
    return BaseAttributeFilterDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.BaseAttributeFilterDto = BaseAttributeFilterDto;
//# sourceMappingURL=base-filter.dto.js.map