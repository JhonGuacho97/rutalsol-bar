"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_frontend_components_printModal_PrintData_js"],{

/***/ "./resources/pos/src/frontend/components/printModal/PrintData.js"
/*!***********************************************************************!*\
  !*** ./resources/pos/src/frontend/components/printModal/PrintData.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Table.js");
/* harmony import */ var _shared_SharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/SharedMethod */ "./resources/pos/src/frontend/shared/SharedMethod.js");
/* harmony import */ var _assets_scss_frontend_pdf_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/scss/frontend/pdf.scss */ "./resources/pos/src/assets/scss/frontend/pdf.scss");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var PrintData = /*#__PURE__*/function (_React$PureComponent) {
  function PrintData() {
    _classCallCheck(this, PrintData);
    return _callSuper(this, PrintData, arguments);
  }
  _inherits(PrintData, _React$PureComponent);
  return _createClass(PrintData, [{
    key: "render",
    value: function render() {
      var _paymentPrint$setting, _paymentPrint$setting2, _frontSetting$value, _frontSetting$value2, _frontSetting$value3, _frontSetting$value4, _frontSetting$value5, _paymentPrint$custome, _paymentPrint$custome2;
      var paymentPrint = this.props.updateProducts || {};
      var allConfigData = this.props.allConfigData;
      var paymentType = this.props.paymentType || "Cash";
      var currency = (paymentPrint === null || paymentPrint === void 0 || (_paymentPrint$setting = paymentPrint.settings) === null || _paymentPrint$setting === void 0 || (_paymentPrint$setting = _paymentPrint$setting.attributes) === null || _paymentPrint$setting === void 0 ? void 0 : _paymentPrint$setting.currency_symbol) || "$";
      var products = paymentPrint.products || paymentPrint.sale_items || [];
      var frontSetting = paymentPrint.frontSetting || this.props.frontSetting || {};
      var getNumber = function getNumber(value) {
        var n = Number(value);
        return isNaN(n) ? 0 : n;
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "print-data",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "mt-4 mb-4 text-center",
          children: (paymentPrint === null || paymentPrint === void 0 || (_paymentPrint$setting2 = paymentPrint.settings) === null || _paymentPrint$setting2 === void 0 || (_paymentPrint$setting2 = _paymentPrint$setting2.attributes) === null || _paymentPrint$setting2 === void 0 ? void 0 : _paymentPrint$setting2.show_logo_in_receipt) === "1" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: frontSetting === null || frontSetting === void 0 || (_frontSetting$value = frontSetting.value) === null || _frontSetting$value === void 0 ? void 0 : _frontSetting$value.logo,
            alt: "",
            width: "100px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "mt-2 mb-3 text-center",
          style: {
            fontSize: "22px",
            fontWeight: "600"
          },
          children: (frontSetting === null || frontSetting === void 0 || (_frontSetting$value2 = frontSetting.value) === null || _frontSetting$value2 === void 0 ? void 0 : _frontSetting$value2.company_name) || ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
          className: "product-border",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("react-data-table.date.column.label"), " :"]
            }), " ", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedDate)(new Date(), allConfigData)]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("supplier.table.address.column.title"), " :"]
            }), " ", (frontSetting === null || frontSetting === void 0 || (_frontSetting$value3 = frontSetting.value) === null || _frontSetting$value3 === void 0 ? void 0 : _frontSetting$value3.address) || ""]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.input.email.label"), " :"]
            }), " ", (frontSetting === null || frontSetting === void 0 || (_frontSetting$value4 = frontSetting.value) === null || _frontSetting$value4 === void 0 ? void 0 : _frontSetting$value4.email) || ""]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("pos-sale.detail.Phone.info"), " :"]
            }), " ", (frontSetting === null || frontSetting === void 0 || (_frontSetting$value5 = frontSetting.value) === null || _frontSetting$value5 === void 0 ? void 0 : _frontSetting$value5.phone) || ""]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("dashboard.recentSales.customer.label"), " :"]
            }), " ", (paymentPrint === null || paymentPrint === void 0 || (_paymentPrint$custome = paymentPrint.customer_name) === null || _paymentPrint$custome === void 0 ? void 0 : _paymentPrint$custome.label) || (paymentPrint === null || paymentPrint === void 0 || (_paymentPrint$custome2 = paymentPrint.customer) === null || _paymentPrint$custome2 === void 0 ? void 0 : _paymentPrint$custome2.name) || ""]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
          className: "mt-3",
          children: products.map(function (product, index) {
            var quantity = getNumber(product.quantity);
            var price = getNumber(product.price) || getNumber(product.sale_price) || getNumber(product.net_unit_price);
            var total = quantity * price;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                children: [product.name || product.product_name, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                  children: ["(", product.code || product.product_code, ")"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "product-border",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                    children: [quantity.toFixed(2), " X ", price.toFixed(2)]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, total)
                  })]
                })
              })]
            }, index);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
          className: "mt-3 product-border",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("pos-total-amount.title"), ":"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "ms-auto",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.subTotal))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.detail.order.tax"), ":"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "ms-auto",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.taxTotal))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.detail.discount"), ":"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "ms-auto",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.discount))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.detail.shipping"), ":"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "ms-auto",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.shipping))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "d-flex",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.detail.grand.total"), ":"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "ms-auto",
              children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.grandTotal))
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "mt-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("pos-sale.detail.Paid-bt.title")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                className: "text-center",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("expense.input.amount.label")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("th", {
                className: "text-end",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("pos.change-return.label")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                children: paymentType
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                className: "text-center",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.grandTotal))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("td", {
                className: "text-end",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.currencySymbolHandling)(allConfigData, currency, getNumber(paymentPrint.changeReturn))
              })]
            })
          })]
        }), (paymentPrint === null || paymentPrint === void 0 ? void 0 : paymentPrint.note) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("tr", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("td", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("b", {
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.input.notes.label"), ":"]
                }), " ", paymentPrint.note]
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
          className: "text-center mt-3",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("pos-thank.you-slip.invoice")
        }), (paymentPrint === null || paymentPrint === void 0 ? void 0 : paymentPrint.barcode_url) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
            src: paymentPrint.barcode_url,
            alt: paymentPrint.reference_code,
            height: 25,
            width: 100
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "d-block",
            children: paymentPrint.reference_code
          })]
        })]
      });
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrintData);

/***/ },

/***/ "./resources/pos/src/frontend/shared/SharedMethod.js"
/*!***********************************************************!*\
  !*** ./resources/pos/src/frontend/shared/SharedMethod.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateDiscount: () => (/* binding */ calculateDiscount),
/* harmony export */   calculateProductCost: () => (/* binding */ calculateProductCost),
/* harmony export */   calculateTax: () => (/* binding */ calculateTax)
/* harmony export */ });
//count discount on price
var calculateDiscount = function calculateDiscount(totalCost) {
  if (totalCost.discount_value > 0 && totalCost.discount_type === '2' || totalCost.discount_type === 2) {
    totalCost = +totalCost.net_unit_cost - Number(totalCost.discount_value);
  } else if (totalCost.discount_value > 0 && totalCost.discount_type === '1' || totalCost.discount_type === 1) {
    var percentDiscount = totalCost.discount_type === '1' || totalCost.discount_type === 1 ? parseFloat(totalCost.net_unit_cost).toFixed(2) * Number(totalCost.discount_value) / Number(100) : 0;
    totalCost = +totalCost.net_unit_cost - percentDiscount;
  }
  return totalCost;
};

//count tax on price
var calculateTax = function calculateTax(totalCost, finalCount) {
  if (totalCost.tax_type === '2' || totalCost.tax_type === 2) {
    totalCost = +finalCount;
  } else if (totalCost.tax_type === '1' || totalCost.tax_type === 1) {
    var exclusiveTax = totalCost.tax_type === '1' || totalCost.tax_type === 1 ? parseFloat(finalCount).toFixed(2) * Number(totalCost.tax_value) / Number(100) : 0;
    totalCost = +finalCount + exclusiveTax;
  }
  return totalCost;
};

//cart price updated
var calculateProductCost = function calculateProductCost(product) {
  var finalCount = 0;
  finalCount = calculateDiscount(product);
  finalCount = calculateTax(product, finalCount);
  return +finalCount;
};

/***/ },

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/assets/scss/frontend/pdf.scss"
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/assets/scss/frontend/pdf.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".print-data {\n  margin: 0 !important;\n}\n.print-data table {\n  margin: 0 !important;\n}\n.print-data table tr {\n  margin: 0 !important;\n}\n.print-data table tr th {\n  font-size: 12px !important;\n}\n.print-data table tr td {\n  margin: 0 !important;\n  border: 0;\n  font-size: 14px !important;\n  padding-right: 0;\n  padding-left: 0;\n  padding-bottom: 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./resources/pos/src/assets/scss/frontend/pdf.scss"
/*!*********************************************************!*\
  !*** ./resources/pos/src/assets/scss/frontend/pdf.scss ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_pdf_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./pdf.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[3]!./resources/pos/src/assets/scss/frontend/pdf.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_pdf_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_3_pdf_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ },

/***/ "./node_modules/react-bootstrap-v5/lib/esm/Table.js"
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/Table.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap-v5/lib/esm/ThemeProvider.js");





var Table = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hover = _ref.hover,
      size = _ref.size,
      variant = _ref.variant,
      responsive = _ref.responsive,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);

  var decoratedBsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'table');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, decoratedBsPrefix, variant && decoratedBsPrefix + "-" + variant, size && decoratedBsPrefix + "-" + size, striped && decoratedBsPrefix + "-striped", bordered && decoratedBsPrefix + "-bordered", borderless && decoratedBsPrefix + "-borderless", hover && decoratedBsPrefix + "-hover");
  var table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("table", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    var responsiveClass = decoratedBsPrefix + "-responsive";

    if (typeof responsive === 'string') {
      responsiveClass = responsiveClass + "-" + responsive;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      className: responsiveClass
    }, table);
  }

  return table;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Table);

/***/ }

}]);