"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfo = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/entities/base.entity");
var index_1 = require("./../../../@enums/index");
var user_entity_1 = require("./user.entity");
var UserInfo = /** @class */ (function (_super) {
    tslib_1.__extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "firstName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "lastName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "city", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "country", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "birthDate", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, unique: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ type: "enum", enum: index_1.Gender, nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], UserInfo.prototype, "gender", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToOne(function () { return user_entity_1.User; }, function (user) { return user.userInfo; }),
        tslib_1.__metadata("design:type", user_entity_1.User)
    ], UserInfo.prototype, "user", void 0);
    UserInfo = tslib_1.__decorate([
        typeorm_1.Entity("userProfile")
    ], UserInfo);
    return UserInfo;
}(base_entity_1.BaseEntity));
exports.UserInfo = UserInfo;
//# sourceMappingURL=user-info.entity.js.map