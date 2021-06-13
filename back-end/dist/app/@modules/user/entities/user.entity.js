"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/entities/base.entity");
var user_info_entity_1 = require("./user-info.entity");
var userType_enum_1 = require("./../enums/userType.enum");
var User = /** @class */ (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, unique: true }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "password", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "enum", enum: userType_enum_1.UserTypes }),
        tslib_1.__metadata("design:type", String)
    ], User.prototype, "type", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return user_info_entity_1.UserInfo; }, function (userInfo) { return userInfo.user; }),
        typeorm_1.JoinColumn(),
        tslib_1.__metadata("design:type", user_info_entity_1.UserInfo)
    ], User.prototype, "userInfo", void 0);
    User = tslib_1.__decorate([
        typeorm_1.Entity("users")
    ], User);
    return User;
}(base_entity_1.BaseEntity));
exports.User = User;
//# sourceMappingURL=user.entity.js.map