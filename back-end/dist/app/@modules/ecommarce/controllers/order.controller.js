"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var placeorder_dto_1 = require("../dtos/placeorder.dto");
var order_service_1 = require("./../services/order.service");
var OrderController = /** @class */ (function () {
    function OrderController() {
        this.orderService = typedi_1.Container.get(order_service_1.OrderService);
    }
    OrderController.prototype.placeOrder = function (placeOrderDto) {
        return this.orderService.placeOrder(placeOrderDto);
    };
    tslib_1.__decorate([
        routing_controllers_1.Post("/placeOrder"),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [placeorder_dto_1.PlaceOrderDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], OrderController.prototype, "placeOrder", null);
    OrderController = tslib_1.__decorate([
        routing_controllers_1.JsonController("order")
    ], OrderController);
    return OrderController;
}());
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map