"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_user-profile_UpdateProfile_js"],{

/***/ "./resources/pos/src/components/user-profile/UpdateProfile.js"
/*!********************************************************************!*\
  !*** ./resources/pos/src/components/user-profile/UpdateProfile.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var email_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! email-validator */ "./node_modules/email-validator/index.js");
/* harmony import */ var _shared_image_picker_ImagePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/image-picker/ImagePicker */ "./resources/pos/src/shared/image-picker/ImagePicker.js");
/* harmony import */ var _store_action_updateProfileAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/action/updateProfileAction */ "./resources/pos/src/store/action/updateProfileAction.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/tab-title/TabTitle */ "./resources/pos/src/shared/tab-title/TabTitle.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/images/avatar.png */ "./resources/pos/src/assets/images/avatar.png");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var _user_profile_styles_UpdateProfileStyles_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../user-profile/styles/UpdateProfileStyles.css */ "./resources/pos/src/components/user-profile/styles/UpdateProfileStyles.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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














var UpdateProfile = function UpdateProfile() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
      return state;
    }),
    userProfile = _useSelector.userProfile;
  var Dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var imageTitle = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)('update-profile.input.change-image.label');
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      image: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    profileValue = _useState2[0],
    setProfileValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  var avtarName = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getAvatarName)(userProfile && userProfile.attributes && userProfile.attributes.image === '' && userProfile.attributes.last_name && userProfile.attributes.first_name + ' ' + userProfile.attributes.last_name);
  var newImg = userProfile && userProfile.attributes && userProfile.attributes.image === null && avtarName;
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newImg && newImg),
    _useState6 = _slicedToArray(_useState5, 2),
    imagePreviewUrl = _useState6[0],
    setImagePreviewUrl = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectImg = _useState8[0],
    setSelectImg = _useState8[1];
  var disabled = selectImg ? false : userProfile.attributes && userProfile.attributes.first_name === profileValue.first_name && userProfile.attributes.last_name === profileValue.last_name && userProfile.attributes.email === profileValue.email && userProfile.attributes.phone === profileValue.phone && userProfile.attributes.image === profileValue.image;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (userProfile) {
      var _userProfile$attribut, _userProfile$attribut2, _userProfile$attribut3, _userProfile$attribut4, _userProfile$attribut5, _userProfile$attribut6;
      setProfileValue({
        first_name: (userProfile === null || userProfile === void 0 || (_userProfile$attribut = userProfile.attributes) === null || _userProfile$attribut === void 0 ? void 0 : _userProfile$attribut.first_name) || '',
        last_name: (userProfile === null || userProfile === void 0 || (_userProfile$attribut2 = userProfile.attributes) === null || _userProfile$attribut2 === void 0 ? void 0 : _userProfile$attribut2.last_name) || '',
        email: (userProfile === null || userProfile === void 0 || (_userProfile$attribut3 = userProfile.attributes) === null || _userProfile$attribut3 === void 0 ? void 0 : _userProfile$attribut3.email) || '',
        phone: (userProfile === null || userProfile === void 0 || (_userProfile$attribut4 = userProfile.attributes) === null || _userProfile$attribut4 === void 0 ? void 0 : _userProfile$attribut4.phone) || '',
        image: (userProfile === null || userProfile === void 0 || (_userProfile$attribut5 = userProfile.attributes) === null || _userProfile$attribut5 === void 0 ? void 0 : _userProfile$attribut5.image) || ''
      });
      setImagePreviewUrl((userProfile === null || userProfile === void 0 || (_userProfile$attribut6 = userProfile.attributes) === null || _userProfile$attribut6 === void 0 ? void 0 : _userProfile$attribut6.image) || _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_11__["default"]);
    }
  }, [userProfile]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    Dispatch((0,_store_action_updateProfileAction__WEBPACK_IMPORTED_MODULE_7__.fetchProfile)());
  }, []);
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    if (!profileValue['first_name']) {
      errorss['first_name'] = 'Please enter first name';
    } else if (!profileValue['last_name']) {
      errorss['last_name'] = 'Please enter last name';
    } else if (!email_validator__WEBPACK_IMPORTED_MODULE_5__.validate(profileValue['email'])) {
      errorss['email'] = !profileValue['email'] ? 'Enter email address' : 'Please enter valid email address';
    } else if (!profileValue['phone']) {
      errorss['phone'] = 'Please enter phone number';
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onChangeInput = function onChangeInput(e) {
    e.preventDefault();
    setProfileValue(function (inputs) {
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
          return setImagePreviewUrl(fileReader.result);
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
    if (selectImg) formData.append('image', data.image);
    return formData;
  };
  var onEdit = function onEdit(event) {
    event.preventDefault();
    var Valid = handleValidation();
    if (!disabled && Valid) {
      profileValue.image = selectImg;
      setProfileValue(profileValue);
      Dispatch((0,_store_action_updateProfileAction__WEBPACK_IMPORTED_MODULE_7__.updateProfile)(prepareFormData(profileValue), navigate));
    }
  };
  var fullName = "".concat(profileValue.first_name || '', " ").concat(profileValue.last_name || '').trim() || 'Tu Perfil';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_12__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_shared_tab_title_TabTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)('update-profile.title')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
      className: "update-profile-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
            className: "profile-header",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "profile-avatar-wrap",
              children: [imagePreviewUrl && typeof imagePreviewUrl === 'string' && imagePreviewUrl.startsWith('data:') || imagePreviewUrl && imagePreviewUrl !== avtarName ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
                src: imagePreviewUrl || _assets_images_avatar_png__WEBPACK_IMPORTED_MODULE_11__["default"],
                alt: "avatar",
                style: {
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #fff',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.2)'
                }
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                style: {
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 28,
                  fontWeight: 700,
                  border: '3px solid #fff',
                  boxShadow: '0 4px 16px rgba(99,102,241,0.2)',
                  fontFamily: 'Poppins, sans-serif'
                },
                children: (avtarName === null || avtarName === void 0 ? void 0 : avtarName[0]) || '?'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("label", {
                htmlFor: "profile-image-input",
                style: {
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: 26,
                  height: 26,
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  borderRadius: '50%',
                  border: '2px solid #fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'opacity 0.18s'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("svg", {
                  viewBox: "0 0 24 24",
                  width: "12",
                  height: "12",
                  stroke: "#fff",
                  strokeWidth: "2",
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("path", {
                    d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("circle", {
                    cx: "12",
                    cy: "13",
                    r: "4"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                id: "profile-image-input",
                type: "file",
                accept: "image/jpeg,image/png",
                style: {
                  display: 'none'
                },
                onChange: handleImageChanges
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("h2", {
                style: {
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#1f2937',
                  margin: '0 0 4px',
                  fontFamily: 'Poppins, sans-serif'
                },
                children: fullName
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
                style: {
                  fontSize: 13,
                  color: '#a78bfa',
                  margin: 0,
                  fontWeight: 500,
                  fontFamily: 'Poppins, sans-serif'
                },
                children: profileValue.email || 'Actualiza tu información'
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_1__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {
              className: "profile-section-title",
              children: "Informaci\xF3n personal"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "col-md-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("user.input.first-name.label"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                    className: "required"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                  type: "text",
                  name: "first_name",
                  value: profileValue.first_name || '',
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("user.input.first-name.placeholder.label"),
                  className: "form-control",
                  autoFocus: true,
                  onChange: onChangeInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['first_name'] || null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "col-md-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)("user.input.last-name.label"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                    className: "required"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                  type: "text",
                  name: "last_name",
                  value: profileValue.last_name || '',
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)("user.input.last-name.placeholder.label"),
                  className: "form-control",
                  onChange: onChangeInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['last_name'] || null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "col-md-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('user.input.email.label'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                    className: "required"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                  type: "text",
                  name: "email",
                  value: profileValue.email || '',
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)('user.input.email.placeholder.label'),
                  className: "form-control",
                  onChange: onChangeInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors['email'] || null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                className: "col-md-6 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('user.input.phone-number.label'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                    className: "required"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                  type: "number",
                  name: "phone",
                  value: profileValue.phone || '',
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)('user.input.phone-number.placeholder.label'),
                  className: "form-control",
                  pattern: "[0-9]*",
                  min: 0,
                  onKeyPress: _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.numValidate,
                  onChange: onChangeInput
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("span", {
                  className: "text-danger d-block fs-small mt-2 fw-400",
                  children: errors['phone'] || null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                className: "col-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div", {
                  style: {
                    borderTop: '1px solid #f0ebff',
                    paddingTop: 24,
                    marginTop: 8,
                    display: 'flex',
                    gap: 12
                  },
                  children: [userProfile && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div", {
                    onClick: onEdit,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("input", {
                      className: "btn btn-primary",
                      type: "submit",
                      value: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.placeholderText)('globally.save-btn'),
                      disabled: disabled
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                    to: "/dashboard",
                    className: "btn btn-secondary",
                    children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_10__.getFormattedMessage)('globally.cancel-btn')
                  })]
                })
              })]
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateProfile);

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

/***/ "./resources/pos/src/store/action/updateProfileAction.js"
/*!***************************************************************!*\
  !*** ./resources/pos/src/store/action/updateProfileAction.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchProfile: () => (/* binding */ fetchProfile),
/* harmony export */   updateProfile: () => (/* binding */ updateProfile)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var fetchProfile = function fetchProfile() {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.EDIT_PROFILE).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.profileActionType.FETCH_PROFILE,
                payload: response.data.data
              });
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
var updateProfile = function updateProfile(profile, navigate) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.UPDATE_PROFILE, profile).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.profileActionType.UPDATE_PROFILE,
                payload: response.data.data
              });
              localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.Tokens.USER_IMAGE_URL, response.data.data.attributes.image);
              localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.Tokens.UPDATED_EMAIL, response.data.data.attributes.email);
              localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.Tokens.UPDATED_FIRST_NAME, response.data.data.attributes.first_name);
              localStorage.setItem(_constants__WEBPACK_IMPORTED_MODULE_1__.Tokens.UPDATED_LAST_NAME, response.data.data.attributes.last_name);
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_3__.getFormattedMessage)('update-profile.success.update.message')
              }));
              navigate('/dashboard');
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./resources/pos/src/components/user-profile/styles/UpdateProfileStyles.css"
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./resources/pos/src/components/user-profile/styles/UpdateProfileStyles.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ─────────────────────────────────────────\r\n   UPDATE PROFILE — Purple Theme\r\n   Importar en UpdateProfile.jsx:\r\n   import './UpdateProfile.css';\r\n───────────────────────────────────────── */\r\n\r\n/* ══════════════════════════════════════\r\n   CONTENEDOR\r\n══════════════════════════════════════ */\r\n.update-profile-container {\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.update-profile-container .card {\r\n    border: 1px solid #ede9fe !important;\r\n    border-radius: 16px !important;\r\n    box-shadow: 0 4px 24px rgba(99, 102, 241, 0.07) !important;\r\n    background: #ffffff !important;\r\n    overflow: hidden !important;\r\n}\r\n\r\n.update-profile-container .card-body {\r\n    padding: 32px 36px !important;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   HEADER DE PERFIL\r\n══════════════════════════════════════ */\r\n.profile-header {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 24px;\r\n    padding: 24px 28px;\r\n    background: linear-gradient(135deg, #667eea15, #764ba215);\r\n    border-bottom: 1px solid #ede9fe;\r\n    margin: -32px -36px 32px;\r\n}\r\n\r\n.profile-avatar-wrap {\r\n    position: relative;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.profile-avatar-wrap img,\r\n.profile-avatar-wrap .avatar-circle {\r\n    width: 80px !important;\r\n    height: 80px !important;\r\n    border-radius: 50% !important;\r\n    -o-object-fit: cover !important;\r\n       object-fit: cover !important;\r\n    border: 3px solid #ffffff !important;\r\n    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.2) !important;\r\n}\r\n\r\n.profile-avatar-label {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 26px;\r\n    height: 26px;\r\n    background: linear-gradient(135deg, #667eea, #764ba2);\r\n    border-radius: 50%;\r\n    border: 2px solid #ffffff;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    cursor: pointer;\r\n    transition: opacity 0.18s;\r\n}\r\n\r\n.profile-avatar-label:hover {\r\n    opacity: 0.85;\r\n}\r\n\r\n.profile-avatar-label svg {\r\n    width: 12px;\r\n    height: 12px;\r\n    stroke: #ffffff;\r\n    fill: none;\r\n}\r\n\r\n.profile-header-info h2 {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    color: #1f2937;\r\n    margin: 0 0 4px;\r\n}\r\n\r\n.profile-header-info p {\r\n    font-size: 13px;\r\n    color: #a78bfa;\r\n    margin: 0;\r\n    font-weight: 500;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   SECTION TITLE\r\n══════════════════════════════════════ */\r\n.profile-section-title {\r\n    font-size: 11px;\r\n    font-weight: 700;\r\n    color: #a78bfa;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.08em;\r\n    margin-bottom: 16px;\r\n    padding-bottom: 8px;\r\n    border-bottom: 1px solid #f0ebff;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   LABELS\r\n══════════════════════════════════════ */\r\n.update-profile-container .form-label {\r\n    font-size: 12px !important;\r\n    font-weight: 600 !important;\r\n    color: #4b5563 !important;\r\n    text-transform: uppercase !important;\r\n    letter-spacing: 0.04em !important;\r\n    margin-bottom: 6px !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n    display: block !important;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   INPUTS\r\n══════════════════════════════════════ */\r\n.update-profile-container .form-control {\r\n    background: #ffffff !important;\r\n    border: 1.5px solid #e9d5ff !important;\r\n    border-radius: 10px !important;\r\n    font-size: 13.5px !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n    color: #374151 !important;\r\n    padding: 10px 14px !important;\r\n    height: auto !important;\r\n    transition: border-color 0.18s, box-shadow 0.18s !important;\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n}\r\n\r\n.update-profile-container .form-control:focus {\r\n    border-color: #6366f1 !important;\r\n    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1) !important;\r\n    background: #ffffff !important;\r\n}\r\n\r\n.update-profile-container .form-control::-moz-placeholder {\r\n    color: #c4b5fd !important;\r\n    font-size: 13px !important;\r\n}\r\n\r\n.update-profile-container .form-control::placeholder {\r\n    color: #c4b5fd !important;\r\n    font-size: 13px !important;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   ERRORES\r\n══════════════════════════════════════ */\r\n.update-profile-container .text-danger {\r\n    font-size: 11.5px !important;\r\n    color: #e24b4a !important;\r\n    font-weight: 500 !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   BOTONES\r\n══════════════════════════════════════ */\r\n.update-profile-container .btn-primary {\r\n    background: linear-gradient(135deg, #667eea, #764ba2) !important;\r\n    border: none !important;\r\n    color: #ffffff !important;\r\n    border-radius: 10px !important;\r\n    font-size: 13.5px !important;\r\n    font-weight: 600 !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n    padding: 10px 28px !important;\r\n    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.28) !important;\r\n    transition: opacity 0.18s, transform 0.12s !important;\r\n    cursor: pointer !important;\r\n}\r\n\r\n.update-profile-container .btn-primary:hover:not(:disabled) {\r\n    opacity: 0.9 !important;\r\n}\r\n\r\n.update-profile-container .btn-primary:active:not(:disabled) {\r\n    transform: scale(0.98) !important;\r\n}\r\n\r\n.update-profile-container .btn-primary:disabled {\r\n    opacity: 0.45 !important;\r\n    cursor: not-allowed !important;\r\n}\r\n\r\n.update-profile-container .btn-secondary {\r\n    background: #f5f3ff !important;\r\n    border: 1.5px solid #ddd6fe !important;\r\n    color: #6366f1 !important;\r\n    border-radius: 10px !important;\r\n    font-size: 13.5px !important;\r\n    font-weight: 500 !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n    padding: 10px 28px !important;\r\n    transition: all 0.18s !important;\r\n    box-shadow: none !important;\r\n    text-decoration: none !important;\r\n    display: inline-flex !important;\r\n    align-items: center !important;\r\n}\r\n\r\n.update-profile-container .btn-secondary:hover {\r\n    background: #ede9fe !important;\r\n    border-color: #a78bfa !important;\r\n    color: #4f46e5 !important;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   IMAGE PICKER — ocultar el default feo\r\n══════════════════════════════════════ */\r\n.update-profile-container .image-picker-wrap input[type=\"file\"] {\r\n    display: none !important;\r\n}\r\n\r\n.update-profile-container .image-picker-wrap label {\r\n    display: inline-flex !important;\r\n    align-items: center !important;\r\n    gap: 8px !important;\r\n    background: #f5f3ff !important;\r\n    border: 1.5px dashed #c4b5fd !important;\r\n    border-radius: 10px !important;\r\n    padding: 8px 16px !important;\r\n    font-size: 12.5px !important;\r\n    font-weight: 500 !important;\r\n    color: #6366f1 !important;\r\n    cursor: pointer !important;\r\n    transition: all 0.18s !important;\r\n    font-family: 'Poppins', sans-serif !important;\r\n}\r\n\r\n.update-profile-container .image-picker-wrap label:hover {\r\n    background: #ede9fe !important;\r\n    border-color: #a78bfa !important;\r\n}\r\n\r\n/* ══════════════════════════════════════\r\n   CAMPO REQUERIDO\r\n══════════════════════════════════════ */\r\n.update-profile-container .required::after {\r\n    content: ' *';\r\n    color: #e24b4a;\r\n    font-size: 13px;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./resources/pos/src/components/user-profile/styles/UpdateProfileStyles.css"
/*!**********************************************************************************!*\
  !*** ./resources/pos/src/components/user-profile/styles/UpdateProfileStyles.css ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/laravel-mix/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_UpdateProfileStyles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./UpdateProfileStyles.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[5].oneOf[1].use[2]!./resources/pos/src/components/user-profile/styles/UpdateProfileStyles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_laravel_mix_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_UpdateProfileStyles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_5_oneOf_1_use_2_UpdateProfileStyles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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