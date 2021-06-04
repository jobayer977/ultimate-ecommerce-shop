"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandsEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_attribute_entity_1 = require("../../../@base/entities/base-attribute.entity");
var product_entity_1 = require("./product.entity");
var BrandsEntity = /** @class */ (function (_super) {
    tslib_1.__extends(BrandsEntity, _super);
    function BrandsEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BrandsEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BrandsEntity.prototype, "slug", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BrandsEntity.prototype, "image", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.brand; }),
        tslib_1.__metadata("design:type", Array)
    ], BrandsEntity.prototype, "products", void 0);
    BrandsEntity = tslib_1.__decorate([
        typeorm_1.Entity("brands")
    ], BrandsEntity);
    return BrandsEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.BrandsEntity = BrandsEntity;
//# sourceMappingURL=brand.entity.js.map