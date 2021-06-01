"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var tslib_1 = require("tslib");
require("reflect-metadata");
var routing_controllers_1 = require("routing-controllers");
var BaseController = /** @class */ (function () {
    function BaseController() {
    }
    BaseController.prototype.createBase = function () {
        return "From Base Controller POST ";
    };
    tslib_1.__decorate([
        routing_controllers_1.Post("/base"),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], BaseController.prototype, "createBase", null);
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map