"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var customer_repository_1 = require("./../repository/customer.repository");
var CustomerService = /** @class */ (function () {
    function CustomerService(customerRepository) {
        this.customerRepository = customerRepository;
    }
    //!Get One
    CustomerService.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var customer, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.customerRepository.findOne({ id: id })];
                    case 1:
                        customer = _a.sent();
                        delete customer.password;
                        if (!customer) {
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(customer)];
                    case 2:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CustomerService.prototype.updateCustomer = function (id, customerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var customer, updated;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customerRepository.findOne({ id: id })];
                    case 1:
                        customer = _a.sent();
                        return [4 /*yield*/, this.customerRepository.save(tslib_1.__assign(tslib_1.__assign({}, customer), customerDto))];
                    case 2:
                        updated = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(updated)];
                }
            });
        });
    };
    CustomerService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [customer_repository_1.CustomerRepository])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map