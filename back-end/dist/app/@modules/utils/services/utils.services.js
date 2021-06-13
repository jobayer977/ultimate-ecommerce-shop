"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
var tslib_1 = require("tslib");
var fs = require("fs");
var ENV_1 = require("./../../../../ENV");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var UtilsService = /** @class */ (function () {
    function UtilsService() {
    }
    UtilsService.prototype.uploadFile = function (file) {
        var acceptableFileTypes = ["image/png", "image/jpeg"];
        var name = new Date().getTime() + "." + file.mimetype.replace("image/", "");
        var filePath = "./uploads/" + name;
        if (acceptableFileTypes.includes(file.mimetype)) {
            fs.writeFile(filePath, file.buffer, function (err) { });
            return responsePlaceholder_util_1.successPlaceholder("Image Uploaded", {
                link: "" + ENV_1.ENV.UPLOAD_BASE_PUBLIC_PATH + name,
            });
        }
        else {
            throw new routing_controllers_1.NotAcceptableError("Invalid file type. Acceptable File type " + acceptableFileTypes.toString());
        }
    };
    UtilsService = tslib_1.__decorate([
        typedi_1.Service()
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.services.js.map