"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var regex_1 = require("../../../@utils/regex");
var userType_enum_1 = require("./../enums/userType.enum");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Matches(regex_1.BD_PHONE_NUMBER_PATTERN, {
            message: "Phone Number Must be Bangladeshi",
        }),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString(),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "password", void 0);
    tslib_1.__decorate([
        class_validator_1.IsIn([userType_enum_1.UserTypes.ADMIN, userType_enum_1.UserTypes.CUSTOMER, userType_enum_1.UserTypes.VENDOR]),
        tslib_1.__metadata("design:type", String)
    ], UserDto.prototype, "type", void 0);
    return UserDto;
}());
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map