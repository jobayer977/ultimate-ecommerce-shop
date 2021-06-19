"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApproveOrderDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var ApproveOrderDto = /** @class */ (function () {
    function ApproveOrderDto() {
    }
    tslib_1.__decorate([
        class_validator_1.IsString(),
        tslib_1.__metadata("design:type", String)
    ], ApproveOrderDto.prototype, "code", void 0);
    return ApproveOrderDto;
}());
exports.ApproveOrderDto = ApproveOrderDto;
//# sourceMappingURL=approveOrder.dto.js.map