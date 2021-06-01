"use strict";
exports.__esModule = true;
exports.DepartmentEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_attribute_entity_1 = require("./../../../@base/base-attribute.entity");
var DepartmentEntity = /** @class */ (function (_super) {
    tslib_1.__extends(DepartmentEntity, _super);
    function DepartmentEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], DepartmentEntity.prototype, "name");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], DepartmentEntity.prototype, "slug");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], DepartmentEntity.prototype, "image");
    DepartmentEntity = tslib_1.__decorate([
        typeorm_1.Entity("department")
    ], DepartmentEntity);
    return DepartmentEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.DepartmentEntity = DepartmentEntity;
