"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannersService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var banners_repository_1 = require("../repository/banners.repository");
var BannersService = /** @class */ (function () {
    function BannersService(bannerRepository) {
        this.bannerRepository = bannerRepository;
    }
    BannersService.prototype.create = function (bannerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = responsePlaceholder_util_1.insertDataPlaceholder;
                        return [4 /*yield*/, this.bannerRepository.save(bannerDto)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    case 2:
                        error_1 = _b.sent();
                        throw new routing_controllers_1.NotFoundError(error_1.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Filter
    BannersService.prototype.filter = function (bannerFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.bannerRepository.filter(bannerFilterDto)];
            });
        });
    };
    BannersService.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var banner, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.bannerRepository.findOne(id)];
                    case 1:
                        banner = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(banner)];
                    case 2:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError(error_2.message);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //! Update
    BannersService.prototype.update = function (id, bannerDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var brand, updated, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        brand = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.bannerRepository.save(tslib_1.__assign(tslib_1.__assign({}, brand.data), bannerDto))];
                    case 3:
                        updated = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.updateDataPlaceholder(updated)];
                    case 4:
                        error_3 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //! Delete
    BannersService.prototype.delete = function (id) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var banner, error_4;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findById(id)];
                    case 1:
                        banner = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.bannerRepository.delete((_a = banner.data) === null || _a === void 0 ? void 0 : _a.id)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.deleteDataPlaceholder(banner === null || banner === void 0 ? void 0 : banner.data)];
                    case 4:
                        error_4 = _b.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BannersService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [banners_repository_1.BannersRepository])
    ], BannersService);
    return BannersService;
}());
exports.BannersService = BannersService;
//# sourceMappingURL=banners.service.js.map