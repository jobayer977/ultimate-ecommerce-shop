"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannersRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var paginate_util_1 = require("../../../@utils/paginate.util");
var routing_controllers_1 = require("routing-controllers");
var banner_entity_1 = require("./../entities/banner.entity");
var BannersRepository = /** @class */ (function (_super) {
    tslib_1.__extends(BannersRepository, _super);
    function BannersRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BannersRepository.prototype.filter = function (bannerFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var searchTerm, page, type, isFeatured, isActive, isPopular, isHot, isNew, pOption, query, result, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTerm = bannerFilterDto.searchTerm, page = bannerFilterDto.page, type = bannerFilterDto.type, isFeatured = bannerFilterDto.isFeatured, isActive = bannerFilterDto.isActive, isPopular = bannerFilterDto.isPopular, isHot = bannerFilterDto.isHot, isNew = bannerFilterDto.isNew;
                        console.log(bannerFilterDto);
                        pOption = paginate_util_1.paginationOptions(bannerFilterDto);
                        return [4 /*yield*/, this.createQueryBuilder()];
                    case 1:
                        query = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        if (searchTerm) {
                            query.where("title ILIKE :searchTerm", {
                                searchTerm: "%" + searchTerm + "%",
                            });
                        }
                        if (type) {
                            query.andWhere("type = :type", { type: type });
                        }
                        if (isFeatured) {
                            query.andWhere("isFeatured = :isFeatured", {
                                isFeatured: 0,
                            });
                        }
                        if (isActive) {
                            query.andWhere("isActive = :isActive", { isActive: isActive });
                        }
                        if (isPopular) {
                            query.andWhere("isPopular = :isPopular", { isPopular: isPopular });
                        }
                        if (isHot) {
                            query.andWhere("isHot = :isHot", { isHot: isHot });
                        }
                        if (isNew) {
                            query.andWhere("isNew = :isNew", { isNew: isNew });
                        }
                        return [4 /*yield*/, query
                                .take(pOption.take)
                                .skip(pOption.skip)
                                .getManyAndCount()];
                    case 3:
                        result = _a.sent();
                        pOption.page = page;
                        return [2 /*return*/, paginate_util_1.paginate(pOption, result)];
                    case 4:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.BadRequestError(error_1.message);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BannersRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(banner_entity_1.BannerEntity)
    ], BannersRepository);
    return BannersRepository;
}(typeorm_1.Repository));
exports.BannersRepository = BannersRepository;
//# sourceMappingURL=banners.repository.js.map