"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var paginate_util_1 = require("../../../@utils/paginate.util");
var routing_controllers_1 = require("routing-controllers");
var category_entity_1 = require("../entities/category.entity");
var CategoryRepository = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryRepository, _super);
    function CategoryRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryRepository.prototype.filter = function (baseFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var searchTerm, page, pOption, query, result, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchTerm = baseFilterDto.searchTerm, page = baseFilterDto.page;
                        pOption = paginate_util_1.paginationOptions(baseFilterDto);
                        query = this.createQueryBuilder("category").leftJoinAndSelect("category.department", "department");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (searchTerm) {
                            query.where("category.name ILIKE :searchTerm OR category.slug ILIKE :searchTerm", {
                                searchTerm: "%" + searchTerm + "%",
                            });
                        }
                        return [4 /*yield*/, query
                                .take(pOption.take)
                                .skip(pOption.skip)
                                .getManyAndCount()];
                    case 2:
                        result = _a.sent();
                        pOption.page = page;
                        return [2 /*return*/, paginate_util_1.paginate(pOption, result)];
                    case 3:
                        error_1 = _a.sent();
                        throw new routing_controllers_1.BadRequestError(error_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CategoryRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(category_entity_1.CategoryEntity)
    ], CategoryRepository);
    return CategoryRepository;
}(typeorm_1.Repository));
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map