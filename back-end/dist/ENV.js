"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = exports.ENV = void 0;
var path = require("path");
var dotenv_1 = require("dotenv");
var endRes = dotenv_1.config({
    path: path.join(process.cwd() + "/src/" + (process.env.NODE_ENV || "development") + ".env"),
});
console.log(endRes);
exports.ENV = {
    port: process.env.PORT,
    API_PREFIX: process.env.API_PREFIX,
    API_TITLE: process.env.API_TITLE,
    API_DESC: process.env.API_DESC,
    API_VERSION: process.env.API_VERSION,
    API_DOCS_URL: "/api/v1/" + "docs",
    jwtSecret: process.env.JWTSecret,
    slatRound: process.env.saltRound,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_SECURE: process.env.MAIL_SECURE,
    MAIL_USER: process.env.MAIL_USER,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_FROM: process.env.MAIL_FROM,
};
exports.ormConfig = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE,
    logging: process.env.DB_LOGGING,
    entities: [__dirname + "/app/@modules/**/**/*.entity{.ts,.js}"],
};
//# sourceMappingURL=ENV.js.map