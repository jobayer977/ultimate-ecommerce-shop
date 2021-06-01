"use strict";
exports.__esModule = true;
exports.AuthCredentialDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var AuthCredentialDto = /** @class */ (function () {
    function AuthCredentialDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty()
    ], AuthCredentialDto.prototype, "phoneNumber");
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty()
    ], AuthCredentialDto.prototype, "password");
    return AuthCredentialDto;
}());
exports.AuthCredentialDto = AuthCredentialDto;
