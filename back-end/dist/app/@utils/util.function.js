"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOtpCode = void 0;
function generateOtpCode() {
    return "xxxxx".replace(/[xy]/g, function (char) {
        var randomNumber = (Math.random() * 8) | 0;
        var value = char == "x" ? randomNumber : (randomNumber & 0x3) | 0x8;
        return value.toString(8).toUpperCase();
    });
}
exports.generateOtpCode = generateOtpCode;
//# sourceMappingURL=util.function.js.map