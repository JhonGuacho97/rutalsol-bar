"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_languages_EditLanguageData_js"],{

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

/***/ "./resources/pos/src/components/languages/EditLanguageData.js"
/*!********************************************************************!*\
  !*** ./resources/pos/src/components/languages/EditLanguageData.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_languageAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/action/languageAction */ "./resources/pos/src/store/action/languageAction.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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










var EditLanguageData = function EditLanguageData(props) {
  var _language$, _language$2;
  var editLanguageData = props.editLanguageData,
    language = props.language,
    fetchLanguageData = props.fetchLanguageData;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    langJsonObj = _useState2[0],
    setLangJsonObj = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    langPhpObj = _useState4[0],
    setLangPhpObj = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errorObj = _useState6[0],
    setErrorObj = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    successObj = _useState8[0],
    setSuccessObj = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    pdfObj = _useState0[0],
    setPdfObj = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      type: 1
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    fileType = _useState10[0],
    setFileType = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchLanguageData(id);
  }, []);
  var lang_json_array = (_language$ = language[0]) === null || _language$ === void 0 ? void 0 : _language$.lang_json_array;
  var lang_php_array = (_language$2 = language[0]) === null || _language$2 === void 0 ? void 0 : _language$2.lang_php_array;
  var errorArray = lang_php_array === null || lang_php_array === void 0 ? void 0 : lang_php_array.error;
  var pdfArray = lang_php_array === null || lang_php_array === void 0 ? void 0 : lang_php_array.pdf;
  var successArray = lang_php_array === null || lang_php_array === void 0 ? void 0 : lang_php_array.success;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLangJsonObj(lang_json_array);
    setLangPhpObj(lang_php_array);
    setErrorObj(errorArray);
    setSuccessObj(successArray);
    setPdfObj(pdfArray);
  }, [lang_json_array, lang_php_array, errorArray, successArray, pdfArray]);
  var languageFileTypeOption = _constants__WEBPACK_IMPORTED_MODULE_7__.languageFileOptions.map(function (option) {
    return {
      value: option.id,
      label: option.name
    };
  });
  var onFileTypeChange = function onFileTypeChange(obj) {
    setFileType({
      type: obj.value
    });
  };
  function str_replace(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).replaceAll('.', ' ').replaceAll('-', ' ').replaceAll('_', ' ');
  }
  var onChangeInput = function onChangeInput(e) {
    e.preventDefault();
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    if (fileType.type === 2) {
      setLangPhpObj(function (inputs) {
        return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value));
      });
    } else if (fileType.type === 3) {
      setErrorObj(function (inputs) {
        return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value));
      });
      setLangPhpObj(function (language) {
        return _objectSpread(_objectSpread({}, language), {}, {
          error: _objectSpread(_objectSpread({}, language.error), {}, _defineProperty({}, name, value))
        });
      });
    } else if (fileType.type === 4) {
      setSuccessObj(function (inputs) {
        return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value));
      });
      setLangPhpObj(function (language) {
        return _objectSpread(_objectSpread({}, language), {}, {
          success: _objectSpread(_objectSpread({}, language.success), {}, _defineProperty({}, name, value))
        });
      });
    } else if (fileType.type === 5) {
      setPdfObj(function (inputs) {
        return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value));
      });
      setLangPhpObj(function (language) {
        return _objectSpread(_objectSpread({}, language), {}, {
          pdf: _objectSpread(_objectSpread({}, language.pdf), {}, _defineProperty({}, name, value))
        });
      });
    } else {
      setLangJsonObj(function (inputs) {
        return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, name, value));
      });
    }
  };
  var FetchLung = function FetchLung() {
    var steps = [];
    if (fileType.type === 1 || fileType.type === 2) {
      for (var key in fileType.type === 2 ? langPhpObj : langJsonObj) {
        if (key === 'pdf' || key === 'success' || key === 'error') {
          steps.push('');
        } else {
          steps.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "col-md-4 mt-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
              className: "form-label",
              children: [str_replace(key), " : "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
              type: "text",
              name: [key],
              value: fileType.type === 2 ? langPhpObj[key] : langJsonObj[key],
              placeholder: "Enter " + str_replace(key),
              className: "form-control",
              autoComplete: "off",
              onChange: function onChange(e) {
                return onChangeInput(e);
              }
            })]
          }, key));
        }
      }
    } else if (fileType.type === 3) {
      for (var _key in errorObj) {
        steps.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "col-md-4 mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
            className: "form-label",
            children: [str_replace(_key), " : "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
            type: "text",
            name: [_key],
            value: errorObj[_key],
            placeholder: "Enter " + str_replace(_key),
            className: "form-control",
            autoComplete: "off",
            onChange: function onChange(e) {
              return onChangeInput(e);
            }
          })]
        }, _key));
      }
    } else if (fileType.type === 4) {
      for (var _key2 in successObj) {
        steps.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "col-md-4 mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
            className: "form-label",
            children: [str_replace(_key2), " : "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
            type: "text",
            name: [_key2],
            value: successObj[_key2],
            placeholder: "Enter " + str_replace(_key2),
            className: "form-control",
            autoComplete: "off",
            onChange: function onChange(e) {
              return onChangeInput(e);
            }
          })]
        }, _key2));
      }
    } else if (fileType.type === 5) {
      for (var _key3 in pdfObj) {
        steps.push(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "col-md-4 mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
            className: "form-label",
            children: [str_replace(_key3), " : "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
            type: "text",
            name: [_key3],
            value: pdfObj[_key3],
            placeholder: "Enter " + str_replace(_key3),
            className: "form-control",
            autoComplete: "off",
            onChange: function onChange(e) {
              return onChangeInput(e);
            }
          })]
        }, _key3));
      }
    }
    return steps;
  };
  var prepareFormData = function prepareFormData(prepareData, jsonArray) {
    var _language$3;
    var formValue = {
      lang_php_array: prepareData,
      lang_json_array: jsonArray,
      iso_code: (_language$3 = language[0]) === null || _language$3 === void 0 ? void 0 : _language$3.iso_code
    };
    return formValue;
  };
  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    editLanguageData(id, prepareFormData(langPhpObj, langJsonObj));
    navigate("/app/languages");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_2__.getFormattedMessage)('translation.manager.title'),
      to: "/app/languages"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      className: "card",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "row mb-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "col-md-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
              isRequired: true,
              data: languageFileTypeOption,
              onChange: onFileTypeChange,
              defaultValue: languageFileTypeOption[0]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "form-group col-sm-3 mb-7 d-flex justify-content-end offset-3 ms-auto",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("button", {
              onClick: function onClick(event) {
                return onSubmit(event);
              },
              className: "btn btn-primary",
              children: "Save"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          className: "row",
          children: FetchLung()
        })]
      })
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var language = state.language;
  return {
    language: language
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  editLanguageData: _store_action_languageAction__WEBPACK_IMPORTED_MODULE_3__.editLanguageData,
  fetchLanguageData: _store_action_languageAction__WEBPACK_IMPORTED_MODULE_3__.fetchLanguageData
})(EditLanguageData));

/***/ }

}]);