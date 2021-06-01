"use strict";
exports.__esModule = true;
exports.CustomerRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var customer_entity_1 = require("./../entities/customer.entity");
var CustomerRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CustomerRepository, _super);
    function CustomerRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomerRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(customer_entity_1.Customer)
    ], CustomerRepository);
    return CustomerRepository;
}(typeorm_1.Repository));
exports.CustomerRepository = CustomerRepository;
