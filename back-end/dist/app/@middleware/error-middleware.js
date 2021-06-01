"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorHandler = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var CustomErrorHandler = /** @class */ (function () {
    function CustomErrorHandler() {
    }
    CustomErrorHandler.prototype.error = function (error, request, response, next) {
        next("");
    };
    CustomErrorHandler = tslib_1.__decorate([
        routing_controllers_1.Middleware({ type: "after" })
    ], CustomErrorHandler);
    return CustomErrorHandler;
}());
exports.CustomErrorHandler = CustomErrorHandler;
//# sourceMappingURL=error-middleware.js.map