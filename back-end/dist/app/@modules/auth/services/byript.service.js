"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptService = void 0;
var tslib_1 = require("tslib");
var bcryptjs = require("bcryptjs");
var ENV_1 = require("../../../../ENV");
var typedi_1 = require("typedi");
var BcryptService = /** @class */ (function () {
    function BcryptService() {
    }
    BcryptService.prototype.hashString = function (str) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var salt;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcryptjs.genSalt(Number(ENV_1.ENV.slatRound || 10))];
                    case 1:
                        salt = _a.sent();
                        return [4 /*yield*/, bcryptjs.hash(str, salt)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BcryptService.prototype.compareHash = function (str, hashStr) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcryptjs.compare(str, hashStr)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BcryptService = tslib_1.__decorate([
        typedi_1.Service()
    ], BcryptService);
    return BcryptService;
}());
exports.BcryptService = BcryptService;
//# sourceMappingURL=byript.service.js.map