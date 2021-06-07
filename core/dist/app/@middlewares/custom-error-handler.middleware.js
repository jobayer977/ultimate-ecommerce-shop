"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErroHandler = void 0;
var CustomErroHandler = /** @class */ (function () {
    function CustomErroHandler() {
    }
    CustomErroHandler.prototype.error = function (error, request, response, next) {
        next({
            ERROR: error,
            REQUEST: request,
            RESPONSE: response,
        });
    };
    return CustomErroHandler;
}());
exports.CustomErroHandler = CustomErroHandler;
//# sourceMappingURL=custom-error-handler.middleware.js.map