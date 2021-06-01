"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/base.entity");
var class_validator_1 = require("class-validator");
var Customer = /** @class */ (function (_super) {
    tslib_1.__extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "firstName");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "lastName");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, unique: true }),
        class_validator_1.IsEmail()
    ], Customer.prototype, "email");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "password");
    tslib_1.__decorate([
        typeorm_1.Column({ unique: true })
    ], Customer.prototype, "phoneNumber");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "image");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "otp");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "dob");
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true })
    ], Customer.prototype, "gender");
    Customer = tslib_1.__decorate([
        typeorm_1.Entity("customers")
    ], Customer);
    return Customer;
}(base_entity_1.BaseEntity));
exports.Customer = Customer;
