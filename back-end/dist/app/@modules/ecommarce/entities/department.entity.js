"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentEntity.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentEntity.prototype, "slug", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], DepartmentEntity.prototype, "image", void 0);
    DepartmentEntity = tslib_1.__decorate([
        typeorm_1.Entity("department")
    ], DepartmentEntity);
    return DepartmentEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.DepartmentEntity = DepartmentEntity;
//# sourceMappingURL=department.entity.js.map