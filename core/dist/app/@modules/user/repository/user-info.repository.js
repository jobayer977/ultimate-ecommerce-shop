"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var user_info_entity_1 = require("../entities/user-info.entity");
var userInfoRepository = /** @class */ (function (_super) {
    tslib_1.__extends(userInfoRepository, _super);
    function userInfoRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    userInfoRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(user_info_entity_1.UserInfo)
    ], userInfoRepository);
    return userInfoRepository;
}(typeorm_1.Repository));
exports.userInfoRepository = userInfoRepository;
//# sourceMappingURL=user-info.repository.js.map