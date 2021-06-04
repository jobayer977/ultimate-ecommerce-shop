"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_attribute_entity_1 = require("../../../@base/entities/base-attribute.entity");
var brand_entity_1 = require("./brand.entity");
var category_entity_1 = require("./category.entity");
var department_entity_1 = require("./department.entity");
var ProductEntity = /** @class */ (function (_super) {
    tslib_1.__extends(ProductEntity, _super);
    function ProductEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "description", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "boolean" }),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductEntity.prototype, "isAvailable", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "boolean" }),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductEntity.prototype, "isNewArrival", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "boolean" }),
        tslib_1.__metadata("design:type", Boolean)
    ], ProductEntity.prototype, "isTopSelling", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "mrp", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "mrpExclVat", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "mrpInclVat", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "mrpVat", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "productCode", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "productImages", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "specification", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], ProductEntity.prototype, "stock", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return brand_entity_1.BrandsEntity; }, function (brand) { return brand.products; }),
        tslib_1.__metadata("design:type", Array)
    ], ProductEntity.prototype, "brand", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return category_entity_1.CategoryEntity; }, function (category) { return category.products; }),
        tslib_1.__metadata("design:type", Array)
    ], ProductEntity.prototype, "category", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function () { return department_entity_1.DepartmentEntity; }, function (department) { return department.products; }),
        tslib_1.__metadata("design:type", Array)
    ], ProductEntity.prototype, "department", void 0);
    ProductEntity = tslib_1.__decorate([
        typeorm_1.Entity("products")
    ], ProductEntity);
    return ProductEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map