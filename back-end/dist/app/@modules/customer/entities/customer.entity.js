"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/entities/base.entity");
var class_validator_1 = require("class-validator");
var Customer = /** @class */ (function (_super) {
    tslib_1.__extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "firstName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "lastName", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, unique: true }),
        class_validator_1.IsEmail(),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "email", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "password", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ unique: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "phoneNumber", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "image", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "otp", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "dob", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Customer.prototype, "gender", void 0);
    Customer = tslib_1.__decorate([
        typeorm_1.Entity("customers")
    ], Customer);
    return Customer;
}(base_entity_1.BaseEntity));
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map