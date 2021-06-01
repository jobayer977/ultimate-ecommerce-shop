"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var customer_dto_1 = require("../dto/customer.dto");
var customer_service_1 = require("../services/customer.service");
var CustomerController = /** @class */ (function () {
    function CustomerController() {
        this.customerService = typeorm_typedi_extensions_1.Container.get(customer_service_1.CustomerService);
    }
    CustomerController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.customerService.findById(id)];
            });
        });
    };
    CustomerController.prototype.updateCustomer = function (id, customerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.customerService.updateCustomer(id, customerDto)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CustomerController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.HttpCode(201),
        routing_controllers_1.Put("/:id"),
        routing_controllers_openapi_1.ResponseSchema(customer_dto_1.CustomerDto),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, customer_dto_1.CustomerDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], CustomerController.prototype, "updateCustomer", null);
    CustomerController = tslib_1.__decorate([
        routing_controllers_1.JsonController("customer")
    ], CustomerController);
    return CustomerController;
}());
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map