"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var banner_enums_1 = require("../enums/banner.enums");
var base_attribute_entity_1 = require("../../../@base/entities/base-attribute.entity");
var BannerEntity = /** @class */ (function (_super) {
    tslib_1.__extends(BannerEntity, _super);
    function BannerEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BannerEntity.prototype, "image", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BannerEntity.prototype, "title", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], BannerEntity.prototype, "url", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            type: "enum",
            enum: banner_enums_1.BannerType,
            nullable: false,
        }),
        tslib_1.__metadata("design:type", String)
    ], BannerEntity.prototype, "type", void 0);
    BannerEntity = tslib_1.__decorate([
        typeorm_1.Entity("banners")
    ], BannerEntity);
    return BannerEntity;
}(base_attribute_entity_1.BaseAttributeEntity));
exports.BannerEntity = BannerEntity;
//# sourceMappingURL=banner.entity.js.map