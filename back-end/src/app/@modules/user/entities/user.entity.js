"use strict";
exports.__esModule = true;
exports.User = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/base.entity");
var User = /** @class */ (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, unique: true })
    ], User.prototype, "phoneNumber");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "password");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "firstName");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "lastName");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "gender");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], User.prototype, "email");
    User = tslib_1.__decorate([
        typeorm_1.Entity("users")
    ], User);
    return User;
}(base_entity_1.BaseEntity));
exports.User = User;
