"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomString = exports.asyncForEach = exports.storageOptions = exports.toBool = exports.generateOtpCode = void 0;
var tslib_1 = require("tslib");
var multer_1 = require("multer");
function generateOtpCode() {
    return "xxxxx".replace(/[xy]/g, function (char) {
        var randomNumber = (Math.random() * 8) | 0;
        var value = char == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;
        return value.toString(8).toUpperCase();
    });
}
exports.generateOtpCode = generateOtpCode;
function toBool(value) {
    return value === "true";
}
exports.toBool = toBool;
exports.storageOptions = multer_1.diskStorage({
    destination: "./uploads",
    filename: function (req, file, callback) {
        callback(null, generateFilename(file));
    },
});
function generateFilename(file) {
    return Date.now() + ".jpg";
}
var asyncForEach = function (data, callBack) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var index;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (!(index < data.length)) return [3 /*break*/, 4];
                return [4 /*yield*/, callBack(data[index], index, data)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                index++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.asyncForEach = asyncForEach;
var getRandomString = function (length) {
    var randomChars = "0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
};
exports.getRandomString = getRandomString;
//# sourceMappingURL=util.function.js.map