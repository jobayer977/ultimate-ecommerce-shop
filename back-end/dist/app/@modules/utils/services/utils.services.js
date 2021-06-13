"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
var tslib_1 = require("tslib");
var fs = require("fs");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var cloudinary = require("cloudinary").v2;
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.uploadFile = function (file) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var acceptableFileTypes, name, filePath, cFile;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acceptableFileTypes = ["image/png", "image/jpeg"];
                        name = new Date().getTime() + "." + file.mimetype.replace("image/", "");
                        filePath = "./uploads/" + name;
                        if (!acceptableFileTypes.includes(file.mimetype)) return [3 /*break*/, 2];
                        fs.writeFile(filePath, file.buffer, function (err) { });
                        return [4 /*yield*/, cloudinary.uploader.upload(filePath, function (error, result) { })];
                    case 1:
                        cFile = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.successPlaceholder("Image Uploaded", {
                                link: cFile === null || cFile === void 0 ? void 0 : cFile.url,
                            })];
                    case 2: throw new routing_controllers_1.NotAcceptableError("Invalid file type. Acceptable File type " + acceptableFileTypes.toString());
                }
            });
        });
    };
    UtilsService = tslib_1.__decorate([
        typedi_1.Service()
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.services.js.map