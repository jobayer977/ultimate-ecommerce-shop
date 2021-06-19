"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/entities/base.entity");
var order_enums_1 = require("../enums/order.enums");
var order_products_entity_1 = require("./order-products.entity");
var Order = /** @class */ (function (_super) {
    tslib_1.__extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Order.prototype, "code", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, default: false }),
        tslib_1.__metadata("design:type", Boolean)
    ], Order.prototype, "approved", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "float", default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "totalAmount", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "float", default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "totalSubAmount", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "float", default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "totalVat", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({
            nullable: true,
            default: order_enums_1.OrderDeliveryStatus.UNAPPROVE,
            comment: "PENDING/PROCESSING/SHIPPED/DELIVERED/CANCEL/UNAPPROVE",
        }),
        tslib_1.__metadata("design:type", String)
    ], Order.prototype, "deliveryStatus", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "float", default: 0 }),
        tslib_1.__metadata("design:type", Number)
    ], Order.prototype, "deliveryCharge", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Order.prototype, "billingAddress", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], Order.prototype, "shippingAddress", void 0);
    tslib_1.__decorate([
        typeorm_1.OneToMany(function (type) { return order_products_entity_1.OrderProduct; }, function (orderProduct) { return orderProduct.order; }, {
            onDelete: "CASCADE",
        }),
        tslib_1.__metadata("design:type", Array)
    ], Order.prototype, "products", void 0);
    Order = tslib_1.__decorate([
        typeorm_1.Entity("orders")
    ], Order);
    return Order;
}(base_entity_1.BaseEntity));
exports.Order = Order;
//# sourceMappingURL=order.entity.js.map