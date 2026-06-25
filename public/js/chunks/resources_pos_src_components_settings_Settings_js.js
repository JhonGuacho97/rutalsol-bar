"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_settings_Settings_js"],{

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

/***/ "./resources/pos/src/components/settings/Settings.js"
/*!***********************************************************!*\
  !*** ./resources/pos/src/components/settings/Settings.js ***!
  \***********************************************************/
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
/* harmony import */ var _store_action_settingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action/settingAction */ "./resources/pos/src/store/action/settingAction.js");
/* harmony import */ var _store_action_currencyAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/action/currencyAction */ "./resources/pos/src/store/action/currencyAction.js");
/* harmony import */ var _store_action_customerAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/action/customerAction */ "./resources/pos/src/store/action/customerAction.js");
/* harmony import */ var _store_action_warehouseAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action/warehouseAction */ "./resources/pos/src/store/action/warehouseAction.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_option_lists_Language_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/option-lists/Language.json */ "./resources/pos/src/shared/option-lists/Language.json");
/* harmony import */ var _shared_option_lists_Sms_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/option-lists/Sms.json */ "./resources/pos/src/shared/option-lists/Sms.json");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var _dateFormatOptions_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dateFormatOptions.json */ "./resources/pos/src/components/settings/dateFormatOptions.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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


















var Settings = function Settings(props) {
  var fetchSetting = props.fetchSetting,
    fetchCacheClear = props.fetchCacheClear,
    fetchCurrencies = props.fetchCurrencies,
    fetchAllCustomer = props.fetchAllCustomer,
    customers = props.customers,
    fetchAllWarehouses = props.fetchAllWarehouses,
    warehouses = props.warehouses,
    editSetting = props.editSetting,
    currencies = props.currencies,
    settings = props.settings,
    fetchState = props.fetchState,
    countryState = props.countryState,
    dateFormat = props.dateFormat,
    defaultCountry = props.defaultCountry;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      currency: "",
      currency_symbol: "",
      email: "",
      logo: "",
      company_name: "",
      phone: "",
      developed: "",
      footer: "",
      default_language: "",
      default_customer: "",
      default_warehouse: "",
      warehouse_name: "",
      address: "",
      dateFormat: "",
      stripe_key: "",
      stripe_secret: "",
      sms_gateway: "",
      twillo_sid: "",
      twillo_token: "",
      twillo_from: "",
      smtp_host: "",
      smtp_port: "",
      smtp_username: "",
      smtp_password: "",
      smtp_Encryption: "",
      show_version_on_footer: "",
      show_logo_in_receipt: "",
      show_app_name_in_sidebar: "",
      country: "",
      countries: "",
      state: "",
      postCode: "",
      date_format: "",
      Currency_icon_Right_side: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    settingValue = _useState2[0],
    setSettingValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    defaultDate = _useState4[0],
    setDefaultDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    imagePreviewUrl = _useState6[0],
    setImagePreviewUrl = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    byDefaultCountry = _useState8[0],
    setByDefaultCountry = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    selectImg = _useState0[0],
    setSelectImg = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      currency: "",
      currency_symbol: "",
      email: "",
      company_name: "",
      phone: "",
      developed: "",
      footer: "",
      default_language: "",
      default_customer: "",
      default_warehouse: "",
      warehouse_name: "",
      address: "",
      stripe_key: "",
      stripe_secret: "",
      sms_gateway: "",
      twillo_sid: "",
      twillo_token: "",
      twillo_from: "",
      smtp_host: "",
      smtp_port: "",
      smtp_username: "",
      smtp_password: "",
      smtp_Encryption: "",
      show_version_on_footer: "",
      show_logo_in_receipt: "",
      show_app_name_in_sidebar: "",
      city: "",
      // postCode: '',
      country: "",
      date_format: "",
      Currency_icon_Right_side: ""
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    errors = _useState10[0],
    setErrors = _useState10[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    disable = _React$useState2[0],
    setDisable = _React$useState2[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    checked = _useState12[0],
    setChecked = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    logoChecked = _useState14[0],
    setLogoChecked = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showAppName = _useState16[0],
    setShowAppName = _useState16[1];
  var newLanguages = _shared_option_lists_Language_json__WEBPACK_IMPORTED_MODULE_11__.filter(function (language) {
    return language.value;
  });
  // const currencies = useSelector((state) => state.currencies)
  // const settings = useSelector((state) => state.settings)
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newLanguages ? [{
      label: newLanguages[0].label,
      value: newLanguages[0].value
    }] : null),
    _useState18 = _slicedToArray(_useState17, 1),
    selectedLanguage = _useState18[0];
  var newSms = _shared_option_lists_Sms_json__WEBPACK_IMPORTED_MODULE_12__.filter(function (item) {
    return item.value;
  });
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newSms ? [{
      label: newSms[0].label,
      value: newSms[0].values
    }] : null),
    _useState20 = _slicedToArray(_useState19, 1),
    selectedSms = _useState20[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchSetting();
    fetchCurrencies();
    fetchAllCustomer();
    fetchAllWarehouses();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (settings) {
      setSettingValue({
        currency: settings.attributes && settings.attributes.currency ? {
          value: Number(settings.attributes.currency),
          label: settings.attributes.currency_symbol
        } : "",
        currency_symbol: settings.attributes && settings.attributes.currency_symbol ? settings.attributes.currency_symbol : "",
        email: settings.attributes && settings.attributes.email ? settings.attributes.email : "",
        logo: settings.attributes && settings.attributes.logo ? settings.attributes.logo : "",
        company_name: settings.attributes && settings.attributes.company_name ? settings.attributes.company_name : "",
        phone: settings.attributes && settings.attributes.phone ? settings.attributes.phone : "",
        developed: settings.attributes && settings.attributes.developed ? settings.attributes.developed : "",
        footer: settings.attributes && settings.attributes.footer ? settings.attributes.footer : "",
        default_language: settings.attributes && settings.attributes.default_language ? settings.attributes.default_language : "",
        default_customer: settings.attributes && settings.attributes.default_customer ? {
          value: Number(settings.attributes.default_customer),
          label: settings.attributes.customer_name
        } : "",
        default_warehouse: settings.attributes && settings.attributes.default_warehouse ? {
          value: Number(settings.attributes.default_warehouse),
          label: settings.attributes.warehouse_name
        } : "",
        warehouse_name: settings.attributes && settings.attributes.warehouse_name ? settings.attributes.warehouse_name : "",
        address: settings.attributes && settings.attributes.address ? settings.attributes.address : "",
        stripe_key: settings.attributes && settings.attributes.stripe_key ? settings.attributes.stripe_key : "",
        stripe_secret: settings.attributes && settings.attributes.stripe_secret ? settings.attributes.stripe_secret : "",
        sms_gateway: settings.attributes && settings.attributes.sms_gateway ? settings.attributes.sms_gateway : "",
        twillo_sid: settings.attributes && settings.attributes.twillo_sid ? settings.attributes.twillo_sid : "",
        twillo_token: settings.attributes && settings.attributes.twillo_token ? settings.attributes.twillo_token : "",
        twillo_from: settings.attributes && settings.attributes.twillo_from ? settings.attributes.twillo_from : "",
        smtp_host: settings.attributes && settings.attributes.smtp_host ? settings.attributes.smtp_host : "",
        smtp_port: settings.attributes && settings.attributes.smtp_port ? settings.attributes.smtp_port : "",
        smtp_username: settings.attributes && settings.attributes.smtp_username ? settings.attributes.smtp_username : "",
        smtp_password: settings.attributes && settings.attributes.smtp_password ? settings.attributes.smtp_password : "",
        smtp_Encryption: settings.attributes && settings.attributes.smtp_Encryption ? settings.attributes.smtp_Encryption : "",
        show_version_on_footer: settings.attributes && settings.attributes.show_version_on_footer !== "1" ? false : true,
        show_logo_in_receipt: settings.attributes && settings.attributes.show_logo_in_receipt !== "1" ? false : true,
        show_app_name_in_sidebar: settings.attributes && settings.attributes.show_app_name_in_sidebar !== "1" ? false : true,
        city: settings.attributes && settings.attributes.city ? settings.attributes.city : "",
        postCode: settings.attributes && settings.attributes.postcode ? settings.attributes.postcode : "",
        countries: settings.attributes && settings.attributes.countries && byDefaultCountry ? {
          value: byDefaultCountry.id,
          label: byDefaultCountry.name
        } : "",
        country: settings.attributes && settings.attributes.country ? {
          value: settings.attributes.country,
          label: settings.attributes.country
        } : "",
        state: settings.attributes && settings.attributes.country ? {
          value: settings.attributes.state,
          label: settings.attributes.state
        } : "",
        date_format: settings.attributes && settings.attributes.date_format && defaultDate ? {
          value: defaultDate.value,
          label: defaultDate.label
        } : "",
        Currency_icon_Right_side: settings.attributes && settings.attributes.is_currency_right !== "true" ? false : true
      });
      if (settings.attributes && settings.attributes.show_version_on_footer === "1") {
        setChecked(true);
      } else {
        setChecked(false);
      }
      if (settings.attributes && settings.attributes.show_logo_in_receipt === "1") {
        setLogoChecked(true);
      } else {
        setLogoChecked(false);
      }
      if (settings.attributes && settings.attributes.show_app_name_in_sidebar === "1") {
        setShowAppName(true);
      } else {
        setShowAppName(false);
      }
    }
  }, [settings, defaultDate]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dateFormat) {
      var defaultDateFormat = dateFormat ? _dateFormatOptions_json__WEBPACK_IMPORTED_MODULE_16__.filter(function (date) {
        return date.value === dateFormat;
      }) : null;
      defaultDateFormat && setDefaultDate(defaultDateFormat[0]);
    }
  }, [dateFormat]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (defaultCountry) {
      var countries = defaultCountry && defaultCountry.countries && defaultCountry.countries.filter(function (country) {
        return country.name === defaultCountry.country;
      });
      countries && setByDefaultCountry(countries[0]);
    }
  }, [defaultCountry]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    byDefaultCountry && fetchState(byDefaultCountry && byDefaultCountry.id);
  }, [byDefaultCountry]);
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    checkState = _useState22[0],
    setCheckState = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    allState = _useState24[0],
    setAllState = _useState24[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (countryState.value) {
      setCheckState(true);
      setAllState(countryState);
    }
  }, [settings, countryState]);
  var stateOptions = checkState && allState && allState.value && allState.value.map(function (item) {
    return {
      id: item,
      name: item
    };
  });
  var onLanguagesChange = function onLanguagesChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        default_language: obj
      });
    });
  };
  var onSmsChange = function onSmsChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        sms_gateway: obj
      });
    });
  };
  var onCurrencyChange = function onCurrencyChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        currency: obj
      });
    });
    setErrors("");
  };
  var onCustomerChange = function onCustomerChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        default_customer: obj
      });
    });
    setErrors("");
  };
  var onWarehouseChange = function onWarehouseChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        default_warehouse: obj
      });
    });
    setErrors("");
  };
  var onCountryChange = function onCountryChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        country: obj
      });
    });
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        state: null
      });
    });
    fetchState(obj.value);
    setErrors("");
  };
  var onStateChange = function onStateChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        state: obj
      });
    });
    setErrors("");
  };
  var handleImageChange = function handleImageChange(e) {
    e.preventDefault();
    setDisable(false);
    if (e.target.files.length > 0) {
      var file = e.target.files[0];
      if (file.type === "image/jpeg" || file.type === "image/png") {
        setSelectImg(file);
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
          setImagePreviewUrl(fileReader.result);
        };
        if (file) {
          fileReader.readAsDataURL(file);
        }
        setErrors("");
      }
    }
  };
  var handleChanged = function handleChanged(event, checkboxType) {
    var checked = event.target.checked;
    setDisable(false);
    if (checkboxType === "version") {
      setChecked(checked);
      setSettingValue(function (settingValue) {
        return _objectSpread(_objectSpread({}, settingValue), {}, {
          show_version_on_footer: checked
        });
      });
    } else if (checkboxType === "logo") {
      setLogoChecked(checked);
      setSettingValue(function (settingValue) {
        return _objectSpread(_objectSpread({}, settingValue), {}, {
          show_logo_in_receipt: checked
        });
      });
    } else if (checkboxType === "appname") {
      setShowAppName(checked);
      setSettingValue(function (settingValue) {
        return _objectSpread(_objectSpread({}, settingValue), {}, {
          show_app_name_in_sidebar: checked
        });
      });
    }
  };

  // checkedCurrency
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    checkedCurrency = _useState26[0],
    setCheckedCurrency = _useState26[1];
  var handleChangedCurrency = function handleChangedCurrency(event) {
    var checked = event.target.checked;
    setDisable(false);
    setCheckedCurrency(checked);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        Currency_icon_Right_side: checked
      });
    });
  };
  var onChangeInput = function onChangeInput(event) {
    event.preventDefault();
    setDisable(false);
    setSettingValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, event.target.name, event.target.value));
    });
    setErrors("");
  };
  var prepareFormData = function prepareFormData(data) {
    var formData = new FormData();
    formData.append("currency", data.currency.value ? data.currency.value : data.currency);
    formData.append("email", data.email);
    if (selectImg) {
      formData.append("logo", data.logo);
    }
    formData.append("company_name", data.company_name);
    formData.append("phone", data.phone);
    formData.append("developed", data.developed);
    formData.append("footer", data.footer);
    if (data.default_language.value) {
      formData.append("default_language", data.default_language.value);
    } else {
      formData.append("default_language", data.default_language);
    }
    formData.append("default_customer", data.default_customer.value ? data.default_customer.value : data.default_customer);
    formData.append("default_warehouse", data.default_warehouse.value ? data.default_warehouse.value : data.default_warehouse);
    formData.append("address", data.address);
    formData.append("stripe_key", data.stripe_key);
    formData.append("stripe_secret", data.stripe_secret);
    formData.append("sms_gateway", data.sms_gateway);
    formData.append("twillo_sid", data.twillo_sid);
    formData.append("twillo_token", data.twillo_token);
    formData.append("twillo_from", data.twillo_from);
    formData.append("smtp_host", data.smtp_host);
    formData.append("smtp_port", data.smtp_port);
    formData.append("smtp_username", data.smtp_username);
    formData.append("smtp_password", data.smtp_password);
    formData.append("smtp_Encryption", data.smtp_Encryption);
    formData.append("show_version_on_footer", data.show_version_on_footer === true ? "1" : "0");
    formData.append("show_logo_in_receipt", data.show_logo_in_receipt === true ? "1" : "0");
    formData.append("show_app_name_in_sidebar", data.show_app_name_in_sidebar === true ? "1" : "0");
    formData.append("city", data.city);
    formData.append("postcode", data.postCode);
    formData.append("country", data.country.label);
    formData.append("state", data.state.label);
    formData.append("date_format", data.date_format.value);
    formData.append("is_currency_right", data.Currency_icon_Right_side);
    return formData;
  };
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    if (!settingValue["currency"]) {
      errorss["currency"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-currency.validate.label");
    } else if (!settingValue["email"]) {
      errorss["email"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("globally.input.email.validate.label");
    } else if (!settingValue["company_name"]) {
      errorss["company_name"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.company-name.validate.label");
    } else if (!settingValue["phone"]) {
      errorss["phone"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.company-phone.validate.label");
    } else if (!settingValue["developed"]) {
      errorss["developed"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.developed-by.validate.label");
    } else if (!settingValue["footer"]) {
      errorss["footer"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.footer.validate.label");
    } else if (!settingValue["default_language"]) {
      errorss["default_language"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-language.validate.label");
    } else if (!settingValue["default_customer"]) {
      errorss["default_customer"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-customer.validate.label");
    } else if (!settingValue["default_warehouse"]) {
      errorss["default_warehouse"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-warehouse.validate.label");
    } else if (!settingValue["address"]) {
      errorss["address"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.address.validate.label");
    } else if (settingValue["address"] && settingValue["address"].length > 150) {
      errorss["address"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.address.valid.validate.label");
    } else if (!settingValue["sms_gateway"]) {
      errorss["sms_gateway"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.sms-configuration.select.sms-gateway.validate.label");
    } else if (!settingValue["twillo_sid"]) {
      errorss["twillo_sid"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.sms-configuration.input.twilio-sid.validate.label");
    } else if (!settingValue["twillo_token"]) {
      errorss["twillo_token"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.sms-configuration.input.twilio-token.validate.label");
    } else if (!settingValue["twillo_from"]) {
      errorss["twillo_from"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.sms-configuration.select.twilio-from.validate.label");
    } else if (!settingValue["smtp_host"]) {
      errorss["smtp_host"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.smtp-configuration.input.host.validate.label");
    } else if (!settingValue["smtp_port"]) {
      errorss["smtp_port"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.smtp-configuration.input.port.validate.label");
    } else if (!settingValue["smtp_username"]) {
      errorss["smtp_username"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.smtp-configuration.input.username.validate.label");
    } else if (!settingValue["smtp_password"]) {
      errorss["smtp_password"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.smtp-configuration.input.password.validate.label");
    } else if (!settingValue["smtp_Encryption"]) {
      errorss["smtp_Encryption"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.smtp-configuration.input.encryption.validate.label");
    } else if (!settingValue["city"]) {
      errorss["city"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.footer.validate.label");
    } else if (!settingValue["postCode"]) {
      errorss["postCode"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.postcode.validate.label");
    }
    // else if (settingValue['postCode'].length > 8) {
    //     errorss['postCode'] = getFormattedMessage("settings.system-settings.select.postcode.validate.length.label");
    // }
    else if (!settingValue["country"]) {
      errorss["country"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.country.validate.label");
    } else if (!settingValue["state"]) {
      errorss["state"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.state.validate.label");
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onEdit = function onEdit(event) {
    event.preventDefault();
    var valid = handleValidation();
    settingValue.logo = selectImg;
    if (valid) {
      editSetting(prepareFormData(settingValue), true, setDefaultDate);
      setDisable(true);
    }
  };
  var onCacheClear = function onCacheClear(event) {
    event.preventDefault();
    fetchCacheClear();
  };
  var onDateFormatChange = function onDateFormatChange(obj) {
    setDisable(false);
    setSettingValue(function (settingValue) {
      return _objectSpread(_objectSpread({}, settingValue), {}, {
        date_format: obj
      });
    });
    setErrors("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_15__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.title")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
          className: "card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  children: settings && settings.attributes && settingValue.currency && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-currency.label"),
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.select.default-currency.placeholder.label"),
                    defaultValue: settings ? settings.attributes && settingValue.currency : "",
                    data: currencies,
                    onChange: onCurrencyChange,
                    errors: errors["currency"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                  className: "mt-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("currency.icon.right.side.lable")
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                    className: "d-flex align-items-center mt-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                      className: "form-check form-switch form-switch-sm",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                        type: "checkbox",
                        checked: settingValue.Currency_icon_Right_side,
                        name: "Currency_icon_Right_side",
                        onChange: function onChange(event) {
                          return handleChangedCurrency(event);
                        },
                        className: "me-3 form-check-input cursor-pointer"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                        className: "control__indicator"
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                      className: "switch-slider",
                      "data-checked": "\u2713",
                      "data-unchecked": "\u2715",
                      children: errors["Currency_icon_Right_side"] ? errors["Currency_icon_Right_side"] : null
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.default-email.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                  type: "email",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.input.default-email.placeholder.label"),
                  name: "email",
                  value: settingValue.email,
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["email"] ? errors["email"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  imageTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("globally.input.change-logo.tooltip"),
                  imagePreviewUrl: imagePreviewUrl ? imagePreviewUrl : settings.attributes && settings.attributes.logo,
                  handleImageChange: handleImageChange
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.company-name.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.input.company-name.placeholder.label"),
                  name: "company_name",
                  value: settingValue.company_name,
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["company_name"] ? errors["company_name"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.company-phone.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
                  type: "number",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.input.company-phone.placeholder.label"),
                  name: "phone",
                  min: 0,
                  value: settingValue.phone,
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.numValidate)(event);
                  },
                  onChange: onChangeInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["phone"] ? errors["phone"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.developed-by.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.input.developed-by.placeholder.label"),
                  name: "developed",
                  value: settingValue.developed,
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["developed"] ? errors["developed"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.input.footer.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.input.footer.placeholder.label"),
                  name: "footer",
                  value: settingValue.footer,
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["footer"] ? errors["footer"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: settings && settings.attributes && settingValue.default_customer && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-customer.label"),
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.select.default-customer.placeholder.label"),
                  defaultValue: settings ? settings.attributes && settingValue.default_customer : "",
                  data: customers,
                  onChange: onCustomerChange,
                  errors: errors["default_customer"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: settings && settings.attributes && settingValue.default_warehouse && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-warehouse.label"),
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.select.default-warehouse.label"),
                  defaultValue: settings ? settings.attributes && settingValue.default_warehouse : "",
                  data: warehouses,
                  onChange: onWarehouseChange,
                  errors: errors["default_warehouse"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: settings && settings.attributes && byDefaultCountry && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("globally.input.country.label"),
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("globally.input.country.label"),
                  defaultValue: settings && settings.attributes && byDefaultCountry ? {
                    label: settingValue.country.label,
                    value: settingValue.country.value
                  } : "",
                  name: "country",
                  multiLanguageOption: defaultCountry.countries ? defaultCountry.countries : [],
                  onChange: onCountryChange,
                  errors: errors["country"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: settings && settings.attributes && stateOptions.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("setting.state.lable"),
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("setting.state.lable"),
                  name: "state",
                  value: settingValue && settingValue.state !== null ? settingValue.state : "",
                  multiLanguageOption: stateOptions,
                  onChange: onStateChange,
                  errors: errors["state"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("globally.input.city.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("globally.input.city.label"),
                  name: "city",
                  value: settingValue.city,
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["city"] ? errors["city"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-lg-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("setting.postCode.lable"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
                  type: "text",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("setting.postCode.lable"),
                  name: "postCode",
                  min: 0,
                  value: settingValue.postCode,
                  onKeyPress: function onKeyPress(event) {
                    return event;
                  },
                  onChange: onChangeInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: settings && settings.attributes && settings.attributes.date_format && defaultDate && settingValue.date_format && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.date-format.label"),
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("settings.system-settings.select.default-warehouse.label"),
                  defaultValue: settings ? settings.attributes && settingValue.date_format : "",
                  data: _dateFormatOptions_json__WEBPACK_IMPORTED_MODULE_16__,
                  onChange: onDateFormatChange,
                  errors: errors["date_format"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
                className: "col-12 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("globally.input.address.label"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("textarea", {
                  className: "form-control",
                  rows: 3,
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("globally.input.address.placeholder.label"),
                  name: "address",
                  value: settingValue.address,
                  onChange: function onChange(e) {
                    return onChangeInput(e);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["address"] ? errors["address"] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                    className: "form-check form-check-custom form-check-solid form-check-inline d-flex align-items-center my-3 cursor-pointer custom-label",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                      type: "checkbox",
                      name: "show_version_on_footer",
                      value: checked,
                      checked: checked,
                      onChange: function onChange(event) {
                        return handleChanged(event, "version");
                      },
                      className: "me-3 form-check-input cursor-pointer"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "control__indicator"
                    }), " ", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.default-version-footer.placeholder.label")]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                    className: "form-check form-check-custom form-check-solid form-check-inline d-flex align-items-center my-3 cursor-pointer custom-label",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                      type: "checkbox",
                      name: "show_logo_in_receipt",
                      value: logoChecked,
                      checked: logoChecked,
                      onChange: function onChange(event) {
                        return handleChanged(event, "logo");
                      },
                      className: "me-3 form-check-input cursor-pointer"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "control__indicator"
                    }), " ", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.logo.placeholder.label")]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                className: "col-lg-6 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("label", {
                    className: "form-check form-check-custom form-check-solid form-check-inline d-flex align-items-center my-3 cursor-pointer custom-label",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("input", {
                      type: "checkbox",
                      name: "show_app_name_in_sidebar",
                      value: showAppName,
                      checked: showAppName,
                      onChange: function onChange(event) {
                        return handleChanged(event, "appname");
                      },
                      className: "me-3 form-check-input cursor-pointer"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                      className: "control__indicator"
                    }), " ", (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.system-settings.select.appname-sidebar.placeholder.label")]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                  disabled: disable,
                  className: "btn btn-primary mt-4",
                  onClick: function onClick(event) {
                    return onEdit(event);
                  },
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("globally.save-btn")
                })
              })]
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "w-100 mx-auto pt-lg-10 pt-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("h4", {
          className: "mb-5",
          children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.clear-cache.title")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "card card-body",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
            className: "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("button", {
                className: "btn btn-primary",
                onClick: function onClick(event) {
                  return onCacheClear(event);
                },
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("settings.clear-cache.title")
              })
            })
          })
        })]
      })]
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var customers = state.customers,
    warehouses = state.warehouses,
    settings = state.settings,
    currencies = state.currencies,
    countryState = state.countryState,
    dateFormat = state.dateFormat,
    defaultCountry = state.defaultCountry;
  return {
    customers: customers,
    warehouses: warehouses,
    settings: settings,
    currencies: currencies,
    countryState: countryState,
    dateFormat: dateFormat,
    defaultCountry: defaultCountry
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchSetting: _store_action_settingAction__WEBPACK_IMPORTED_MODULE_5__.fetchSetting,
  fetchCurrencies: _store_action_currencyAction__WEBPACK_IMPORTED_MODULE_6__.fetchCurrencies,
  fetchCacheClear: _store_action_settingAction__WEBPACK_IMPORTED_MODULE_5__.fetchCacheClear,
  fetchAllCustomer: _store_action_customerAction__WEBPACK_IMPORTED_MODULE_7__.fetchAllCustomer,
  fetchAllWarehouses: _store_action_warehouseAction__WEBPACK_IMPORTED_MODULE_8__.fetchAllWarehouses,
  editSetting: _store_action_settingAction__WEBPACK_IMPORTED_MODULE_5__.editSetting,
  fetchState: _store_action_settingAction__WEBPACK_IMPORTED_MODULE_5__.fetchState
})(Settings));

/***/ },

/***/ "./resources/pos/src/shared/image-picker/ImagePicker.js"
/*!**************************************************************!*\
  !*** ./resources/pos/src/shared/image-picker/ImagePicker.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var ImagePicker = function ImagePicker(props) {
  var imagePreviewUrl = props.imagePreviewUrl,
    handleImageChange = props.handleImageChange,
    imageTitle = props.imageTitle,
    avtarName = props.avtarName,
    user = props.user;
  var fileInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "col-12",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
      className: "form-label mb-4",
      children: [imageTitle ? imageTitle : (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.getFormattedMessage)('globally.input.change-logo.tooltip'), ":"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "d-block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "image-picker",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "image previewImage imagePreviewUrl ".concat(imagePreviewUrl ? null : "d-flex justify-content-center align-items-center"),
          children: [imagePreviewUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: imagePreviewUrl ? imagePreviewUrl : null,
            alt: "img",
            width: 75,
            height: 100,
            className: "image image-circle image-mini h-100"
          }) : avtarName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "custom-user-avatar w-100 h-100",
            children: avtarName
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
            src: user ? user : null,
            alt: "img",
            width: 75,
            height: 75,
            className: "image image-circle image-mini h-100"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "picker-edit rounded-circle text-gray-500 fs-small cursor-pointer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
              className: "upload-file",
              title: "".concat(imageTitle ? imageTitle : (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_1__.placeholderText)('globally.input.change-logo.tooltip')),
              type: "file",
              accept: ".png, .jpg, .jpeg",
              onChange: function onChange(e) {
                return handleImageChange(e);
              },
              ref: fileInput
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faPencil
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImagePicker);

/***/ },

/***/ "./resources/pos/src/store/action/currencyAction.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/store/action/currencyAction.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCurrency: () => (/* binding */ addCurrency),
/* harmony export */   deleteCurrency: () => (/* binding */ deleteCurrency),
/* harmony export */   editCurrency: () => (/* binding */ editCurrency),
/* harmony export */   fetchCurrencies: () => (/* binding */ fetchCurrencies),
/* harmony export */   fetchCurrency: () => (/* binding */ fetchCurrency)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var fetchCurrencies = function fetchCurrencies() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CURRENCY;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.currencyActionType.FETCH_CURRENCIES,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
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
var fetchCurrency = function fetchCurrency(currencyId) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CURRENCY + "/" + currencyId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.currencyActionType.FETCH_CURRENCY,
                payload: response.data.data
              });
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
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
var addCurrency = function addCurrency(currency) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CURRENCY, currency).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.currencyActionType.ADD_CURRENCY,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("currency.success.create.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var editCurrency = function editCurrency(currencyId, currency, handleClose) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CURRENCY + "/" + currencyId, currency).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.currencyActionType.EDIT_CURRENCY,
                payload: response.data.data
              });
              handleClose(false);
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("currency.success.edit.message")
              }));
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteCurrency = function deleteCurrency(currencyId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CURRENCY + "/" + currencyId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.currencyActionType.DELETE_CURRENCY,
                payload: currencyId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("currency.success.delete.message")
              }));
            })["catch"](function (_ref0) {
              var response = _ref0.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/customerAction.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/store/action/customerAction.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCustomer: () => (/* binding */ addCustomer),
/* harmony export */   addImportCustomers: () => (/* binding */ addImportCustomers),
/* harmony export */   deleteCustomer: () => (/* binding */ deleteCustomer),
/* harmony export */   editCustomer: () => (/* binding */ editCustomer),
/* harmony export */   fetchAllCustomer: () => (/* binding */ fetchAllCustomer),
/* harmony export */   fetchCustomer: () => (/* binding */ fetchCustomer),
/* harmony export */   fetchCustomers: () => (/* binding */ fetchCustomers)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _saveButtonAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saveButtonAction */ "./resources/pos/src/store/action/saveButtonAction.js");
/* harmony import */ var _importProductApiAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./importProductApiAction */ "./resources/pos/src/store/action/importProductApiAction.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! dayjs/plugin/localizedFormat */ "./node_modules/dayjs/plugin/localizedFormat.js");
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs/plugin/isoWeek */ "./node_modules/dayjs/plugin/isoWeek.js");
/* harmony import */ var dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }














dayjs__WEBPACK_IMPORTED_MODULE_9___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_10___default()));
dayjs__WEBPACK_IMPORTED_MODULE_9___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_11___default()));
dayjs__WEBPACK_IMPORTED_MODULE_9___default().extend((dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_12___default()));
dayjs__WEBPACK_IMPORTED_MODULE_9___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_13___default()));
var fetchCustomers = function fetchCustomers() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CUSTOMERS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.customerActionType.FETCH_CUSTOMERS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
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
var fetchCustomer = function fetchCustomer(customerId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CUSTOMERS + "/" + customerId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.customerActionType.FETCH_CUSTOMER,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
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
var addCustomer = function addCustomer(supplier, navigate) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CUSTOMERS, supplier).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.customerActionType.ADD_CUSTOMER,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("customer.success.create.message")
              }));
              navigate("/app/customers");
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
              response && dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var editCustomer = function editCustomer(customerId, customer, navigate) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      var name, dob, email, phone, country, city, address, identification, tipo_identificacion, data;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            name = customer.name, dob = customer.dob, email = customer.email, phone = customer.phone, country = customer.country, city = customer.city, address = customer.address, identification = customer.identification, tipo_identificacion = customer.tipo_identificacion;
            data = {
              name: name,
              dob: dob === null ? null : dayjs__WEBPACK_IMPORTED_MODULE_9___default()(dob).format("YYYY-MM-DD"),
              email: email,
              phone: phone,
              country: country,
              city: city,
              address: address,
              identification: identification,
              tipo_identificacion: tipo_identificacion
            };
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CUSTOMERS + "/" + customerId, data).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.customerActionType.EDIT_CUSTOMER,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("customer.success.edit.message")
              }));
              navigate("/app/customers");
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteCustomer = function deleteCustomer(customerId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.CUSTOMERS + "/" + customerId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.customerActionType.DELETE_CUSTOMER,
                payload: customerId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("customer.success.delete.message")
              }));
            })["catch"](function (_ref0) {
              var response = _ref0.response;
              response && dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var fetchAllCustomer = function fetchAllCustomer() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("customers?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.customerActionType.FETCH_ALL_CUSTOMER,
                payload: response.data.data
              });
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref1.apply(this, arguments);
    };
  }();
};
var addImportCustomers = function addImportCustomers(importData) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dispatch) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.IMPORT_CUSTOMERS, importData).then(function (response) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              dispatch((0,_importProductApiAction__WEBPACK_IMPORTED_MODULE_8__.callImportProductApi)(true));
              // dispatch({type: productActionType.ADD_IMPORT_PRODUCT, payload: response.data.data});
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: "Customers Import Create Success "
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
            })["catch"](function (_ref12) {
              var response = _ref12.response;
              response && dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/dateFormatAction.js"
/*!************************************************************!*\
  !*** ./resources/pos/src/store/action/dateFormatAction.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDateFormat: () => (/* binding */ setDateFormat)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");

var setDateFormat = function setDateFormat(format) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.SET_DATE_FORMAT,
    payload: format
  };
};

/***/ },

/***/ "./resources/pos/src/store/action/importProductApiAction.js"
/*!******************************************************************!*\
  !*** ./resources/pos/src/store/action/importProductApiAction.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callImportProductApi: () => (/* binding */ callImportProductApi)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");

var callImportProductApi = function callImportProductApi(isCall) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.CALL_IMPORT_PRODUCT_API,
    payload: isCall
  };
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

/***/ },

/***/ "./resources/pos/src/store/action/settingAction.js"
/*!*********************************************************!*\
  !*** ./resources/pos/src/store/action/settingAction.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   editSetting: () => (/* binding */ editSetting),
/* harmony export */   fetchCacheClear: () => (/* binding */ fetchCacheClear),
/* harmony export */   fetchSetting: () => (/* binding */ fetchSetting),
/* harmony export */   fetchState: () => (/* binding */ fetchState)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _configAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configAction */ "./resources/pos/src/store/action/configAction.js");
/* harmony import */ var _dateFormatAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dateFormatAction */ "./resources/pos/src/store/action/dateFormatAction.js");
/* harmony import */ var _defaultCountryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../defaultCountryAction */ "./resources/pos/src/store/defaultCountryAction.js");
/* harmony import */ var _frontSettingAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frontSettingAction */ "./resources/pos/src/store/action/frontSettingAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










var fetchSetting = function fetchSetting() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.SETTINGS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_1__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.settingActionType.FETCH_SETTING,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
              }
              response && dispatch((0,_dateFormatAction__WEBPACK_IMPORTED_MODULE_7__.setDateFormat)(response.data.data.attributes.date_format));
              response && dispatch((0,_defaultCountryAction__WEBPACK_IMPORTED_MODULE_8__.setDefaultCountry)({
                countries: response.data.data.attributes.countries,
                country: response.data.data.attributes.country
              }));
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
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
var editSetting = function editSetting(setting) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var setDefaultDate = arguments.length > 2 ? arguments[2] : undefined;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.SETTINGS, setting).then(function (response) {
              // dispatch({type: settingActionType.EDIT_SETTINGS, payload: response.data.data});
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("settings.success.edit.message")
              }));
              dispatch((0,_configAction__WEBPACK_IMPORTED_MODULE_6__.fetchConfig)());
              dispatch((0,_frontSettingAction__WEBPACK_IMPORTED_MODULE_9__.fetchFrontSetting)());
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
              }
              response && dispatch((0,_dateFormatAction__WEBPACK_IMPORTED_MODULE_7__.setDateFormat)(response.data.data.attributes.date_format));
              response && dispatch((0,_defaultCountryAction__WEBPACK_IMPORTED_MODULE_8__.setDefaultCountry)({
                countries: response.data.data.attributes.countries,
                country: response.data.data.attributes.country
              }));
              response && dispatch(fetchSetting());
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
              }));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_4__.setLoading)(false));
              }
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
var fetchCacheClear = function fetchCacheClear() {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.CACHE_CLEAR).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.settingActionType.FETCH_CACHE_CLEAR,
                payload: response.data.message
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_5__.getFormattedMessage)("settings.clear-cache.success.message")
              }));
              window.location.reload();
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
              }));
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var fetchState = function fetchState(id) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get("states/" + id).then(function (response) {
              dispatch({
                type: "FETCH_STATE_DATA",
                payload: response.data.data
              });
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
              }));
            });
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/warehouseAction.js"
/*!***********************************************************!*\
  !*** ./resources/pos/src/store/action/warehouseAction.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWarehouse: () => (/* binding */ addWarehouse),
/* harmony export */   deleteWarehouse: () => (/* binding */ deleteWarehouse),
/* harmony export */   editWarehouse: () => (/* binding */ editWarehouse),
/* harmony export */   fetchAllWarehouses: () => (/* binding */ fetchAllWarehouses),
/* harmony export */   fetchWarehouse: () => (/* binding */ fetchWarehouse),
/* harmony export */   fetchWarehouseDetails: () => (/* binding */ fetchWarehouseDetails),
/* harmony export */   fetchWarehouses: () => (/* binding */ fetchWarehouses)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _saveButtonAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saveButtonAction */ "./resources/pos/src/store/action/saveButtonAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var fetchWarehouses = function fetchWarehouses() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_WAREHOUSES,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
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
var fetchWarehouse = function fetchWarehouse(warehouseId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES + "/" + warehouseId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_WAREHOUSE,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
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
var addWarehouse = function addWarehouse(warehouse, navigate) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES, warehouse).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.ADD_WAREHOUSE,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("warehouse.success.create.message")
              }));
              navigate("/app/warehouse");
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
            })["catch"](function (_ref6) {
              var response = _ref6.response;
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var editWarehouse = function editWarehouse(warehouseId, warehouse, navigate) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES + "/" + warehouseId, warehouse).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.EDIT_WAREHOUSE,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("warehouse.success.edit.message")
              }));
              navigate("/app/warehouse");
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
            })["catch"](function (_ref8) {
              var response = _ref8.response;
              dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var deleteWarehouse = function deleteWarehouse(warehouseId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSES + "/" + warehouseId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.DELETE_WAREHOUSE,
                payload: warehouseId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("warehouse.success.delete.message")
              }));
            })["catch"](function (_ref0) {
              var response = _ref0.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var fetchAllWarehouses = function fetchAllWarehouses() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("warehouses?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_ALL_WAREHOUSES,
                payload: response.data.data
              });
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref1.apply(this, arguments);
    };
  }();
};
var fetchWarehouseDetails = function fetchWarehouseDetails(WarehouseId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dispatch) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.WAREHOUSE_DETAILS + "/" + WarehouseId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.warehouseActionType.FETCH_WAREHOUSE_DETAILS,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref12) {
              var response = _ref12.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/defaultCountryAction.js"
/*!*********************************************************!*\
  !*** ./resources/pos/src/store/defaultCountryAction.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setDefaultCountry: () => (/* binding */ setDefaultCountry)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./resources/pos/src/constants/index.js");

var setDefaultCountry = function setDefaultCountry(country) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.SET_DEFAULT_COUNTRY,
    payload: country
  };
};

/***/ },

/***/ "./resources/pos/src/components/settings/dateFormatOptions.json"
/*!**********************************************************************!*\
  !*** ./resources/pos/src/components/settings/dateFormatOptions.json ***!
  \**********************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"label":"DD-MM-YYYY","value":"d-m-y"},{"label":"MM-DD-YYYY","value":"m-d-y"},{"label":"YYYY-MM-DD","value":"y-m-d"},{"label":"MM/DD/YYYY","value":"m/d/y"},{"label":"DD/MM/YYYY","value":"d/m/y"},{"label":"YYYY/MM/DD","value":"y/m/d"},{"label":"MM.DD.YYYY","value":"m.d.y"},{"label":"DD.MM.YYYY","value":"d.m.y"},{"label":"YYYY.MM.DD","value":"y.m.d"}]');

/***/ },

/***/ "./resources/pos/src/shared/option-lists/Language.json"
/*!*************************************************************!*\
  !*** ./resources/pos/src/shared/option-lists/Language.json ***!
  \*************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"label":"English","value":"1"}]');

/***/ },

/***/ "./resources/pos/src/shared/option-lists/Sms.json"
/*!********************************************************!*\
  !*** ./resources/pos/src/shared/option-lists/Sms.json ***!
  \********************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"label":"Twillo","value":"1"}]');

/***/ }

}]);