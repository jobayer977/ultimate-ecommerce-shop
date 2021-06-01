"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFilterDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
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
//# sourceMappingURL=base-filter.dto.js.map