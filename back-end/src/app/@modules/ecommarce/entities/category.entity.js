"use strict";
exports.__esModule = true;
exports.CategoryEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_attribute_entity_1 = require("./../../../@base/base-attribute.entity");
var CategoryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryEntity, _super);
    function CategoryEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], CategoryEntity.prototype, "name");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], CategoryEntity.prototype, "slug");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], CategoryEntity.prototype, "image");
    CategoryEntity = tslib_1.__decorate([
        typeorm_1.Entity("category")
    ], CategoryEntity);
    return CategoryEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.CategoryEntity = CategoryEntity;
