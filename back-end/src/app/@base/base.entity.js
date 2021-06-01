"use strict";
exports.__esModule = true;
exports.BaseEntity = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
    }
    tslib_1.__decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], BaseEntity.prototype, "id");
    tslib_1.__decorate([
        typeorm_1.CreateDateColumn()
    ], BaseEntity.prototype, "createdAt");
    tslib_1.__decorate([
        typeorm_1.UpdateDateColumn()
    ], BaseEntity.prototype, "updatedAt");
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
