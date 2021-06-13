"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerFilterDto = void 0;
var tslib_1 = require("tslib");
var banner_enums_1 = require("../enums/banner.enums");
var base_filter_dto_1 = require("../../../@base/dto/base-filter.dto");
var class_validator_1 = require("class-validator");
var BannerFilterDto = /** @class */ (function (_super) {
    tslib_1.__extends(BannerFilterDto, _super);
    function BannerFilterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        tslib_1.__metadata("design:type", String)
    ], BannerFilterDto.prototype, "type", void 0);
    return BannerFilterDto;
}(base_filter_dto_1.BaseAttributeFilterDto));
exports.BannerFilterDto = BannerFilterDto;
//# sourceMappingURL=bannerFilter.dto.js.map