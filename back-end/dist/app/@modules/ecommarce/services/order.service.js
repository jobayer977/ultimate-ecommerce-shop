"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
var tslib_1 = require("tslib");
var routing_controllers_1 = require("routing-controllers");
var typedi_1 = require("typedi");
var typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
var responsePlaceholder_util_1 = require("../../../@utils/responsePlaceholder.util");
var userType_enum_1 = require("../../user/enums/userType.enum");
var order_enums_1 = require("../enums/order.enums");
var util_function_1 = require("./../../../@utils/util.function");
var user_repository_1 = require("./../../user/repository/user.repository");
var order_product_repository_1 = require("./../repository/order-product.repository");
var order_repository_1 = require("./../repository/order.repository");
var product_repository_1 = require("./../repository/product.repository");
var OrderService = /** @class */ (function () {
    function OrderService(userRepository, productRepository, orderRepository, orderProductRepository) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.orderProductRepository = orderProductRepository;
    }
    //!Place order
    OrderService.prototype.placeOrder = function (placeOrderDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user, products, findUser, orderProducts_1, codeGenerate_1, generatedCode, order_1, createdOrder_1, responsePayload, error_1;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = placeOrderDto.user, products = placeOrderDto.products;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this.userRepository.findOne({
                                id: user,
                                type: userType_enum_1.UserTypes.CUSTOMER,
                            })];
                    case 2:
                        findUser = _a.sent();
                        if (!findUser) {
                            throw new routing_controllers_1.NotFoundError("User Not Found");
                        }
                        orderProducts_1 = [];
                        return [4 /*yield*/, util_function_1.asyncForEach(products, function (cartPd) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var orderProduct, isProductExist, updatedStockPayload;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            orderProduct = {};
                                            return [4 /*yield*/, this.productRepository.findOne({
                                                    id: cartPd.id,
                                                })];
                                        case 1:
                                            isProductExist = _a.sent();
                                            if (!(isProductExist && isProductExist.stock > cartPd.quantity)) return [3 /*break*/, 3];
                                            updatedStockPayload = {
                                                stock: isProductExist.stock - cartPd.quantity,
                                            };
                                            orderProduct.name = isProductExist.name;
                                            orderProduct.mrp = isProductExist.mrp;
                                            orderProduct.mrpVat = isProductExist.mrpVat;
                                            orderProduct.quantity = cartPd.quantity;
                                            return [4 /*yield*/, this.productRepository.update({ id: cartPd.id }, updatedStockPayload)];
                                        case 2:
                                            _a.sent();
                                            orderProducts_1.push(orderProduct);
                                            return [3 /*break*/, 4];
                                        case 3: throw new Error(isProductExist.name + " is Stock Out");
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })
                            //generate order code
                        ];
                    case 3:
                        _a.sent();
                        codeGenerate_1 = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var promise;
                            var _this = this;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        promise = new Promise(function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                            var generateOrderCode, isCodeAlreadyExist;
                                            return tslib_1.__generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        generateOrderCode = "FSL" + util_function_1.getRandomString(9);
                                                        return [4 /*yield*/, this.orderRepository.findOne({
                                                                code: generateOrderCode,
                                                            })];
                                                    case 1:
                                                        isCodeAlreadyExist = _a.sent();
                                                        if (isCodeAlreadyExist) {
                                                            resolve(false);
                                                        }
                                                        else {
                                                            resolve(generateOrderCode);
                                                        }
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [4 /*yield*/, promise];
                                    case 1:
                                        if (!((_a.sent()) === false)) return [3 /*break*/, 2];
                                        codeGenerate_1();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, promise];
                                    case 3: return [2 /*return*/, _a.sent()];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, codeGenerate_1()
                            //Insert order in order entity
                        ];
                    case 4:
                        generatedCode = _a.sent();
                        order_1 = {
                            totalSubAmount: 0,
                            totalAmount: 0,
                            totalVat: 0,
                            deliveryCharge: 0,
                            user: user,
                        };
                        order_1.code = generatedCode;
                        order_1.approved = false;
                        return [4 /*yield*/, util_function_1.asyncForEach(orderProducts_1, function (pd) {
                                order_1.totalSubAmount += Number(pd.mrp) * Number(pd.quantity);
                                order_1.totalVat += Number(pd.mrpVat) * Number(pd.quantity);
                            })];
                    case 5:
                        _a.sent();
                        order_1.totalAmount =
                            Number(order_1.totalSubAmount) + Number(order_1.deliveryCharge);
                        return [4 /*yield*/, this.orderRepository.insert(order_1)];
                    case 6:
                        createdOrder_1 = _a.sent();
                        console.log(createdOrder_1);
                        orderProducts_1.map(function (o) {
                            o.order = createdOrder_1.identifiers[0].id;
                        });
                        return [4 /*yield*/, this.orderProductRepository.insert(orderProducts_1)
                            //Send email
                        ];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.orderRepository.findOne(createdOrder_1.generatedMaps[0].id, {
                                relations: ["products"],
                            })];
                    case 8:
                        responsePayload = _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.successPlaceholder("Order Created", responsePayload)];
                    case 9:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    //!Filter
    OrderService.prototype.filter = function (orderFilterDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.orderRepository.filter(orderFilterDto)];
            });
        });
    };
    //! Get one
    OrderService.prototype.findById = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.orderRepository.findOne({ id: id }, { relations: ["products"] })];
                    case 1:
                        data = _a.sent();
                        if (!data) {
                            throw new routing_controllers_1.NotFoundError("Not Found");
                        }
                        return [2 /*return*/, responsePlaceholder_util_1.getSingleDataPlaceholder(data)];
                    case 2:
                        error_2 = _a.sent();
                        throw new routing_controllers_1.NotFoundError("Not Found");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OrderService.prototype.approved = function (approveOrderDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var code, order, payload, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        code = approveOrderDto.code;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.orderRepository.find({ code: code })];
                    case 2:
                        order = _a.sent();
                        if (!order.length) {
                            throw new routing_controllers_1.NotFoundError("Order Not Found");
                        }
                        payload = {
                            approved: true,
                            deliveryStatus: order_enums_1.OrderDeliveryStatus.PENDING,
                        };
                        return [4 /*yield*/, this.orderRepository.update({ code: code }, payload)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, responsePlaceholder_util_1.successPlaceholder("Approved")];
                    case 4:
                        error_3 = _a.sent();
                        throw new Error(error_3.message);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderService = tslib_1.__decorate([
        typedi_1.Service(),
        tslib_1.__param(0, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(1, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(2, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__param(3, typeorm_typedi_extensions_1.InjectRepository()),
        tslib_1.__metadata("design:paramtypes", [user_repository_1.UserRepository,
            product_repository_1.ProductRepository,
            order_repository_1.OrderRepository,
            order_product_repository_1.OrderProductRepository])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map