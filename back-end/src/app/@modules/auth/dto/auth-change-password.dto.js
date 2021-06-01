"use strict";
exports.__esModule = true;
exports.AuthChangePasswordDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var AuthChangePasswordDto = /** @class */ (function () {
    function AuthChangePasswordDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty()
    ], AuthChangePasswordDto.prototype, "id");
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty()
    ], AuthChangePasswordDto.prototype, "oldPassword");
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty()
    ], AuthChangePasswordDto.prototype, "newPassword");
    return AuthChangePasswordDto;
}());
exports.AuthChangePasswordDto = AuthChangePasswordDto;
