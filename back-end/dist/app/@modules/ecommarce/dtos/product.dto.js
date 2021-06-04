"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_attribute_dto_1 = require("../../../@base/dto/base-attribute.dto");
var ProductDto = /** @class */ (function (_super) {
    tslib_1.__extends(ProductDto, _super);
    function ProductDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "name", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "description", void 0);
    tslib_1.__decorate([
        class_validator_1.IsBoolean({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductDto.prototype, "isAvailable", void 0);
    tslib_1.__decorate([
        class_validator_1.IsBoolean({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductDto.prototype, "isNewArrival", void 0);
    tslib_1.__decorate([
        class_validator_1.IsBoolean({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductDto.prototype, "isTopSelling", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "mrp", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "mrpExclVat", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "mrpInclVat", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "mrpVat", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "productCode", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "productImages", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "specification", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "stock", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "brand", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "category", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], ProductDto.prototype, "department", void 0);
    return ProductDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.ProductDto = ProductDto;
//# sourceMappingURL=product.dto.js.map