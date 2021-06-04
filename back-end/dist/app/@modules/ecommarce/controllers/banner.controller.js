"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerController = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var banner_dto_1 = require("./../dtos/banner.dto");
var bannerFilter_dto_1 = require("./../dtos/bannerFilter.dto");
var banners_service_1 = require("./../services/banners.service");
var BannerController = /** @class */ (function () {
    function BannerController() {
        this.bannerService = typedi_1.Container.get(banners_service_1.BannersService);
    }
    BannerController.prototype.create = function (bannerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bannerService.create(bannerDto)];
            });
        });
    };
    BannerController.prototype.filter = function (bannerFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bannerService.filter(bannerFilterDto)];
            });
        });
    };
    BannerController.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bannerService.findById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    BannerController.prototype.update = function (id, bannerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bannerService.update(id, bannerDto)];
            });
        });
    };
    // @Authorized([UserType.ADMIN])
    BannerController.prototype.delete = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bannerService.delete(id)];
            });
        });
    };
    tslib_1.__decorate([
        routing_controllers_1.Post(""),
        tslib_1.__param(0, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [banner_dto_1.BannerDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BannerController.prototype, "create", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/filter"),
        tslib_1.__param(0, routing_controllers_1.QueryParams()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [bannerFilter_dto_1.BannerFilterDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BannerController.prototype, "filter", null);
    tslib_1.__decorate([
        routing_controllers_1.Get("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BannerController.prototype, "findById", null);
    tslib_1.__decorate([
        routing_controllers_1.Put("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")), tslib_1.__param(1, routing_controllers_1.Body()),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String, banner_dto_1.BannerDto]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BannerController.prototype, "update", null);
    tslib_1.__decorate([
        routing_controllers_1.Delete("/:id"),
        tslib_1.__param(0, routing_controllers_1.Param("id")),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", Promise)
    ], BannerController.prototype, "delete", null);
    BannerController = tslib_1.__decorate([
        routing_controllers_1.JsonController("banners")
    ], BannerController);
    return BannerController;
}());
exports.BannerController = BannerController;
//# sourceMappingURL=banner.controller.js.map