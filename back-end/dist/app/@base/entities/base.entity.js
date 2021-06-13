"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        tslib_1.__metadata("design:type", String)
    ], BaseEntity.prototype, "id", void 0);
    tslib_1.__decorate([
        typeorm_1.CreateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], BaseEntity.prototype, "createdAt", void 0);
    tslib_1.__decorate([
        typeorm_1.UpdateDateColumn(),
        tslib_1.__metadata("design:type", Date)
    ], BaseEntity.prototype, "updatedAt", void 0);
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=base.entity.js.map