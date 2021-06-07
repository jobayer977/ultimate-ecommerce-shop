"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserChangePhoneNumberDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var regex_1 = require("../../../@utils/regex");
var UserChangePhoneNumberDto = /** @class */ (function () {
    function UserChangePhoneNumberDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Matches(regex_1.BD_PHONE_NUMBER_PATTERN, {
            message: "Phone Number Must be Bangladeshi",
        }),
        tslib_1.__metadata("design:type", String)
    ], UserChangePhoneNumberDto.prototype, "oldPhoneNumber", void 0);
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.Matches(regex_1.BD_PHONE_NUMBER_PATTERN, {
            message: "Phone Number Must be Bangladeshi",
        }),
        tslib_1.__metadata("design:type", String)
    ], UserChangePhoneNumberDto.prototype, "newPhoneNumber", void 0);
    return UserChangePhoneNumberDto;
}());
exports.UserChangePhoneNumberDto = UserChangePhoneNumberDto;
//# sourceMappingURL=userChangePhoneNumber.dto.js.map