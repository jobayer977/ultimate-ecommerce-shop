"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_attribute_entity_1 = require("../../../@base/entities/base-attribute.entity");
var department_entity_1 = require("./department.entity");
var product_entity_1 = require("./product.entity");
var CategoryEntity = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryEntity, _super);
    function CategoryEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], CategoryEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], CategoryEntity.prototype, "slug", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], CategoryEntity.prototype, "image", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return department_entity_1.DepartmentEntity; }, function (department) { return department.categories; }),
        tslib_1.__metadata("design:type", Array)
    ], CategoryEntity.prototype, "department", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function () { return product_entity_1.ProductEntity; }, function (product) { return product.category; }),
        tslib_1.__metadata("design:type", Array)
    ], CategoryEntity.prototype, "products", void 0);
    CategoryEntity = tslib_1.__decorate([
        typeorm_1.Entity("category")
    ], CategoryEntity);
    return CategoryEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.CategoryEntity = CategoryEntity;
//# sourceMappingURL=category.entity.js.map