"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_settings_MailSettings_js"],{

/***/ "./resources/pos/src/components/header/HeaderTitle.js"
/*!************************************************************!*\
  !*** ./resources/pos/src/components/header/HeaderTitle.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var HeaderTitle = function HeaderTitle(props) {
  var title = props.title,
    to = props.to,
    editLink = props.editLink;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "d-md-flex align-items-center justify-content-between mb-5",
    children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
      className: "mb-0",
      children: title
    }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "text-end mt-4 mt-md-0",
      children: [editLink ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: editLink,
        className: "btn btn-outline-primary me-2",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('globally.edit-btn')
      }) : null, to ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: to,
        className: "btn btn-outline-primary",
        children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('globally.back-btn')
      }) : null]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTitle);

/***/ },

/***/ "./resources/pos/src/components/settings/MailSettings.js"
/*!***************************************************************!*\
  !*** ./resources/pos/src/components/settings/MailSettings.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Form.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/tab-title/TabTitle */ "./resources/pos/src/shared/tab-title/TabTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var _shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/loaders/Spinner */ "./resources/pos/src/shared/components/loaders/Spinner.js");
/* harmony import */ var _store_action_mailSettingsAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/action/mailSettingsAction */ "./resources/pos/src/store/action/mailSettingsAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }











var MailSettings = function MailSettings(props) {
  var fetchMailSettings = props.fetchMailSettings,
    editMailSettings = props.editMailSettings,
    isLoading = props.isLoading,
    mailSettingsData = props.mailSettingsData;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      mail_mailer: '',
      mail_host: '',
      mail_port: '',
      sender_name: '',
      mail_username: '',
      mail_password: "",
      mail_encryption: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    mailValue = _useState2[0],
    setMailValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      mail_mailer: '',
      mail_host: '',
      mail_port: '',
      sender_name: '',
      mail_username: '',
      mail_password: "",
      mail_encryption: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    disable = _React$useState2[0],
    setDisable = _React$useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchMailSettings();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mailSettingsData) {
      setMailValue({
        mail_mailer: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_mailer) === "null" ? "" : mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_mailer : '',
        mail_host: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_host) === "null" ? "" : mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_host : '',
        mail_port: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_port) === "null" ? "" : mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_port : '',
        sender_name: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_from_address) === "null" ? "" : mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_from_address : '',
        mail_username: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_username) === "null" ? "" : mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_username : '',
        mail_password: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_password) === "null" ? "" : mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_password : '',
        mail_encryption: mailSettingsData ? (mailSettingsData === null || mailSettingsData === void 0 ? void 0 : mailSettingsData.mail_encryption) === "null" ? "" : mailSettingsData.mail_encryption : ""
      });
    }
  }, [mailSettingsData]);
  var onChangeInput = function onChangeInput(event) {
    event.preventDefault();
    setDisable(false);
    setMailValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, event.target.name, event.target.value));
    });
    setErrors('');
  };
  var prepareFormData = function prepareFormData(data) {
    var formData = new FormData();
    formData.append('mail_mailer', data.mail_mailer);
    formData.append('mail_host', data.mail_host);
    formData.append('mail_port', data.mail_port);
    formData.append('mail_from_address', data.sender_name);
    formData.append('mail_username', data.mail_username);
    formData.append('mail_password', data.mail_password);
    formData.append('mail_encryption', data.mail_encryption);
    return formData;
  };
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    if (!mailValue['mail_mailer']) {
      errorss['mail_mailer'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else if (!mailValue['mail_host']) {
      errorss['mail_host'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else if (!mailValue['mail_port']) {
      errorss['mail_port'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else if (!mailValue['sender_name']) {
      errorss['sender_name'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else if (!mailValue['mail_username']) {
      errorss['mail_username'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else if (!mailValue['mail_password']) {
      errorss['mail_password'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else if (!mailValue['mail_encryption']) {
      errorss['mail_encryption'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.require-input.validate.label");
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onEdit = function onEdit(event) {
    event.preventDefault();
    var valid = handleValidation();
    if (valid) {
      editMailSettings(prepareFormData(mailValue));
      setDisable(true);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.placeholderText)("mail-settings.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("mail-settings.title")
    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("setting.mail-mailer.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
                  type: "text",
                  className: "form-control",
                  placeholder: "MAIL_MAILER",
                  name: "mail_mailer",
                  onChange: onChangeInput,
                  value: mailValue.mail_mailer
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['mail_mailer'] ? errors['mail_mailer'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("setting.mail-host.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "MAIL_HOST",
                  name: "mail_host",
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  },
                  value: mailValue.mail_host
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['mail_host'] ? errors['mail_host'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("setting.mail-port.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
                  type: "text",
                  className: "form-control",
                  placeholder: "MAIL_PORT",
                  name: "mail_port",
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  },
                  value: mailValue.mail_port
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['mail_port'] ? errors['mail_port'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("mail-settings.sender-name.title"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.placeholderText)("mail-settings.sender-name.title"),
                  name: "sender_name",
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  },
                  value: mailValue.sender_name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['sender_name'] ? errors['sender_name'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("setting.mail-user-name.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "MAIL_USERNAME",
                  name: "mail_username",
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  },
                  value: mailValue.mail_username
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['mail_username'] ? errors['mail_username'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("setting.mail-password.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "MAIL_PASSWORD",
                  name: "mail_password",
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  },
                  value: mailValue.mail_password
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['mail_password'] ? errors['mail_password'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("setting.mail-encryption.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: "MAIL_ENCRYPTION",
                  name: "mail_encryption",
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  },
                  value: mailValue.mail_encryption
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['mail_encryption'] ? errors['mail_encryption'] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
                  disabled: disable,
                  className: "btn btn-primary",
                  onClick: function onClick(event) {
                    return onEdit(event);
                  },
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("globally.save-btn")
                })
              })]
            })
          })
        })
      })
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var isLoading = state.isLoading,
    mailSettingsData = state.mailSettingsData;
  return {
    isLoading: isLoading,
    mailSettingsData: mailSettingsData
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchMailSettings: _store_action_mailSettingsAction__WEBPACK_IMPORTED_MODULE_9__.fetchMailSettings,
  editMailSettings: _store_action_mailSettingsAction__WEBPACK_IMPORTED_MODULE_9__.editMailSettings
})(MailSettings));

/***/ },

/***/ "./resources/pos/src/shared/components/loaders/Spinner.js"
/*!****************************************************************!*\
  !*** ./resources/pos/src/shared/components/loaders/Spinner.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var Spinner = function Spinner() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "d-flex justify-content-center custom-loading",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "spinner-border",
      role: "status",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        className: "visually-hidden",
        children: "Loading..."
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ },

/***/ "./resources/pos/src/store/action/mailSettingsAction.js"
/*!**************************************************************!*\
  !*** ./resources/pos/src/store/action/mailSettingsAction.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editMailSettings: () => (/* binding */ editMailSettings),
/* harmony export */   fetchMailSettings: () => (/* binding */ fetchMailSettings)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _saveButtonAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./saveButtonAction */ "./resources/pos/src/store/action/saveButtonAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






var fetchMailSettings = function fetchMailSettings() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(true));
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIL_SETTINGS).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.settingActionType.FETCH_MAIL_SETTINGS,
                payload: response.data.data
              });
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_3__.setLoading)(false));
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
var editMailSettings = function editMailSettings(mailSettings) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_4__.setSavingButton)(true));
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIL_SETTINGS_UPDATE, mailSettings).then(function (response) {
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)('mail-settings.success.edit.message')
              }));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.settingActionType.EDIT_MAIL_SETTINGS,
                payload: response.data.data
              });
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_4__.setSavingButton)(false));
            })["catch"](function (error) {
              var _error$response;
              var message = (error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || 'Something went wrong';
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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

/***/ },

/***/ "./resources/pos/src/store/action/saveButtonAction.js"
/*!************************************************************!*\
  !*** ./resources/pos/src/store/action/saveButtonAction.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setSavingButton: () => (/* binding */ setSavingButton)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");

var setSavingButton = function setSavingButton(isSaving) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.SET_SAVING,
    payload: isSaving
  };
};

/***/ }

}]);