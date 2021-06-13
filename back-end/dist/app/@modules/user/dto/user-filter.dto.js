"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFilterDto = void 0;
var tslib_1 = require("tslib");
var class_validator_1 = require("class-validator");
var base_filter_dto_1 = require("../../../@base/dto/base-filter.dto");
var userType_enum_1 = require("../enums/userType.enum");
var UserFilterDto = /** @class */ (function (_super) {
    tslib_1.__extends(UserFilterDto, _super);
    function UserFilterDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    tslib_1.__decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsIn([userType_enum_1.UserTypes.ADMIN, userType_enum_1.UserTypes.CUSTOMER, userType_enum_1.UserTypes.VENDOR]),
        tslib_1.__metadata("design:type", String)
    ], UserFilterDto.prototype, "type", void 0);
    return UserFilterDto;
}(base_filter_dto_1.BaseFilterDto));
exports.UserFilterDto = UserFilterDto;
//# sourceMappingURL=user-filter.dto.js.map