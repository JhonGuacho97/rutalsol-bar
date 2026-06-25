"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_users_UserDetail_js"],{

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

/***/ "./resources/pos/src/components/users/UserDetail.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/components/users/UserDetail.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs/plugin/localizedFormat */ "./node_modules/dayjs/plugin/localizedFormat.js");
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs/plugin/isoWeek */ "./node_modules/dayjs/plugin/isoWeek.js");
/* harmony import */ var dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/tab-title/TabTitle */ "./resources/pos/src/shared/tab-title/TabTitle.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _store_action_userAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../store/action/userAction */ "./resources/pos/src/store/action/userAction.js");
/* harmony import */ var _shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/loaders/Spinner */ "./resources/pos/src/shared/components/loaders/Spinner.js");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }








dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_5___default()));
dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_6___default()));
dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_7___default()));
dayjs__WEBPACK_IMPORTED_MODULE_4___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_8___default()));











var UserDetail = function UserDetail(props) {
  var users = props.users,
    isLoading = props.isLoading,
    fetchUser = props.fetchUser;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_14__.useParams)(),
    id = _useParams.id;
  var result = users.reduce(function (obj, cur) {
    return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, cur.type, cur));
  }, {});
  var user = result.users;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchUser(id);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_17__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user-details.title'),
      to: "/app/users",
      editLink: "/app/users/edit/".concat(id)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.placeholderText)('user-details.title')
    }), isLoading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_shared_components_loaders_Spinner__WEBPACK_IMPORTED_MODULE_16__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
                className: "col-xxl-5 col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                  className: "d-sm-flex align-items-center mb-5 mb-xxl-0 flex-row text-sm-start",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
                    className: "image image-circle image-lg-small w-100px",
                    children: user && user.attributes.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_9__["default"], {
                      src: user.attributes.image,
                      alt: "User Profile",
                      className: "object-fit-cover"
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
                      className: "user_avatar",
                      children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getAvatarName)(user && user.attributes.first_name + ' ' + user.attributes.last_name)
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div", {
                    className: "ms-0 ms-md-10 mt-5 mt-sm-0",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("span", {
                      className: "badge bg-light-success mb-2",
                      children: "Active"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("h2", {
                      children: [" ", user && user.attributes.first_name + ' ' + user.attributes.last_name]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("a", {
                      href: user && user.attributes.email,
                      className: "text-gray-600 text-decoration-none fs-4",
                      children: user && user.attributes.email
                    })]
                  })]
                })
              })
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div", {
        className: "pt-5",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Header, {
            as: "h5",
            children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user-details.table.title')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
            className: "pt-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["default"], {
              responsive: true,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tbody", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user.input.first-name.label')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: user && user.attributes.first_name
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user.input.last-name.label')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: user && user.attributes.last_name
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user.input.email.label')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: user && user.attributes.email
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user.input.phone-number.label')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: user && user.attributes.phone
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("tr", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_13__.getFormattedMessage)('user-details.table.created-on.row.label')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("td", {
                    className: "py-4",
                    children: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(user && user.attributes.created_at).fromNow()
                  })]
                })]
              })
            })
          })]
        })
      })]
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var users = state.users,
    isLoading = state.isLoading;
  return {
    users: users,
    isLoading: isLoading
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchUser: _store_action_userAction__WEBPACK_IMPORTED_MODULE_15__.fetchUser
})(UserDetail));

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

/***/ "./resources/pos/src/store/action/userAction.js"
/*!******************************************************!*\
  !*** ./resources/pos/src/store/action/userAction.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUser: () => (/* binding */ addUser),
/* harmony export */   deleteUser: () => (/* binding */ deleteUser),
/* harmony export */   editUser: () => (/* binding */ editUser),
/* harmony export */   fetchUser: () => (/* binding */ fetchUser),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
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








var fetchUsers = function fetchUsers() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var allUser = arguments.length > 2 ? arguments[2] : undefined;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.USERS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            url += allUser ? allUser : "";
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.userActionType.FETCH_USERS,
                payload: response.data.data
              });
              !allUser && dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
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
var fetchUser = function fetchUser(userId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.USERS + "/" + userId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.userActionType.FETCH_USER,
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
var addUser = function addUser(users, navigate) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.USERS, users).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.userActionType.ADD_USER,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("user.success.create.message")
              }));
              navigate("/app/users");
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
var editUser = function editUser(userId, users, navigate) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.USERS + "/" + userId, users).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.userActionType.EDIT_USER,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("user.success.edit.message")
              }));
              navigate("/app/users");
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
var deleteUser = function deleteUser(userId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.USERS + "/" + userId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.userActionType.DELETE_USER,
                payload: userId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("user.success.delete.message")
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

/***/ }

}]);