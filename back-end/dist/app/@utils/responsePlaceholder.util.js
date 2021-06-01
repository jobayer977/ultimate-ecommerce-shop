"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successPlaceholder = exports.errorPlaceholder = exports.deleteDataPlaceholder = exports.updateDataPlaceholder = exports.insertDataPlaceholder = exports.getSingleDataPlaceholder = void 0;
function getSingleDataPlaceholder(payload) {
    var data = {
        message: "Get Single Data Success",
        success: true,
        data: payload ? payload : null,
    };
    return data;
}
exports.getSingleDataPlaceholder = getSingleDataPlaceholder;
function insertDataPlaceholder(payload) {
    var data = {
        message: "Insert Data Success",
        success: true,
        data: payload,
    };
    return data;
}
exports.insertDataPlaceholder = insertDataPlaceholder;
function updateDataPlaceholder(payload) {
    var data = {
        message: "Update Data Success",
        success: true,
        data: payload,
    };
    return data;
}
exports.updateDataPlaceholder = updateDataPlaceholder;
function deleteDataPlaceholder(payload) {
    var data = {
        message: "Delete Data Success",
        success: true,
        data: payload,
    };
    return data;
}
exports.deleteDataPlaceholder = deleteDataPlaceholder;
function errorPlaceholder(error, msg) {
    var data = {
        success: false,
        error: error,
        message: msg,
    };
    return data;
}
exports.errorPlaceholder = errorPlaceholder;
function successPlaceholder(msg, payload) {
    var data = {
        success: true,
        message: msg,
        data: payload,
    };
    return data;
}
exports.successPlaceholder = successPlaceholder;
//# sourceMappingURL=responsePlaceholder.util.js.map