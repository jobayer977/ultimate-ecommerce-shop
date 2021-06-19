"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceOrderDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var PlaceOrderDto = /** @class */ (function () {
    function PlaceOrderDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], PlaceOrderDto.prototype, "user", void 0);
    tslib_1.__decorate([
        class_validator_1.ArrayNotEmpty(),
        tslib_1.__metadata("design:type", Array)
    ], PlaceOrderDto.prototype, "products", void 0);
    return PlaceOrderDto;
}());
exports.PlaceOrderDto = PlaceOrderDto;
//# sourceMappingURL=placeorder.dto.js.map