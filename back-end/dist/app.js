"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
require("reflect-metadata");
var jwt = require("jsonwebtoken");
var swaggerUiExpress = require("swagger-ui-express");
var routing_controllers_1 = require("routing-controllers");
var ENV_1 = require("./ENV");
var typeorm_1 = require("typeorm");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var customer_entity_1 = require("./app/@modules/customer/entities/customer.entity");
var user_entity_1 = require("./app/@modules/user/entities/user.entity");
var userType_enum_1 = require("./app/@enums/userType.enum");
var dotenv_1 = require("dotenv");
var docs_1 = require("./docs");
var _ = require("lodash");
var process = require("process");
typeorm_1.useContainer(typeorm_typedi_extensions_1.Container);
dotenv_1.config();
//*  Database Connection
var connectDB = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!process.env.DBATABASE_URL) return [3 /*break*/, 2];
                return [4 /*yield*/, typeorm_1.createConnection({
                        type: "postgres",
                        url: "postgres://wenptrva:wbM7upOebqxxBDqT5xZVhBgGcbv2bmJj@queenie.db.elephantsql.com/wenptrva",
                        ssl: {
                            rejectUnauthorized: false,
                        },
                        logging: true,
                        entities: ENV_1.ormConfig.entities,
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2: return [4 /*yield*/, typeorm_1.createConnection(ENV_1.ormConfig)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); };
//* Auth Role Verify
var roleVerify = function (roles, token) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var entityManager, decodedToken, admin, customer;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                entityManager = typeorm_1.getManager();
                decodedToken = jwt.decode(token);
                if (!roles.includes(userType_enum_1.UserType.ADMIN)) return [3 /*break*/, 2];
                return [4 /*yield*/, entityManager.findOne(user_entity_1.User, {
                        id: decodedToken.id,
                    })];
            case 1:
                admin = _a.sent();
                if (_.isEmpty(admin))
                    throw new routing_controllers_1.UnauthorizedError("UnAuthorized Admin ");
                return [2 /*return*/, true];
            case 2:
                if (!roles.includes(userType_enum_1.UserType.CUSTOMER)) return [3 /*break*/, 4];
                return [4 /*yield*/, entityManager.findOne(customer_entity_1.Customer, {
                        id: decodedToken.id,
                    })];
            case 3:
                customer = _a.sent();
                if (_.isEmpty(customer))
                    throw new routing_controllers_1.UnauthorizedError("UnAuthorized Admin ");
                return [2 /*return*/, true];
            case 4: return [2 /*return*/];
        }
    });
}); };
//*  App Initialized
var app = routing_controllers_1.createExpressServer({
    routePrefix: ENV_1.ENV.API_PREFIX,
    development: false,
    controllers: [__dirname + "/app/@modules/**/**/*.controller{.ts,.js}"],
    validation: {
        validationError: { target: false, value: false },
    },
    authorizationChecker: function (action, roles) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var request, token, verifiedUser, error_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    request = action.request;
                    token = request.headers.authorization;
                    if (!token)
                        throw new routing_controllers_1.UnauthorizedError("UnAuthorized Token");
                    token = token.split(" ")[1];
                    verifiedUser = jwt.verify(token, ENV_1.ENV.jwtSecret);
                    if (!verifiedUser) {
                        throw new routing_controllers_1.UnauthorizedError("UnAuthorized User");
                    }
                    //*  Role Verify
                    return [4 /*yield*/, roleVerify(roles, token)]; // Return true or Error exception
                case 1:
                    //*  Role Verify
                    _a.sent(); // Return true or Error exception
                    return [2 /*return*/, true];
                case 2:
                    error_1 = _a.sent();
                    throw new routing_controllers_1.UnauthorizedError("UnAuthorized Auth");
                case 3: return [2 /*return*/];
            }
        });
    }); },
});
//*  Doc
app.use(ENV_1.ENV.API_DOCS_URL, swaggerUiExpress.serve, swaggerUiExpress.setup(docs_1.spec));
//*  Application bootstrap
var PORT = Number(process.env.PORT) || ENV_1.ENV.port || 3000;
(function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, connectDB()];
            case 1:
                _a.sent();
                return [4 /*yield*/, app.listen(PORT, function () {
                        console.log("Server running on http://localhost:" + PORT);
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=app.js.map