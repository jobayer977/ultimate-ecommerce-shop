"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var banner_enums_1 = require("./../enums/banner.enums");
var base_attribute_dto_1 = require("../../../@base/dto/base-attribute.dto");
var BannerDto = /** @class */ (function (_super) {
    tslib_1.__extends(BannerDto, _super);
    function BannerDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], BannerDto.prototype, "image", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], BannerDto.prototype, "title", void 0);
    tslib_1.__decorate([
        class_validator_1.IsString({ message: "$Property is must be string" }),
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        tslib_1.__metadata("design:type", String)
    ], BannerDto.prototype, "url", void 0);
    tslib_1.__decorate([
        class_validator_1.IsNotEmpty({ message: "$Property is Required" }),
        class_validator_1.IsIn([
            banner_enums_1.BannerType.SLIDER_CAMPAIGN,
            banner_enums_1.BannerType.SLIDER_HOMEPAGE,
            banner_enums_1.BannerType.TWO_FIRST,
            banner_enums_1.BannerType.TWO_LAST,
            banner_enums_1.BannerType.THREE_FIRST,
            banner_enums_1.BannerType.THREE_MIDDLE,
            banner_enums_1.BannerType.THREE_LAST,
            banner_enums_1.BannerType.POPUP_BANNER,
            banner_enums_1.BannerType.SHOP_BY_BANNER_SIDEBAR,
            banner_enums_1.BannerType.FULL_BANNER,
        ]),
        tslib_1.__metadata("design:type", String)
    ], BannerDto.prototype, "type", void 0);
    return BannerDto;
}(base_attribute_dto_1.BaseAttributeDto));
exports.BannerDto = BannerDto;
//# sourceMappingURL=banner.dto.js.map