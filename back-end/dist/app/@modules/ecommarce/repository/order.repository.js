"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var order_entity_1 = require("./../entities/order.entity");
var OrderRepository = /** @class */ (function (_super) {
    tslib_1.__extends(OrderRepository, _super);
    function OrderRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrderRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(order_entity_1.Order)
    ], OrderRepository);
    return OrderRepository;
}(typeorm_1.Repository));
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map