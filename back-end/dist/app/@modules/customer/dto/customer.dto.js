"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var CustomerDto = /** @class */ (function () {
    function CustomerDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "firstName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "lastName", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsNotEmpty({ message: "$value is Required." }),
        class_validator_1.IsEmail(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "email", void 0);
    tslib_1.__decorate([
        class_validator_1.IsMobilePhone("bn-BD"),
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "image", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "dob", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$value Must be string." }),
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], CustomerDto.prototype, "gender", void 0);
    return CustomerDto;
}());
exports.CustomerDto = CustomerDto;
//# sourceMappingURL=customer.dto.js.map