"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAttributeEntity = void 0;
var tslib_1 = require("tslib");
var base_entity_1 = require("./base.entity");
var typeorm_1 = require("typeorm");
var BaseAttributeEntity = /** @class */ (function (_super) {
    tslib_1.__extends(BaseAttributeEntity, _super);
    function BaseAttributeEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeEntity.prototype, "isFeatured", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeEntity.prototype, "isActive", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeEntity.prototype, "isPopular", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeEntity.prototype, "isHot", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], BaseAttributeEntity.prototype, "isNew", void 0);
    return BaseAttributeEntity;
}(base_entity_1.BaseEntity));
exports.BaseAttributeEntity = BaseAttributeEntity;
//# sourceMappingURL=base-attribute.entity.js.map