"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var order_products_entity_1 = require("./../entities/order-products.entity");
var OrderProductRepository = /** @class */ (function (_super) {
    tslib_1.__extends(OrderProductRepository, _super);
    function OrderProductRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderProductRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(order_products_entity_1.OrderProduct)
    ], OrderProductRepository);
    return OrderProductRepository;
}(typeorm_1.Repository));
exports.OrderProductRepository = OrderProductRepository;
//# sourceMappingURL=order-product.repository.js.map