"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var orderFilter_dto_1 = require("../dtos/orderFilter.dto");
var placeorder_dto_1 = require("../dtos/placeorder.dto");
var approveOrder_dto_1 = require("./../dtos/approveOrder.dto");
var order_service_1 = require("./../services/order.service");
var OrderController = /** @class */ (function () {
    function OrderController() {
        this.orderService = typedi_1.Container.get(order_service_1.OrderService);
    }
    OrderController.prototype.placeOrder = function (placeOrderDto) {
        return this.orderService.placeOrder(placeOrderDto);
    };
    OrderController.prototype.filter = function (orderFilterDto) {
        return this.orderService.filter(orderFilterDto);
    };
    OrderController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.orderService.findById(id)];
            });
        });
    };
    OrderController.prototype.approved = function (approveOrderDto) {
        return this.orderService.approved(approveOrderDto);
    };
    tslib_1.__decorate([
        routing_controllers_1.Post("placeOrder"),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [placeorder_dto_1.PlaceOrderDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], OrderController.prototype, "placeOrder", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [orderFilter_dto_1.OrderFilterDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], OrderController.prototype, "filter", null);
    tslib_1.__decorate([
        routing_controllers_1.Get(":id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], OrderController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.Post("approveOrder"),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [approveOrder_dto_1.ApproveOrderDto]),
        tslib_1.__metadata("design:returntype", void 0)
    ], OrderController.prototype, "approved", null);
    OrderController = tslib_1.__decorate([
        routing_controllers_1.JsonController("order/")
    ], OrderController);
    return OrderController;
}());
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map