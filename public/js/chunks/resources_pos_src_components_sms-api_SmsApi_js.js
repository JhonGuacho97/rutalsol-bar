"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_sms-api_SmsApi_js"],{

/***/ "./resources/pos/src/components/sms-api/SmsApi.js"
/*!********************************************************!*\
  !*** ./resources/pos/src/components/sms-api/SmsApi.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/modelFooter */ "./resources/pos/src/shared/components/modelFooter.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _store_action_SmsApiAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action/SmsApiAction */ "./resources/pos/src/store/action/SmsApiAction.js");
/* harmony import */ var _shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/tab-title/TabTitle */ "./resources/pos/src/shared/tab-title/TabTitle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








var SmsApi = function SmsApi(props) {
  var smsApiData = props.smsApiData,
    fetchSmsApiSetting = props.fetchSmsApiSetting,
    updateSmsApiSetting = props.updateSmsApiSetting;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    disabled = _useState2[0],
    setDisabled = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchSmsApiSetting();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      key: "",
      value: ""
    }]),
    _useState4 = _slicedToArray(_useState3, 2),
    smsValue = _useState4[0],
    setSmsValue = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(smsValue.length !== 1 && smsValue),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (smsApiData.attributes) {
      setSmsValue(smsApiData.attributes);
    }
  }, [smsApiData]);
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    smsValue && smsValue.map(function (sms, i) {
      if (!sms.key || !sms.value) {
        errorss["".concat(i)] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("globally.require-input.validate.label");
      } else {
        isValid = true;
      }
    });
    setErrors(errorss);
    return isValid;
  };
  var prepareFormData = function prepareFormData(data) {
    var formValue = {
      sms_data: smsValue
    };
    return formValue;
  };
  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    var valid = handleValidation();
    var isValid = smsValue.length && smsValue.filter(function (sms) {
      return sms.value === "";
    });
    if (!isValid.length) {
      updateSmsApiSetting(prepareFormData(smsValue));
      setDisabled(true);
    }
  };
  var handleInputChange = function handleInputChange(e, index) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = _toConsumableArray(smsValue);
    list[index][name] = value;
    setSmsValue(list);
    setDisabled(false);
  };
  var handleRemoveClick = function handleRemoveClick(index) {
    setDisabled(false);
    var list = _toConsumableArray(smsValue);
    list.splice(index, 1);
    setSmsValue(list);
  };
  var handleAddClick = function handleAddClick() {
    setSmsValue([].concat(_toConsumableArray(smsValue), [{
      key: "",
      value: ""
    }]));
    setDisabled(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.placeholderText)('sms-api.title')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "col-sm-12 sms_api mb-10",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "rounded-10 sms-api-main",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
              children: "HTTP/URL"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h6", {
              className: "mb-3",
              children: "Note:"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h5", {
              children: "You can use any SMS APIs here, all you need to set up is :"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "URL -  (URL of the SMS API)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "Mobile Key - (Which will be the mobile key, each SMS provider have a different one, some have \"to\", some have \"mobile\", etc)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "Message Key - (Which will be the text message key, each SMS provide have a different one, \"text\" or \"message\", etc)"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "Payload -  which will be a JSON object, where you can enter any params according to the SMS service provider"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("u", {
                children: "Example:"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ol", {
              className: "mb-0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "URL:  https://www.example.com/api/send-message "
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "Mobile Key:  \"to\""
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
                children: ["Message Key: ", " ", "\"message\""]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
                children: "Payload:  {\"data\" : {\"from\":\"InfoSMS\",\"destinations\": { \"to\":\"taken customer number\"},\"text\":\"taken from SMS template\"}}"
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "container overflow-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "row  mb-3 border-bottom align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "col-2"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "col-4 custom-text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "form-label",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("key.lable")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "col-5 custom-text-center ",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("label", {
                className: "form-label",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("key.value.lable")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "col-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                className: "btn btn-primary mb-2",
                onClick: function onClick(e) {
                  return handleAddClick(e);
                },
                children: "+"
              })
            })]
          }), smsValue === null || smsValue === void 0 ? void 0 : smsValue.map(function (item, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "row align-items-center border-bottom mb-3 pb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "col-2 text-end fw-bold",
                children: [i === 0 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("url.lable"), i === 1 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("mobile.key.lable"), i === 2 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("message.key.lable"), i === 3 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)("Payload.key.lable"), i === 0 || i === 1 || i === 2 || i === 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "required"
                }) : null]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "col-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  type: "text",
                  name: "key",
                  placeholder: i === 0 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.placeholderText)('url.lable') || i === 1 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.placeholderText)('mobile.key.lable') || i === 2 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.placeholderText)('message.key.lable') || i === 3 && (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.placeholderText)('Payload.key.lable'),
                  className: "form-control",
                  readOnly: i === 0 || i === 1 || i === 2 || i === 3 ? true : false,
                  onChange: function onChange(e) {
                    return handleInputChange(e, i);
                  },
                  value: item.key
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "col-5 ",
                children: [i === 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("textarea", {
                  name: "value",
                  className: "form-control",
                  type: "text",
                  rows: "5",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.placeholderText)('expense.input.details.placeholder.label'),
                  onChange: function onChange(e) {
                    return handleInputChange(e, i);
                  },
                  value: item.value
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input", {
                  type: "text",
                  name: "value",
                  className: "form-control",
                  onChange: function onChange(e) {
                    return handleInputChange(e, i);
                  },
                  value: item.value
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small",
                  children: errors["".concat(i)] ? errors["".concat(i)] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "col-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
                  className: "btn btn-danger ".concat(i === 0 || i === 1 || i === 2 || i === 3 ? "disabled" : ""),
                  onClick: function onClick() {
                    return handleRemoveClick(i);
                  },
                  children: "-"
                })
              })]
            });
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_3__["default"], {
            onEditRecord: smsApiData,
            onSubmit: onSubmit,
            editDisabled: disabled,
            cancelNotShow: true
          })]
        })]
      })
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var isLoading = state.isLoading,
    smsApiData = state.smsApiData;
  return {
    isLoading: isLoading,
    smsApiData: smsApiData
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchSmsApiSetting: _store_action_SmsApiAction__WEBPACK_IMPORTED_MODULE_5__.fetchSmsApiSetting,
  updateSmsApiSetting: _store_action_SmsApiAction__WEBPACK_IMPORTED_MODULE_5__.updateSmsApiSetting
})(SmsApi));

/***/ },

/***/ "./resources/pos/src/shared/components/modelFooter.js"
/*!************************************************************!*\
  !*** ./resources/pos/src/shared/components/modelFooter.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Modal.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var ModelFooter = function ModelFooter(props) {
  var onEditRecord = props.onEditRecord,
    onSubmit = props.onSubmit,
    editDisabled = props.editDisabled,
    clearField = props.clearField,
    addDisabled = props.addDisabled,
    link = props.link,
    ref = props.ref,
    modelhide = props.modelhide,
    cancelNotShow = props.cancelNotShow;
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
      return state;
    }),
    isSaving = _useSelector.isSaving;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: link ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "d-flex mt-5 justify-content-end",
      children: [onEditRecord ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        onClick: function onClick(event) {
          return onSubmit(event);
        },
        className: "btn btn-primary me-3",
        type: "submit",
        disabled: editDisabled || isSaving,
        ref: ref,
        children: isSaving ? (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("globally-saving-btn-label") : (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("globally.save-btn")
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
        onClick: function onClick(event) {
          return onSubmit(event);
        },
        className: "btn btn-primary me-3",
        type: "submit",
        disabled: addDisabled || isSaving,
        ref: ref,
        children: isSaving ? (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("globally-saving-btn-label") : (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("globally.save-btn")
      }), modelhide ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: link,
        onClick: function onClick() {
          return modelhide(false);
        },
        className: "btn btn-secondary",
        children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("globally.cancel-btn")
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: link,
        className: "btn btn-secondary",
        children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("globally.cancel-btn")
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Footer, _defineProperty({
      children: "justify-content-start",
      className: "pt-0"
    }, "children", [onEditRecord ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      onClick: function onClick(event) {
        return onSubmit(event);
      },
      className: "btn btn-primary me-2",
      type: "submit",
      disabled: editDisabled,
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("globally.save-btn")
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      onClick: function onClick(event) {
        return onSubmit(event);
      },
      className: "btn btn-primary me-2",
      type: "submit",
      disabled: addDisabled,
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.placeholderText)("globally.save-btn")
    }), !cancelNotShow ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      onClick: function onClick() {
        return clearField(false);
      },
      className: "btn btn-secondary",
      children: (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)("globally.cancel-btn")
    }) : null]))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModelFooter);

/***/ },

/***/ "./resources/pos/src/store/action/SmsApiAction.js"
/*!********************************************************!*\
  !*** ./resources/pos/src/store/action/SmsApiAction.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchSmsApiSetting: () => (/* binding */ fetchSmsApiSetting),
/* harmony export */   updateSmsApiSetting: () => (/* binding */ updateSmsApiSetting)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var fetchSmsApiSetting = function fetchSmsApiSetting() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SMS_SETTING).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.smsApiActionType.FETCH_SMS_SETTINGS,
                payload: response.data.data
              });
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var updateSmsApiSetting = function updateSmsApiSetting(smsData) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SMS_SETTING, smsData).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.smsApiActionType.EDIT_SMS_SETTING,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('sms.api.update.success.message'),
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ADD_TOAST
              }));
            })["catch"](function (error) {
              var _error$response;
              var message = (error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Something went wrong';
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }

}]);