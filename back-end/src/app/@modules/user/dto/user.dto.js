"use strict";
exports.__esModule = true;
exports.UserDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], UserDto.prototype, "phoneNumber");
    tslib_1.__decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional()
    ], UserDto.prototype, "password");
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], UserDto.prototype, "firstName");
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], UserDto.prototype, "lastName");
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], UserDto.prototype, "gender");
    tslib_1.__decorate([
        class_validator_1.IsString()
    ], UserDto.prototype, "email");
    return UserDto;
}());
exports.UserDto = UserDto;
