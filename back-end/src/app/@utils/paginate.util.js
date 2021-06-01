"use strict";
exports.__esModule = true;
exports.paginationOptions = exports.paginateAll = exports.paginate = void 0;
//! Paginate
function paginate(options, payload) {
    var page = Number(options.page) ? Number(options.page) : 1;
    var take = Number(options.take) ? Number(options.take) : 10;
    var skip = page === 1 ? 0 : (page - 1) * take;
    var data = {
        success: true,
        message: "Get Data Success",
        take: options.take ? Number(options.take) : 10,
        skip: skip,
        page: page,
        total: payload[1],
        data: payload[0]
    };
    return data;
}
exports.paginate = paginate;
//! PaginateAll
function paginateAll(payload) {
    var data = {
        success: true,
        message: "Get Data Success",
        take: "all",
        skip: false,
        page: false,
        total: payload.length,
        data: payload
    };
    return data;
}
exports.paginateAll = paginateAll;
//! PaginationOptions
function paginationOptions(options) {
    var page = Number(options.page) ? Number(options.page) : 1;
    var take = Number(options.take) ? Number(options.take) : 10;
    var skip = page === 1 ? 0 : (page - 1) * take;
    var data = {
        take: take,
        skip: skip
    };
    return data;
}
exports.paginationOptions = paginationOptions;
