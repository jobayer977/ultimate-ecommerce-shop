"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProduct = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../../../@base/entities/base.entity");
var order_entity_1 = require("./order.entity");
var product_entity_1 = require("./product.entity");
var OrderProduct = /** @class */ (function (_super) {
    tslib_1.__extends(OrderProduct, _super);
    function OrderProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true, type: "float" }),
        tslib_1.__metadata("design:type", Object)
    ], OrderProduct.prototype, "mrp", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", Number)
    ], OrderProduct.prototype, "quantity", void 0);
    tslib_1.__decorate([
        typeorm_1.Column({ nullable: true }),
        tslib_1.__metadata("design:type", String)
    ], OrderProduct.prototype, "name", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return order_entity_1.Order; }, function (order) { return order; }, {
            onDelete: "CASCADE",
        }),
        tslib_1.__metadata("design:type", order_entity_1.Order)
    ], OrderProduct.prototype, "order", void 0);
    tslib_1.__decorate([
        typeorm_1.ManyToOne(function (type) { return product_entity_1.ProductEntity; }, {
            onDelete: "CASCADE",
        }),
        tslib_1.__metadata("design:type", product_entity_1.ProductEntity)
    ], OrderProduct.prototype, "product", void 0);
    OrderProduct = tslib_1.__decorate([
        typeorm_1.Entity("order_products")
    ], OrderProduct);
    return OrderProduct;
}(base_entity_1.BaseEntity));
exports.OrderProduct = OrderProduct;
//# sourceMappingURL=order-products.entity.js.map