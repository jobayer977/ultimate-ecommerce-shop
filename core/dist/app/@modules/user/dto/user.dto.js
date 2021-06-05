"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "password", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "firstName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "lastName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "gender", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "email", void 0);
    return UserDto;
}());
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map