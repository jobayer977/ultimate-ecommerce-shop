"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFilterDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_filter_dto_1 = require("./../../../@base/dto/base-filter.dto");
var OrderFilterDto = /** @class */ (function (_super) {
    tslib_1.__extends(OrderFilterDto, _super);
    function OrderFilterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], OrderFilterDto.prototype, "user", void 0);
    return OrderFilterDto;
}(base_filter_dto_1.BaseFilterDto));
exports.OrderFilterDto = OrderFilterDto;
//# sourceMappingURL=orderFilter.dto.js.map