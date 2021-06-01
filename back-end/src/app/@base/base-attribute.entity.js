"use strict";
exports.__esModule = true;
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
        typeorm_1.Column({ nullable: true, "default": false })
    ], BaseAttributeEntity.prototype, "isFeatured");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, "default": false })
    ], BaseAttributeEntity.prototype, "isActive");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, "default": false })
    ], BaseAttributeEntity.prototype, "isPopular");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, "default": false })
    ], BaseAttributeEntity.prototype, "isHot");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, "default": false })
    ], BaseAttributeEntity.prototype, "isNew");
    return BaseAttributeEntity;
}(base_entity_1.BaseEntity));
exports.BaseAttributeEntity = BaseAttributeEntity;
