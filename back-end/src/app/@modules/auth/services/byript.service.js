"use strict";
exports.__esModule = true;
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
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, bcryptjs.hash(str, ENV_1.ENV.slatRound)];
            });
        });
    };
    BcryptService.prototype.compareHash = function (str, hashString) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, bcryptjs.compare(str, hashString)];
            });
        });
    };
    BcryptService = tslib_1.__decorate([
        typedi_1.Service()
    ], BcryptService);
    return BcryptService;
}());
exports.BcryptService = BcryptService;
