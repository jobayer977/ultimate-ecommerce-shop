"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_attribute_dto_1 = require("../../../@base/dto/base-attribute.dto");
var BrandDto = /** @class */ (function (_super) {
    tslib_1.__extends(BrandDto, _super);
    function BrandDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], BrandDto.prototype, "name", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], BrandDto.prototype, "image", void 0);
    return BrandDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.BrandDto = BrandDto;
//# sourceMappingURL=brand.dto.js.map