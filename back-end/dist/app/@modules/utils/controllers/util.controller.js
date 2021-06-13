"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var util_function_1 = require("./../../../@utils/util.function");
var utils_services_1 = require("./../services/utils.services");
var UtilsController = /** @class */ (function () {
    function UtilsController() {
        this.utilsService = typedi_1.Container.get(utils_services_1.UtilsService);
    }
    UtilsController.prototype.uploadImage = function (file) {
        console.log(file);
        return this.utilsService.uploadFile(file);
    };
    tslib_1.__decorate([
        routing_controllers_1.Post("/uploadImage"),
        tslib_1.__param(0, routing_controllers_1.UploadedFile("image", { options: util_function_1.storageOptions })),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], UtilsController.prototype, "uploadImage", null);
    UtilsController = tslib_1.__decorate([
        routing_controllers_1.Controller("utils")
    ], UtilsController);
    return UtilsController;
}());
exports.UtilsController = UtilsController;
//# sourceMappingURL=util.controller.js.map