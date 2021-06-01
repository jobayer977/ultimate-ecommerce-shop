"use strict";
exports.__esModule = true;
exports.CustomerDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var CustomerDto = /** @class */ (function () {
    function CustomerDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional()
    ], CustomerDto.prototype, "firstName");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional()
    ], CustomerDto.prototype, "lastName");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsNotEmpty({ message: "$value is Required." }),
        class_validator_1.IsEmail()
    ], CustomerDto.prototype, "email");
    tslib_1.__decorate([
        class_validator_1.IsMobilePhone("bn-BD"),
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional()
    ], CustomerDto.prototype, "phoneNumber");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional()
    ], CustomerDto.prototype, "image");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional()
    ], CustomerDto.prototype, "dob");
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional()
    ], CustomerDto.prototype, "gender");
    return CustomerDto;
}());
exports.CustomerDto = CustomerDto;
