"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var tslib_1 = require("tslib");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../entities/user.entity");
var UserRepository = /** @class */ (function (_super) {
    tslib_1.__extends(UserRepository, _super);
    function UserRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserRepository = tslib_1.__decorate([
        typeorm_1.EntityRepository(user_entity_1.User)
    ], UserRepository);
    return UserRepository;
}(typeorm_1.Repository));
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map