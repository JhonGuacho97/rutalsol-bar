"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_users_CreateUser_js"],{

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

/***/ "./resources/pos/src/components/users/CreateUser.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/components/users/CreateUser.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserForm */ "./resources/pos/src/components/users/UserForm.js");
/* harmony import */ var _store_action_userAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/action/userAction */ "./resources/pos/src/store/action/userAction.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var CreateUser = function CreateUser(props) {
  var addUser = props.addUser;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useNavigate)();
  var addUserData = function addUserData(formValue) {
    addUser(formValue, navigate, _constants__WEBPACK_IMPORTED_MODULE_6__.Filters.OBJ);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_8__.getFormattedMessage)('user.create.title'),
      to: "/app/users"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_UserForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
      addUserData: addUserData
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(null, {
  addUser: _store_action_userAction__WEBPACK_IMPORTED_MODULE_3__.addUser
})(CreateUser));

/***/ },

/***/ "./resources/pos/src/components/users/UserForm.js"
/*!********************************************************!*\
  !*** ./resources/pos/src/components/users/UserForm.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var _store_action_userAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action/userAction */ "./resources/pos/src/store/action/userAction.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/images/avatar.png */ "./resources/pos/src/assets/images/avatar.png");
/* harmony import */ var _shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/modelFooter */ "./resources/pos/src/shared/components/modelFooter.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _store_action_roleAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/action/roleAction */ "./resources/pos/src/store/action/roleAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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













var UserForm = function UserForm(props) {
  var addUserData = props.addUserData,
    id = props.id,
    singleUser = props.singleUser,
    isEdit = props.isEdit,
    isCreate = props.isCreate,
    fetchAllRoles = props.fetchAllRoles,
    roles = props.roles;
  var Dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      first_name: singleUser ? singleUser[0].first_name : '',
      last_name: singleUser ? singleUser[0].last_name : '',
      email: singleUser ? singleUser[0].email : '',
      phone: singleUser ? singleUser[0].phone : '',
      password: '',
      confirm_password: '',
      role_id: singleUser ? singleUser[0].role_id : '',
      image: singleUser ? singleUser[0].image : ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    userValue = _useState2[0],
    setUserValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      password: '',
      confirm_password: '',
      role_id: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var avatarName = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getAvatarName)(singleUser && singleUser[0].image === '' && singleUser[0].first_name && singleUser[0].last_name && singleUser[0].first_name + ' ' + singleUser[0].last_name);
  var newImg = singleUser && singleUser[0].image && singleUser[0].image === null && avatarName;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newImg && newImg),
    _useState6 = _slicedToArray(_useState5, 2),
    imagePreviewUrl = _useState6[0],
    setImagePreviewUrl = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectImg = _useState8[0],
    setSelectImg = _useState8[1];
  var disabled = selectImg ? false : singleUser && singleUser[0].first_name === userValue.first_name && singleUser[0].last_name === userValue.last_name && singleUser[0].email === userValue.email && singleUser[0].phone === userValue.phone && singleUser[0].image === userValue.image && singleUser[0].role_id.label[0] === userValue.role_id.label[0];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(singleUser && singleUser[0] ? [{
      label: singleUser[0].role_id.label[0],
      value: singleUser[0].role_id.value[0]
    }] : null),
    _useState0 = _slicedToArray(_useState9, 1),
    selectedRole = _useState0[0];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchAllRoles();
    setImagePreviewUrl(singleUser ? singleUser[0].image && singleUser[0].image : _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }, []);
  var onRolesChange = function onRolesChange(obj) {
    setUserValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        role_id: obj
      });
    });
    setErrors('');
  };
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    if (!userValue['first_name']) {
      errorss['first_name'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.first-name.validate.label");
    } else if (!userValue['last_name']) {
      errorss['last_name'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.last-name.validate.label");
    } else if (!email_validator__WEBPACK_IMPORTED_MODULE_4__.validate(userValue['email'])) {
      if (!userValue['email']) {
        errorss['email'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.email.validate.label");
      } else {
        errorss['email'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.email.valid.validate.label");
      }
    } else if (!userValue['phone']) {
      errorss['phone'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.phone-number.validate.label");
    } else if (!userValue['role_id']) {
      errorss['role_id'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.role.validate.label");
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onChangeInput = function onChangeInput(e) {
    e.preventDefault();
    setUserValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, e.target.name, e.target.value));
    });
    setErrors('');
  };
  var handleImageChanges = function handleImageChanges(e) {
    e.preventDefault();
    if (e.target.files.length > 0) {
      var file = e.target.files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setSelectImg(file);
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
          setImagePreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
        setErrors('');
      }
    }
  };
  var prepareFormData = function prepareFormData(data) {
    var formData = new FormData();
    formData.append('first_name', data.first_name);
    formData.append('last_name', data.last_name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    if (!isEdit) {
      formData.append('password', data.password);
      formData.append('confirm_password', data.confirm_password);
    }
    if (data.role_id.value) {
      formData.append('role_id', data.role_id.value);
    } else {
      formData.append('role_id', data.role_id);
    }
    if (selectImg) {
      formData.append('image', data.image);
    }
    return formData;
  };
  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    userValue.image = selectImg;
    var valid = handleValidation();
    if (singleUser && valid) {
      if (!disabled) {
        userValue.image = selectImg;
        Dispatch((0,_store_action_userAction__WEBPACK_IMPORTED_MODULE_5__.editUser)(id, prepareFormData(userValue), navigate));
      }
    } else {
      if (valid) {
        setUserValue(userValue);
        addUserData(prepareFormData(userValue));
        setImagePreviewUrl(imagePreviewUrl ? imagePreviewUrl : _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_8__["default"]);
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
    className: "card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "mb-4",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
              user: _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_8__["default"],
              isCreate: isCreate,
              avtarName: avatarName,
              imageTitle: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("globally.input.change-image.tooltip"),
              imagePreviewUrl: imagePreviewUrl,
              handleImageChange: handleImageChanges
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "col-md-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              htmlFor: "exampleInputEmail1",
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.first-name.label"), " :", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: "required"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              type: "text",
              name: "first_name",
              value: userValue.first_name,
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.first-name.placeholder.label"),
              className: "form-control",
              autoFocus: true,
              onChange: function onChange(e) {
                return onChangeInput(e);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['first_name'] ? errors['first_name'] : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "col-md-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.last-name.label"), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              type: "text",
              name: "last_name",
              className: "form-control",
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.last-name.placeholder.label"),
              onChange: function onChange(e) {
                return onChangeInput(e);
              },
              value: userValue.last_name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['last_name'] ? errors['last_name'] : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "col-md-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.email.label"), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              type: "text",
              name: "email",
              className: "form-control",
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.email.placeholder.label"),
              onChange: function onChange(e) {
                return onChangeInput(e);
              },
              value: userValue.email
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['email'] ? errors['email'] : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "col-md-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.phone-number.label"), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              type: "text",
              name: "phone",
              value: userValue.phone,
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.phone-number.placeholder.label"),
              className: "form-control",
              pattern: "[0-9]*",
              min: 0,
              onKeyPress: function onKeyPress(event) {
                return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.numValidate)(event);
              },
              onChange: function onChange(e) {
                return onChangeInput(e);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['phone'] ? errors['phone'] : null
            })]
          }), isEdit ? '' : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "col-md-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.password.label"), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              type: "password",
              name: "password",
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.password.placeholder.label"),
              className: "form-control",
              value: userValue.password,
              onChange: function onChange(e) {
                return onChangeInput(e);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['password'] ? errors['password'] : null
            })]
          }), isEdit ? '' : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "col-md-6 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.confirm-password.label"), ":"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("input", {
              type: "password",
              name: "confirm_password",
              className: "form-control",
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.confirm-password.placeholder.label"),
              onChange: function onChange(e) {
                return onChangeInput(e);
              },
              value: userValue.confirm_password
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['confirm_password'] ? errors['confirm_password'] : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_10__["default"], {
              title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)("user.input.role.label"),
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.placeholderText)("user.input.role.placeholder.label"),
              defaultValue: selectedRole,
              data: roles,
              onChange: onRolesChange,
              errors: errors['role_id']
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_9__["default"], {
            onEditRecord: singleUser,
            onSubmit: onSubmit,
            editDisabled: disabled,
            link: "/app/users",
            addDisabled: !userValue.first_name
          })]
        })
      })
    })
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var roles = state.roles;
  return {
    roles: roles
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, {
  fetchAllRoles: _store_action_roleAction__WEBPACK_IMPORTED_MODULE_11__.fetchAllRoles
})(UserForm));

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

/***/ "./resources/pos/src/store/action/roleAction.js"
/*!******************************************************!*\
  !*** ./resources/pos/src/store/action/roleAction.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRole: () => (/* binding */ addRole),
/* harmony export */   deleteRole: () => (/* binding */ deleteRole),
/* harmony export */   editRole: () => (/* binding */ editRole),
/* harmony export */   fetchAllRoles: () => (/* binding */ fetchAllRoles),
/* harmony export */   fetchRole: () => (/* binding */ fetchRole),
/* harmony export */   fetchRoles: () => (/* binding */ fetchRoles)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var fetchRoles = function fetchRoles() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var admin, url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            admin = true;
            url = _constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.ROLES;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_4__["default"])(filter, admin, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.rolesActionType.FETCH_ROLES,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_2__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
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
var fetchRole = function fetchRole(rolesId, singleRole) {
  var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.ROLES + "/" + rolesId, singleRole).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.rolesActionType.FETCH_ROLE,
                payload: response.data.data
              });
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref4) {
              var response = _ref4.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
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
var addRole = function addRole(roles, navigate) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.ROLES, roles).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.rolesActionType.ADD_ROLES,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("role.success.create.message")
              }));
              navigate("/app/roles");
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_2__.addInToTotalRecord)(1));
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
var editRole = function editRole(rolesId, role, navigate) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.ROLES + "/" + rolesId, role).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.rolesActionType.EDIT_ROLES,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("role.success.edit.message")
              }));
              navigate("/app/roles");
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
var deleteRole = function deleteRole(rolesId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_0__.apiBaseURL.ROLES + "/" + rolesId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_2__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.rolesActionType.DELETE_ROLES,
                payload: rolesId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("role.success.delete.message")
              }));
            })["catch"](function (_ref0) {
              var response = _ref0.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
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
var fetchAllRoles = function fetchAllRoles() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get("roles?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.rolesActionType.FETCH_ALL_ROLES,
                payload: response.data.data
              });
            })["catch"](function (_ref10) {
              var response = _ref10.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.toastType.ERROR
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

/***/ },

/***/ "./node_modules/react-bootstrap/esm/ElementChildren.js"
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ElementChildren.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   hasChildOfType: () => (/* binding */ hasChildOfType),
/* harmony export */   map: () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  let index = 0;
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) ? func(child, index++) : child);
}

/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */
function forEach(children, func) {
  let index = 0;
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, child => {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) func(child, index++);
  });
}

/**
 * Finds whether a component's `children` prop includes a React element of the
 * specified type.
 */
function hasChildOfType(children, type) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).some(child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child) && child.type === type);
}


/***/ },

/***/ "./node_modules/react-bootstrap/esm/Feedback.js"
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Feedback.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  /** Display feedback as a tooltip. */
  tooltip: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  as: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType)
};
const Feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  as: Component = 'div',
  className,
  type = 'valid',
  tooltip = false,
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `${type}-${tooltip ? 'tooltip' : 'feedback'}`)
}));
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FloatingLabel.js"
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FloatingLabel.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FloatingLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  children,
  controlId,
  label,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_FormGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    controlId: controlId,
    ...props,
    children: [children, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      htmlFor: controlId,
      children: label
    })]
  });
});
FloatingLabel.displayName = 'FloatingLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingLabel);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/Form.js"
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Form.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/esm/FormCheck.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var _FormFloating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormFloating */ "./node_modules/react-bootstrap/esm/FormFloating.js");
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/esm/FormLabel.js");
/* harmony import */ var _FormRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FormRange */ "./node_modules/react-bootstrap/esm/FormRange.js");
/* harmony import */ var _FormSelect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormSelect */ "./node_modules/react-bootstrap/esm/FormSelect.js");
/* harmony import */ var _FormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/esm/FormText.js");
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Switch */ "./node_modules/react-bootstrap/esm/Switch.js");
/* harmony import */ var _FloatingLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FloatingLabel */ "./node_modules/react-bootstrap/esm/FloatingLabel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














const propTypes = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any),
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  as: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().elementType)
};
const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(({
  className,
  validated,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'form',
  ...props
}, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Component, {
  ...props,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, validated && 'was-validated')
}));
Form.displayName = 'Form';
Form.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Form, {
  Group: _FormGroup__WEBPACK_IMPORTED_MODULE_6__["default"],
  Control: _FormControl__WEBPACK_IMPORTED_MODULE_4__["default"],
  Floating: _FormFloating__WEBPACK_IMPORTED_MODULE_5__["default"],
  Check: _FormCheck__WEBPACK_IMPORTED_MODULE_3__["default"],
  Switch: _Switch__WEBPACK_IMPORTED_MODULE_11__["default"],
  Label: _FormLabel__WEBPACK_IMPORTED_MODULE_7__["default"],
  Text: _FormText__WEBPACK_IMPORTED_MODULE_10__["default"],
  Range: _FormRange__WEBPACK_IMPORTED_MODULE_8__["default"],
  Select: _FormSelect__WEBPACK_IMPORTED_MODULE_9__["default"],
  FloatingLabel: _FloatingLabel__WEBPACK_IMPORTED_MODULE_12__["default"]
}));

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormCheck.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheck.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/esm/Feedback.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap/esm/FormCheckInput.js");
/* harmony import */ var _FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormCheckLabel */ "./node_modules/react-bootstrap/esm/FormCheckLabel.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _ElementChildren__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/esm/ElementChildren.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";













const FormCheck = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  id,
  bsPrefix,
  bsSwitchPrefix,
  inline = false,
  reverse = false,
  disabled = false,
  isValid = false,
  isInvalid = false,
  feedbackTooltip = false,
  feedback,
  feedbackType,
  className,
  style,
  title = '',
  type = 'checkbox',
  label,
  children,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as = 'input',
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.useBootstrapPrefix)(bsPrefix, 'form-check');
  bsSwitchPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.useBootstrapPrefix)(bsSwitchPrefix, 'form-switch');
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const innerFormContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    controlId: id || controlId
  }), [controlId, id]);
  const hasLabel = !children && label != null && label !== false || (0,_ElementChildren__WEBPACK_IMPORTED_MODULE_7__.hasChildOfType)(children, _FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const input = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormCheckInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...props,
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: as
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: innerFormContext,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      style: style,
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === 'switch' && bsSwitchPrefix),
      children: children || /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [input, hasLabel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
          title: title,
          children: label
        }), feedback && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Feedback__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: feedbackType,
          tooltip: feedbackTooltip,
          children: feedback
        })]
      })
    })
  });
});
FormCheck.displayName = 'FormCheck';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(FormCheck, {
  Input: _FormCheckInput__WEBPACK_IMPORTED_MODULE_3__["default"],
  Label: _FormCheckLabel__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormCheckInput.js"
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheckInput.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormCheckInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  id,
  bsPrefix,
  className,
  type = 'checkbox',
  isValid = false,
  isInvalid = false,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-check-input');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, {
    ...props,
    ref: ref,
    type: type,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckInput);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormCheckLabel.js"
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormCheckLabel.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormCheckLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.useBootstrapPrefix)(bsPrefix, 'form-check-label');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
    ...props,
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix)
  });
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckLabel);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormContext.js"
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormContext.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
"use client";



// TODO

const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormContext);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormControl.js"
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormControl.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/esm/Feedback.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";









const FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  type,
  size,
  htmlSize,
  id,
  className,
  isValid = false,
  isInvalid = false,
  plaintext,
  readOnly,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'input',
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'form-control');
   true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component, {
    ...props,
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === 'color' && `${bsPrefix}-color`, isValid && 'is-valid', isInvalid && 'is-invalid')
  });
});
FormControl.displayName = 'FormControl';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(FormControl, {
  Feedback: _Feedback__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormFloating.js"
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormFloating.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";





const FormFloating = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  className,
  bsPrefix,
  as: Component = 'div',
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-floating');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, bsPrefix),
    ...props
  });
});
FormFloating.displayName = 'FormFloating';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFloating);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormGroup.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormGroup.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




const FormGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(({
  controlId,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'div',
  ...props
}, ref) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    controlId
  }), [controlId]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: context,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
      ...props,
      ref: ref
    })
  });
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormGroup);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormLabel.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormLabel.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";









const FormLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: Component = 'label',
  bsPrefix,
  column = false,
  visuallyHidden = false,
  className,
  htmlFor,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_4__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'form-label');
  let columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = `${columnClass} ${columnClass}-${column}`;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, visuallyHidden && 'visually-hidden', column && columnClass);
   true ? warning__WEBPACK_IMPORTED_MODULE_2___default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component, {
    ref: ref,
    className: classes,
    htmlFor: htmlFor,
    ...props
  });
});
FormLabel.displayName = 'FormLabel';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLabel);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormRange.js"
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormRange.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormRange = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  className,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-range');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
    ...props,
    type: "range",
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix),
    id: id || controlId
  });
});
FormRange.displayName = 'FormRange';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormRange);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormSelect.js"
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormSelect.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/esm/FormContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";







const FormSelect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({
  bsPrefix,
  size,
  htmlSize,
  className,
  isValid = false,
  isInvalid = false,
  id,
  ...props
}, ref) => {
  const {
    controlId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_FormContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-select');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", {
    ...props,
    size: htmlSize,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
    id: id || controlId
  });
});
FormSelect.displayName = 'FormSelect';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSelect);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/FormText.js"
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/FormText.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";





const FormText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(
// Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
({
  bsPrefix,
  className,
  as: Component = 'small',
  muted,
  ...props
}, ref) => {
  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.useBootstrapPrefix)(bsPrefix, 'form-text');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
    ...props,
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, bsPrefix, muted && 'text-muted')
  });
});
FormText.displayName = 'FormText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormText);

/***/ },

/***/ "./node_modules/react-bootstrap/esm/Switch.js"
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Switch.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/esm/FormCheck.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



const Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_FormCheck__WEBPACK_IMPORTED_MODULE_1__["default"], {
  ...props,
  ref: ref,
  type: "switch"
}));
Switch.displayName = 'Switch';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(Switch, {
  Input: _FormCheck__WEBPACK_IMPORTED_MODULE_1__["default"].Input,
  Label: _FormCheck__WEBPACK_IMPORTED_MODULE_1__["default"].Label
}));

/***/ }

}]);