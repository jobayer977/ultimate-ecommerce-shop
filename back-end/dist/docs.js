"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spec = void 0;
require("reflect-metadata");
var auth_change_passwordcontroller_1 = require("./app/@modules/auth/controllers/auth-change-passwordcontroller");
var auth_login_controller_1 = require("./app/@modules/auth/controllers/auth-login.controller");
var auth_register_controller_1 = require("./app/@modules/auth/controllers/auth-register.controller");
var banner_controller_1 = require("./app/@modules/ecommarce/controllers/banner.controller");
var brand_controller_1 = require("./app/@modules/ecommarce/controllers/brand.controller");
var category_controller_1 = require("./app/@modules/ecommarce/controllers/category.controller");
var department_controller_1 = require("./app/@modules/ecommarce/controllers/department.controller");
var ENV_1 = require("./ENV");
var product_controller_1 = require("./app/@modules/ecommarce/controllers/product.controller");
var user_controller_1 = require("./app/@modules/user/controllers/user.controller");
var user_info_controller_1 = require("./app/@modules/user/controllers/user-info.controller");
var routing_controllers_1 = require("routing-controllers");
var routing_controllers_openapi_1 = require("routing-controllers-openapi");
var class_validator_jsonschema_1 = require("class-validator-jsonschema");
var defaultMetadataStorage = require("class-transformer/cjs/storage").defaultMetadataStorage;
//* DOCS
var schemas = class_validator_jsonschema_1.validationMetadatasToSchemas({
    classTransformerMetadataStorage: defaultMetadataStorage,
    refPointerPrefix: "#/components/schemas/",
});
var storage = routing_controllers_1.getMetadataArgsStorage();
var _controllers = [
    auth_login_controller_1.AuthLoginController,
    auth_register_controller_1.AuthRegisterController,
    auth_change_passwordcontroller_1.AuthChangePasswordController,
    user_controller_1.UserController,
    department_controller_1.DepartmentController,
    category_controller_1.CategoryController,
    brand_controller_1.BrandController,
    banner_controller_1.BannerController,
    product_controller_1.ProductController,
    user_info_controller_1.UserInfoController,
];
exports.spec = routing_controllers_openapi_1.routingControllersToSpec(storage, {
    controllers: _controllers,
    routePrefix: ENV_1.ENV.API_PREFIX,
}, {
    components: {
        schemas: schemas,
        securitySchemes: {
            basicAuth: {
                scheme: "basic",
                type: "http",
            },
        },
    },
    info: {
        description: ENV_1.ENV.API_DESC,
        title: ENV_1.ENV.API_TITLE,
        version: ENV_1.ENV.API_TITLE,
    },
});
// let i = true
// if (i === true) {
// 	fs.writeFileSync("ishopApi.json", JSON.stringify(spec))
// 	i = false
// }
//# sourceMappingURL=docs.js.map