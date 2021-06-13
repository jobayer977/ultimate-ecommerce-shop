"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageOptions = exports.toBool = exports.generateOtpCode = void 0;
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
//# sourceMappingURL=util.function.js.map