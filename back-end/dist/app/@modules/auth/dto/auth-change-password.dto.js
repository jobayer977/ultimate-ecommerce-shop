"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthChangePasswordDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var AuthChangePasswordDto = /** @class */ (function () {
    function AuthChangePasswordDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        tslib_1.__metadata("design:type", String)
    ], AuthChangePasswordDto.prototype, "id", void 0);
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        tslib_1.__metadata("design:type", String)
    ], AuthChangePasswordDto.prototype, "oldPassword", void 0);
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        tslib_1.__metadata("design:type", String)
    ], AuthChangePasswordDto.prototype, "newPassword", void 0);
    return AuthChangePasswordDto;
}());
exports.AuthChangePasswordDto = AuthChangePasswordDto;
//# sourceMappingURL=auth-change-password.dto.js.map