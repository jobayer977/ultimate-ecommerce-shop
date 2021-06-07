"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var index_1 = require("../../../@enums/index");
var UserInfoDto = /** @class */ (function () {
    function UserInfoDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "firstName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "lastName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "city", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "country", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "birthDate", void 0);
    tslib_1.__decorate([
        class_validator_1.IsEmail(),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "email", void 0);
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        class_validator_1.IsIn([index_1.Gender.FEMALE, index_1.Gender.MALE]),
        tslib_1.__metadata("design:type", String)
    ], UserInfoDto.prototype, "gender", void 0);
    return UserInfoDto;
}());
exports.UserInfoDto = UserInfoDto;
//# sourceMappingURL=user-info.dto.js.map