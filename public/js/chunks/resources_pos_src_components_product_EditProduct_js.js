"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_pos_src_components_product_EditProduct_js"],{

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

/***/ "./resources/pos/src/components/product/EditProduct.js"
/*!*************************************************************!*\
  !*** ./resources/pos/src/components/product/EditProduct.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var _ProductForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductForm */ "./resources/pos/src/components/product/ProductForm.js");
/* harmony import */ var _header_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/HeaderTitle */ "./resources/pos/src/components/header/HeaderTitle.js");
/* harmony import */ var _MasterLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MasterLayout */ "./resources/pos/src/components/MasterLayout.js");
/* harmony import */ var _store_action_productUnitAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/action/productUnitAction */ "./resources/pos/src/store/action/productUnitAction.js");
/* harmony import */ var _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action/unitsAction */ "./resources/pos/src/store/action/unitsAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/loaders/TopProgressBar */ "./resources/pos/src/shared/components/loaders/TopProgressBar.js");
/* harmony import */ var _store_action_baseUnitsAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/action/baseUnitsAction */ "./resources/pos/src/store/action/baseUnitsAction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }













var EditProduct = function EditProduct(props) {
  var _singleProduct$;
  var fetchMainProduct = props.fetchMainProduct,
    products = props.products,
    fetchAllBaseUnits = props.fetchAllBaseUnits,
    base = props.base;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    singleProduct = _useState2[0],
    setSingleProduct = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchAllBaseUnits();
    fetchMainProduct(id);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (products.length == 1) {
      setSingleProduct(products);
    }
  }, [products]);
  var subProduct = singleProduct.length >= 1 && ((_singleProduct$ = singleProduct[0]) === null || _singleProduct$ === void 0 ? void 0 : _singleProduct$.attributes.products[0]);
  var getSaleUnit = subProduct && subProduct.sale_unit_name ? {
    label: subProduct.sale_unit_name.name,
    value: subProduct.sale_unit_name.id
  } : '';
  var getPurchaseUnit = subProduct && subProduct.purchase_unit_name ? {
    label: subProduct.purchase_unit_name.name,
    value: subProduct.purchase_unit_name.id
  } : '';
  var mainProductItemsValue = singleProduct.length >= 1 && singleProduct.map(function (product) {
    return {
      name: product === null || product === void 0 ? void 0 : product.attributes.name,
      code: product === null || product === void 0 ? void 0 : product.attributes.code,
      product_type: product === null || product === void 0 ? void 0 : product.attributes.product_type,
      product_category_id: {
        value: subProduct === null || subProduct === void 0 ? void 0 : subProduct.product_category_id,
        label: subProduct === null || subProduct === void 0 ? void 0 : subProduct.product_category_name
      },
      brand_id: {
        value: subProduct === null || subProduct === void 0 ? void 0 : subProduct.brand_id,
        label: subProduct === null || subProduct === void 0 ? void 0 : subProduct.brand_name
      },
      barcode_symbol: subProduct === null || subProduct === void 0 ? void 0 : subProduct.barcode_symbol,
      product_unit: Number(subProduct === null || subProduct === void 0 ? void 0 : subProduct.product_unit),
      sale_unit: getSaleUnit,
      purchase_unit: getPurchaseUnit,
      quantity_limit: subProduct === null || subProduct === void 0 ? void 0 : subProduct.quantity_limit,
      notes: subProduct === null || subProduct === void 0 ? void 0 : subProduct.notes,
      images: product === null || product === void 0 ? void 0 : product.attributes.images,
      status_id: {
        label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)("status.filter.received.label"),
        value: 1
      },
      isEdit: true,
      id: product.id
    };
  });
  var getProductUnit = mainProductItemsValue && base.filter(function (fill) {
    var _mainProductItemsValu;
    return Number(fill === null || fill === void 0 ? void 0 : fill.id) === Number((_mainProductItemsValu = mainProductItemsValue[0]) === null || _mainProductItemsValu === void 0 ? void 0 : _mainProductItemsValu.product_unit);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_MasterLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_shared_components_loaders_TopProgressBar__WEBPACK_IMPORTED_MODULE_10__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_header_HeaderTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_9__.getFormattedMessage)('product.edit.title'),
      to: "/app/products"
    }), mainProductItemsValue.length >= 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ProductForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
      singleProduct: mainProductItemsValue,
      productUnit: getProductUnit,
      baseUnits: base,
      id: id
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var products = state.products,
    base = state.base;
  return {
    products: products,
    base: base
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchMainProduct: _store_action_productAction__WEBPACK_IMPORTED_MODULE_3__.fetchMainProduct,
  fetchAllBaseUnits: _store_action_baseUnitsAction__WEBPACK_IMPORTED_MODULE_11__.fetchAllBaseUnits,
  productUnitDropdown: _store_action_productUnitAction__WEBPACK_IMPORTED_MODULE_7__.productUnitDropdown,
  fetchAllunits: _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_8__.fetchAllunits
})(EditProduct));

/***/ },

/***/ "./resources/pos/src/components/product/MultipleImage.js"
/*!***************************************************************!*\
  !*** ./resources/pos/src/components/product/MultipleImage.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Button.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Form.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Image.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_action_productImageAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action/productImageAction */ "./resources/pos/src/store/action/productImageAction.js");
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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









var MultipleImage = function MultipleImage(props) {
  var fetchFiles = props.fetchFiles,
    product = props.product,
    deleteProductImage = props.deleteProductImage,
    transferImage = props.transferImage;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    images = _useState2[0],
    setImages = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    newImages = _useState4[0],
    setNewImages = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    oldImages = _useState6[0],
    setOldImages = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    imageId = _useState8[0],
    setImageId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    imageIdArray = _useState0[0],
    setImageIdArray = _useState0[1];
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchFiles(_toConsumableArray(images));
  }, [images]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setOldImages(product && product[0].images.imageUrls && product[0].images.imageUrls.map(function (item) {
      return item;
    }));
    transferImage(product && product[0].images.imageUrls && product[0].images.imageUrls.map(function (item) {
      return item;
    }));
    setImageIdArray(product && product[0].images.id && product[0].images.id.map(function (id) {
      return id;
    }));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (images.length < 1) return;
    var newImageUrls = [];
    images.forEach(function (image) {
      return newImageUrls.push(URL.createObjectURL(image));
    });
    setNewImages(newImageUrls);
  }, [images]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setImageId(imageId && deleteProductImage);
  }, [oldImages]);
  var onRemove = function onRemove(index) {
    var imgFiles = images.filter(function (file, i) {
      return i !== index;
    });
    var imgNewFiles = newImages.filter(function (previewImage, i) {
      return i !== index;
    });
    dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_6__.addToast)({
      text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('product.image.success.delete.message')
    }));
    setImages(imgFiles);
    setNewImages(imgNewFiles);
    transferImage(imgFiles);
    if (imgFiles.length === 0) {
      document.getElementById('productImage').value = "";
    }
  };
  var oldRemoveOld = function oldRemoveOld(index) {
    var newFiles = oldImages.filter(function (file, i) {
      return i !== index;
    });
    var imageId = imageIdArray.filter(function (id, i) {
      return i === index;
    });
    var leftImageIdArray = imageIdArray.filter(function (id, i) {
      return i !== index;
    });
    deleteProductImage(imageId[0]);
    setOldImages(newFiles);
    setImageIdArray(leftImageIdArray);
    transferImage(newFiles);
  };
  var onUploadImage = function onUploadImage(e) {
    e.preventDefault();
    setImages([].concat(_toConsumableArray(e.target.files), _toConsumableArray(images)));
    dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_6__.addToast)({
      text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_7__.getFormattedMessage)('product.image.success.upload.message')
    }));
  };
  var handleClick = function handleClick(event) {
    var _ref = event || {},
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? {} : _ref$target;
    target.value = '';
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
      className: "mb-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
        type: "file",
        accept: ".png, .jpg, .jpeg",
        id: "productImage",
        onClick: handleClick,
        className: "upload-input-file",
        multiple: true,
        onChange: onUploadImage
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "imagePreviewContainer pt-3 p-0 d-flex flex-wrap",
      children: [newImages && newImages.map(function (newImage, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "previewItem custom-preview position-relative cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "imagePreview",
            src: newImage
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "button",
            onClick: function onClick() {
              return onRemove(i);
            },
            className: "remove-btn p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrash
            })
          })]
        }, i);
      }), oldImages && oldImages.map(function (oldImage, i) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "previewItem custom-preview position-relative cursor-pointer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "imagePreview",
            src: oldImage
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "button",
            onClick: function onClick() {
              return oldRemoveOld(i);
            },
            className: "remove-btn p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrash
            })
          })]
        }, i);
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, {
  deleteProductImage: _store_action_productImageAction__WEBPACK_IMPORTED_MODULE_5__.deleteProductImage
})(MultipleImage));

/***/ },

/***/ "./resources/pos/src/components/product/ProductForm.js"
/*!*************************************************************!*\
  !*** ./resources/pos/src/components/product/ProductForm.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Button.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js");
/* harmony import */ var _MultipleImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MultipleImage */ "./resources/pos/src/components/product/MultipleImage.js");
/* harmony import */ var _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/action/unitsAction */ "./resources/pos/src/store/action/unitsAction.js");
/* harmony import */ var _store_action_productCategoryAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action/productCategoryAction */ "./resources/pos/src/store/action/productCategoryAction.js");
/* harmony import */ var _store_action_brandsAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/action/brandsAction */ "./resources/pos/src/store/action/brandsAction.js");
/* harmony import */ var _store_action_productAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/action/productAction */ "./resources/pos/src/store/action/productAction.js");
/* harmony import */ var _store_action_productUnitAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/action/productUnitAction */ "./resources/pos/src/store/action/productUnitAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _shared_option_lists_taxType_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/option-lists/taxType.json */ "./resources/pos/src/shared/option-lists/taxType.json");
/* harmony import */ var _shared_option_lists_barcode_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/option-lists/barcode.json */ "./resources/pos/src/shared/option-lists/barcode.json");
/* harmony import */ var _shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/modelFooter */ "./resources/pos/src/shared/components/modelFooter.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _store_action_warehouseAction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../store/action/warehouseAction */ "./resources/pos/src/store/action/warehouseAction.js");
/* harmony import */ var _store_action_supplierAction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store/action/supplierAction */ "./resources/pos/src/store/action/supplierAction.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! dayjs/plugin/utc */ "./node_modules/dayjs/plugin/utc.js");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! dayjs/plugin/localizedFormat */ "./node_modules/dayjs/plugin/localizedFormat.js");
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! dayjs/plugin/isoWeek */ "./node_modules/dayjs/plugin/isoWeek.js");
/* harmony import */ var dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! dayjs/plugin/relativeTime */ "./node_modules/dayjs/plugin/relativeTime.js");
/* harmony import */ var dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");
/* harmony import */ var _units_UnitsForm__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../units/UnitsForm */ "./resources/pos/src/components/units/UnitsForm.js");
/* harmony import */ var _store_action_variationAction__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../store/action/variationAction */ "./resources/pos/src/store/action/variationAction.js");
/* harmony import */ var _shared_select_ReactMultiSelect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shared/select/ReactMultiSelect */ "./resources/pos/src/shared/select/ReactMultiSelect.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
























dayjs__WEBPACK_IMPORTED_MODULE_20___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_21___default()));
dayjs__WEBPACK_IMPORTED_MODULE_20___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_22___default()));
dayjs__WEBPACK_IMPORTED_MODULE_20___default().extend((dayjs_plugin_isoWeek__WEBPACK_IMPORTED_MODULE_23___default()));
dayjs__WEBPACK_IMPORTED_MODULE_20___default().extend((dayjs_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_24___default()));








var ProductForm = function ProductForm(props) {
  var _variations$filter$, _singleProduct$, _productValue$product2, _productValue$product3, _productValue$product4, _productValue$product5;
  var addProductData = props.addProductData,
    warehouses = props.warehouses,
    suppliers = props.suppliers,
    id = props.id,
    editMainProduct = props.editMainProduct,
    singleProduct = props.singleProduct,
    brands = props.brands,
    fetchAllBrands = props.fetchAllBrands,
    fetchAllProductCategories = props.fetchAllProductCategories,
    productCategories = props.productCategories,
    fetchUnits = props.fetchUnits,
    productUnits = props.productUnits,
    productUnitDropdown = props.productUnitDropdown,
    frontSetting = props.frontSetting,
    fetchAllWarehouses = props.fetchAllWarehouses,
    fetchAllSuppliers = props.fetchAllSuppliers,
    addUnit = props.addUnit,
    baseUnits = props.baseUnits,
    productUnit = props.productUnit;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var variations = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.variations;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      date: new Date(),
      name: "",
      code: "",
      product_category_id: "",
      brand_id: "",
      barcode_symbol: "",
      product_unit: "",
      sale_unit: "",
      purchase_unit: "",
      sale_quantity_limit: "",
      notes: "",
      images: [],
      warehouse_id: "",
      supplier_id: "",
      product_type: "",
      variation: "",
      variation_type: [],
      status_id: {
        label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("status.filter.received.label"),
        value: 1
      },
      isEdit: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    productValue = _useState2[0],
    setProductValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    variationTypesData = _useState4[0],
    setVariationTypesData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      product_cost: "",
      product_price: "",
      stock_alert: "",
      order_tax: "",
      tax_type: "",
      add_stock: ""
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    singleProductTypeData = _useState6[0],
    setSingleProductTypeData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    unitModel = _useState8[0],
    setUnitModel = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    removedImage = _useState0[0],
    setRemovedImage = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    isClearDropdown = _useState10[0],
    setIsClearDropdown = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState12 = _slicedToArray(_useState11, 2),
    isDropdown = _useState12[0],
    setIsDropdown = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    multipleFiles = _useState14[0],
    setMultipleFiles = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState16 = _slicedToArray(_useState15, 2),
    errors = _useState16[0],
    setErrors = _useState16[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchAllBrands();
    fetchAllProductCategories();
    fetchUnits();
    fetchAllWarehouses();
    fetchAllSuppliers();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (singleProduct && productUnit) {
      var _productUnit$;
      productUnitDropdown((_productUnit$ = productUnit[0]) === null || _productUnit$ === void 0 ? void 0 : _productUnit$.id);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (productValue.variation !== "" && productValue.isEdit === false) {
      setProductValue(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          variation_type: ""
        });
      });
      setVariationTypesData([]);
    }
  }, [productValue.variation]);
  var variationsOptions = (variations === null || variations === void 0 ? void 0 : variations.length) > 0 ? variations === null || variations === void 0 ? void 0 : variations.map(function (variation) {
    return {
      id: variation.id,
      name: variation.attributes.name
    };
  }) : [];
  var variationTypesOptions = variations === null || variations === void 0 || (_variations$filter$ = variations.filter(function (variation) {
    var _productValue$variati;
    return (variation === null || variation === void 0 ? void 0 : variation.id) === ((_productValue$variati = productValue.variation) === null || _productValue$variati === void 0 ? void 0 : _productValue$variati.value);
  })[0]) === null || _variations$filter$ === void 0 || (_variations$filter$ = _variations$filter$.attributes) === null || _variations$filter$ === void 0 || (_variations$filter$ = _variations$filter$.variation_types) === null || _variations$filter$ === void 0 ? void 0 : _variations$filter$.map(function (variationType) {
    return {
      value: variationType.id,
      label: variationType.name
    };
  });
  var newTax = singleProduct && _shared_option_lists_taxType_json__WEBPACK_IMPORTED_MODULE_13__.filter(function (tax) {
    return singleProduct[0].tax_type === tax.value;
  });
  var newBarcode = singleProduct && _shared_option_lists_barcode_json__WEBPACK_IMPORTED_MODULE_14__.filter(function (barcode) {
    return singleProduct[0].barcode_symbol.toString() === barcode.value;
  });
  var disabled = multipleFiles.length !== 0 ? false : singleProduct && productValue.product_unit[0] && productValue.product_unit[0].value === singleProduct[0].product_unit && productValue.barcode_symbol[0] && productValue.barcode_symbol[0].value === singleProduct[0].barcode_symbol.toString() && singleProduct[0].name === productValue.name && singleProduct[0].notes === productValue.notes && singleProduct[0].product_price === productValue.product_price && ((_singleProduct$ = singleProduct[0]) === null || _singleProduct$ === void 0 || (_singleProduct$ = _singleProduct$.stock_alert) === null || _singleProduct$ === void 0 ? void 0 : _singleProduct$.toString()) === productValue.stock_alert && singleProduct[0].product_cost === productValue.product_cost && singleProduct[0].code === productValue.code && JSON.stringify(singleProduct[0].order_tax) === productValue.order_tax && singleProduct[0].quantity_limit === productValue.sale_quantity_limit && singleProduct[0].brand_id.value === productValue.brand_id.value && newTax.length === productValue.tax_type.length && singleProduct[0].product_category_id.value === productValue.product_category_id.value && JSON.stringify(singleProduct[0].images.imageUrls) === JSON.stringify(removedImage);
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(singleProduct && singleProduct[0] ? [{
      label: singleProduct[0].brand_id.label,
      value: singleProduct[0].brand_id.value
    }] : null),
    _useState18 = _slicedToArray(_useState17, 1),
    selectedBrand = _useState18[0];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newBarcode && newBarcode[0] ? [{
      label: newBarcode[0].label,
      value: newBarcode[0].value
    }] : null),
    _useState20 = _slicedToArray(_useState19, 1),
    selectedBarcode = _useState20[0];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(singleProduct && singleProduct[0] ? [{
      label: singleProduct[0].product_category_id.label,
      value: singleProduct[0].product_category_id.value
    }] : null),
    _useState22 = _slicedToArray(_useState21, 1),
    selectedProductCategory = _useState22[0];
  var saleUnitOption = productUnits && productUnits.length && productUnits.map(function (productUnit) {
    return {
      value: productUnit === null || productUnit === void 0 ? void 0 : productUnit.id,
      label: productUnit.attributes.name
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (singleProduct) {
      var _productUnit$2, _productUnit$3;
      setProductValue({
        name: singleProduct ? singleProduct[0].name : "",
        code: singleProduct ? singleProduct[0].code : "",
        product_category_id: singleProduct ? singleProduct[0].product_category_id : "",
        brand_id: singleProduct ? singleProduct[0].brand_id : "",
        barcode_symbol: selectedBarcode,
        product_unit: singleProduct ? {
          value: (_productUnit$2 = productUnit[0]) === null || _productUnit$2 === void 0 ? void 0 : _productUnit$2.id,
          label: (_productUnit$3 = productUnit[0]) === null || _productUnit$3 === void 0 ? void 0 : _productUnit$3.attributes.name
        } : "",
        sale_unit: singleProduct ? singleProduct[0].sale_unit : "",
        purchase_unit: singleProduct ? singleProduct[0].purchase_unit && singleProduct[0].purchase_unit : "",
        stock_alert: singleProduct ? singleProduct[0].stock_alert ? singleProduct[0].stock_alert : 0 : 0,
        sale_quantity_limit: singleProduct ? singleProduct[0].quantity_limit ? singleProduct[0].quantity_limit : "" : "",
        notes: singleProduct ? singleProduct[0].notes : "",
        images: singleProduct ? singleProduct[0].images : "",
        isEdit: singleProduct ? singleProduct[0].is_Edit : false
      });
    }
  }, []);
  var onChangeFiles = function onChangeFiles(file) {
    setMultipleFiles(file);
  };
  var transferImage = function transferImage(item) {
    setRemovedImage(item);
    setMultipleFiles([]);
  };
  var handleProductUnitChange = function handleProductUnitChange(obj) {
    productUnitDropdown(obj.value);
    setIsClearDropdown(false);
    setIsDropdown(false);
    setProductValue(_objectSpread(_objectSpread({}, productValue), {}, {
      product_unit: obj
    }));
    setErrors({});
  };
  var handleSaleUnitChange = function handleSaleUnitChange(obj) {
    setIsClearDropdown(true);
    setProductValue(_objectSpread(_objectSpread({}, productValue), {}, {
      sale_unit: obj
    }));
    setErrors({});
  };
  var handlePurchaseUnitChange = function handlePurchaseUnitChange(obj) {
    setIsDropdown(true);
    setProductValue(_objectSpread(_objectSpread({}, productValue), {}, {
      purchase_unit: obj
    }));
    setErrors({});
  };
  var onBrandChange = function onBrandChange(obj) {
    setProductValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        brand_id: obj
      });
    });
    setErrors({});
  };
  var onBarcodeChange = function onBarcodeChange(obj) {
    setProductValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        barcode_symbol: obj
      });
    });
    setErrors({});
  };
  var onProductCategoryChange = function onProductCategoryChange(obj) {
    setProductValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        product_category_id: obj
      });
    });
    setErrors({});
  };
  var productTypesOptionsObj = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_17__.productTypesOptions);

  // tax type dropdown functionality
  var taxTypeFilterOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_17__.taxMethodOptions);
  var defaultTaxType = singleProduct ? singleProduct[0].tax_type === "1" ? {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("tax-type.filter.exclusive.label")
  } : {
    value: 2,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("tax-type.filter.inclusive.label")
  } || singleProduct[0].tax_type === "2" ? {
    value: 2,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("tax-type.filter.inclusive.label")
  } : {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("tax-type.filter.exclusive.label")
  } : {
    value: 1,
    label: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("tax-type.filter.exclusive.label")
  };
  var onTaxTypeChange = function onTaxTypeChange(obj, variation_type_id) {
    if (variation_type_id) {
      setVariationTypesData(function (prev) {
        return prev.map(function (variationTypeData) {
          if (variationTypeData.variation_type_id === variation_type_id) {
            return _objectSpread(_objectSpread({}, variationTypeData), {}, {
              tax_type: obj
            });
          } else {
            return variationTypeData;
          }
        });
      });
    } else {
      setSingleProductTypeData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          tax_type: obj
        });
      });
    }
    setErrors({});
  };
  var onProductTypeChange = function onProductTypeChange(obj) {
    setProductValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        product_type: obj
      });
    });
    if (obj.value === 2) {
      dispatch((0,_store_action_variationAction__WEBPACK_IMPORTED_MODULE_28__.fetchAllVariations)());
    }
    setErrors({});
  };
  var onVariationChange = function onVariationChange(obj) {
    setProductValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        variation: obj
      });
    });
    setErrors({});
  };
  var onVariationTypesChange = function onVariationTypesChange(array) {
    setProductValue(function (productValue) {
      return _objectSpread(_objectSpread({}, productValue), {}, {
        variation_type: array
      });
    });
    if (variationTypesData.length <= 0) {
      setVariationTypesData(array === null || array === void 0 ? void 0 : array.map(function (variationType) {
        var _productValue$variati2;
        return {
          variation_id: (_productValue$variati2 = productValue.variation) === null || _productValue$variati2 === void 0 ? void 0 : _productValue$variati2.value,
          variation_type_id: variationType === null || variationType === void 0 ? void 0 : variationType.value,
          variation_type: variationType === null || variationType === void 0 ? void 0 : variationType.label,
          product_cost: "",
          product_price: "",
          stock_alert: 0,
          order_tax: 0,
          tax_type: "",
          add_stock: ""
        };
      }));
    } else {
      var foundVariationTypeId = array.map(function (item) {
        return item.value;
      });
      var commonVariationTypes = variationTypesData.filter(function (item) {
        return foundVariationTypeId.includes(item.variation_type_id);
      });
      var commonVariationTypesIds = commonVariationTypes.map(function (item) {
        return item.variation_type_id;
      });
      var newVariationType = array.filter(function (variationType) {
        return !commonVariationTypesIds.includes(variationType.value);
      });
      if (newVariationType.length > 0) {
        var _productValue$variati3, _newVariationType$, _newVariationType$2;
        setVariationTypesData([].concat(_toConsumableArray(commonVariationTypes), [{
          variation_id: (_productValue$variati3 = productValue.variation) === null || _productValue$variati3 === void 0 ? void 0 : _productValue$variati3.value,
          variation_type_id: (_newVariationType$ = newVariationType[0]) === null || _newVariationType$ === void 0 ? void 0 : _newVariationType$.value,
          variation_type: (_newVariationType$2 = newVariationType[0]) === null || _newVariationType$2 === void 0 ? void 0 : _newVariationType$2.label,
          product_cost: "",
          product_price: "",
          stock_alert: 0,
          order_tax: 0,
          tax_type: "",
          add_stock: ""
        }]));
      } else {
        setVariationTypesData(commonVariationTypes);
      }
    }
    setErrors({});
  };
  var onWarehouseChange = function onWarehouseChange(obj) {
    setProductValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, {
        warehouse_id: obj
      });
    });
    setErrors({});
  };
  var onSupplierChange = function onSupplierChange(obj) {
    setProductValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, {
        supplier_id: obj
      });
    });
    setErrors({});
  };
  var onStatusChange = function onStatusChange(obj) {
    setProductValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, {
        status_id: obj
      });
    });
  };
  var statusFilterOptions = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedOptions)(_constants__WEBPACK_IMPORTED_MODULE_17__.saleStatusOptions);
  var statusDefaultValue = statusFilterOptions.map(function (option) {
    return {
      value: option.id,
      label: option.name
    };
  });
  var validateVariationTypesData = function validateVariationTypesData() {
    var invalid = true;
    var error = {};
    variationTypesData.map(function (variationType) {
      if (Object.keys(error).length <= 0 && (!variationType.product_cost || variationType.product_cost === "")) {
        error["".concat(variationType.variation_type_id, "_product_cost")] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-cost.validate.label");
      } else if (Object.keys(error).length <= 0 && (!variationType.product_price || variationType.product_price === "")) {
        error["".concat(variationType.variation_type_id, "_product_price")] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-price.validate.label");
      } else if (Object.keys(error).length <= 0 && (!variationType.tax_type || variationType.tax_type === "")) {
        error["".concat(variationType.variation_type_id, "_tax_type")] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.tax-type.validate.label");
      } else if (Object.keys(error).length <= 0 && (!variationType.add_stock || variationType.add_stock === "")) {
        error["".concat(variationType.variation_type_id, "_add_stock")] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("purchase.product.quantity.validate.label");
      } else if (Object.keys(error).length <= 0 && variationType.order_tax > 100) {
        error["".concat(variationType.variation_type_id, "_order_tax")] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('product.input.order-tax.valid.validate.label');
      }
    });
    if (Object.keys(error).length <= 0) {
      invalid = false;
    }

    // Don't Remove thi setTimeout. !!! SetTimeout is placed here because js uses synchronously and so the set function cannot wait until the map loop on the array, so by putting setTimeout the set method is made a bit slower than the loop.
    setTimeout(function () {
      setErrors(error);
    }, 0);
    return invalid;
  };
  var handleValidation = function handleValidation() {
    var _productValue$barcode;
    var errorss = {};
    var isValid = false;
    var codeRegex = /^[A-Z0-9]+$/;
    if (!productValue["name"] || productValue["name"].trim() === "") {
      errorss["name"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("globally.input.name.validate.label");
    } else if (!productValue["code"]) {
      errorss["code"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.code.validate.label");
    } else if (!productValue["product_category_id"]) {
      errorss["product_category_id"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-category.validate.label");
    } else if (!productValue["brand_id"]) {
      errorss["brand_id"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.brand.validate.label");
    } else if (!productValue["barcode_symbol"]) {
      errorss["barcode_symbol"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.barcode-symbology.validate.label");
    } else if (productValue && productValue["code"] && ((_productValue$barcode = productValue.barcode_symbol) === null || _productValue$barcode === void 0 ? void 0 : _productValue$barcode.value) == 2 && !codeRegex.test(productValue["code"])) {
      errorss["code"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("barcode-symbol-uppercase-validation-message");
    } else if (!productValue["product_unit"]) {
      errorss["product_unit"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-unit.validate.label");
    } else if (!productValue["sale_unit"]) {
      errorss["sale_unit"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.sale-unit.validate.label");
    } else if (isClearDropdown === false) {
      errorss["sale_unit"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.sale-unit.validate.label");
    } else if (!productValue["purchase_unit"]) {
      errorss["purchase_unit"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.purchase-unit.validate.label");
    } else if (isDropdown === false) {
      errorss["purchase_unit"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.purchase-unit.validate.label");
    } else if (productValue["notes"] && productValue["notes"].length > 100) {
      errorss["notes"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("globally.input.notes.validate.label");
    } else if (productValue["isEdit"] === false) {
      if (productValue.product_type === "" && !productValue.product_type.label) {
        errorss["product_type"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.type.input.validation.error");
      } else if (productValue.product_type.value === 2 && productValue.variation === "" && !productValue.variation.label) {
        errorss["variation"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variation.select.validation.error.message");
      } else if (productValue.product_type.value === 2 && productValue.variation_type === "" && !productValue.variation_type.label) {
        errorss["variation_type"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variation.type.select.validate.error.message");
      } else if (productValue.product_type.value === 2 && validateVariationTypesData()) {} else if (productValue.product_type.value === 1 && (!singleProductTypeData.product_cost || singleProductTypeData.product_cost === "")) {
        errorss["product_cost"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-cost.validate.label");
      } else if (productValue.product_type.value === 1 && (!singleProductTypeData.product_price || singleProductTypeData.product_price === "")) {
        errorss["product_price"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-price.validate.label");
      } else if (productValue.product_type.value === 1 && (!singleProductTypeData.tax_type || singleProductTypeData.tax_type === "")) {
        errorss["tax_type"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.tax-type.validate.label");
      } else if (productValue.product_type.value === 1 && singleProductTypeData.order_tax && singleProductTypeData.order_tax > 100) {
        errorss["order_tax"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)('product.input.order-tax.valid.validate.label');
      } else if (!productValue["warehouse_id"]) {
        errorss["warehouse_id"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("purchase.select.warehouse.validate.label");
      } else if (productValue.product_type.value === 1 && (!singleProductTypeData.add_stock || singleProductTypeData.add_stock === "")) {
        errorss["add_stock"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("purchase.product.quantity.validate.label");
      } else if (!productValue["supplier_id"]) {
        errorss["supplier_id"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("purchase.select.supplier.validate.label");
      } else if (!productValue["status_id"]) {
        errorss["status_id"] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("globally.status.validate.label");
      } else {
        isValid = true;
      }
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onChangeInput = function onChangeInput(e) {
    e.preventDefault();
    var value = e.target.value;
    if (value.match(/\./g)) {
      var _value$split = value.split("."),
        _value$split2 = _slicedToArray(_value$split, 2),
        decimal = _value$split2[1];
      if ((decimal === null || decimal === void 0 ? void 0 : decimal.length) > 2) {
        return;
      }
    }
    setProductValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, e.target.name, value));
    });
    setErrors({});
  };
  var onChangeVariationTypesData = function onChangeVariationTypesData(e, variation_type_id) {
    setErrors({});
    setVariationTypesData(function (prev) {
      return prev.map(function (variationTypeData) {
        if (variationTypeData.variation_type_id === variation_type_id) {
          return _objectSpread(_objectSpread({}, variationTypeData), {}, _defineProperty({}, e.target.name, e.target.value));
        } else {
          return variationTypeData;
        }
      });
    });
  };
  var onSingleProductDataChange = function onSingleProductDataChange(e) {
    setSingleProductTypeData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, e.target.name, e.target.value));
    });
    setErrors({});
  };
  var showUnitModel = function showUnitModel(val) {
    setUnitModel(val);
  };
  var addUnitsData = function addUnitsData(productValue) {
    addUnit(productValue);
  };
  var prepareFormData = function prepareFormData() {
    var _productValue$product;
    var formData = new FormData();
    formData.append("name", productValue.name);
    formData.append("product_code", productValue.code);
    formData.append("product_type", (_productValue$product = productValue.product_type) === null || _productValue$product === void 0 ? void 0 : _productValue$product.value);
    formData.append("product_category_id", productValue.product_category_id.value);
    formData.append("brand_id", productValue.brand_id.value);
    if (productValue.barcode_symbol[0]) {
      formData.append("barcode_symbol", productValue.barcode_symbol[0].value);
    } else {
      formData.append("barcode_symbol", productValue.barcode_symbol.value);
    }
    formData.append("product_unit", productValue.product_unit && productValue.product_unit[0] ? productValue.product_unit[0].value : productValue.product_unit.value);
    formData.append("sale_unit", productValue.sale_unit && productValue.sale_unit[0] ? productValue.sale_unit[0].value : productValue.sale_unit.value);
    formData.append("purchase_unit", productValue.purchase_unit && productValue.purchase_unit[0] ? productValue.purchase_unit[0].value : productValue.purchase_unit.value);
    formData.append("quantity_limit", productValue.sale_quantity_limit ? productValue.sale_quantity_limit : "");
    formData.append("notes", productValue.notes);
    if (productValue.isEdit === false) {
      formData.append("purchase_supplier_id", productValue.supplier_id.value);
      formData.append("purchase_warehouse_id", productValue.warehouse_id.value);
      formData.append("purchase_date", dayjs__WEBPACK_IMPORTED_MODULE_20___default()(productValue.date).format("YYYY-MM-DD"));
      formData.append("purchase_status", productValue.status_id.value);
      if (productValue.product_type.value === 1) {
        formData.append("code", productValue.code);
        formData.append("product_cost", singleProductTypeData.product_cost);
        formData.append("product_price", singleProductTypeData.product_price);
        formData.append("stock_alert", singleProductTypeData.stock_alert ? singleProductTypeData.stock_alert : "");
        formData.append("order_tax", singleProductTypeData.order_tax ? singleProductTypeData.order_tax : "");
        formData.append("tax_type", singleProductTypeData.tax_type.value ? singleProductTypeData.tax_type.value : 1);
        formData.append("purchase_quantity", singleProductTypeData.add_stock);
      } else {
        formData.append("variation_data", JSON.stringify(variationTypesData.map(function (variationType) {
          var _variations$filter$2;
          return _objectSpread(_objectSpread({}, variationType), {}, {
            tax_type: variationType.tax_type.value,
            purchase_quantity: variationType.add_stock,
            code: "".concat(productValue.code, "-").concat((0,lodash__WEBPACK_IMPORTED_MODULE_30__.toUpper)((_variations$filter$2 = variations.filter(function (variation) {
              return variation.id === variationType.variation_id;
            })[0]) === null || _variations$filter$2 === void 0 || (_variations$filter$2 = _variations$filter$2.attributes) === null || _variations$filter$2 === void 0 ? void 0 : _variations$filter$2.variation_types.filter(function (vType) {
              return vType.id === variationType.variation_type_id;
            })[0].name))
          });
        })));
      }
    }
    if (multipleFiles) {
      multipleFiles.forEach(function (image, index) {
        formData.append("images[".concat(index, "]"), image);
      });
    }
    return formData;
  };
  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    var valid = handleValidation();
    productValue.images = multipleFiles;
    if (singleProduct && valid && isClearDropdown === true && isDropdown === true) {
      if (!disabled) {
        editMainProduct(id, prepareFormData(), navigate);
      }
    } else {
      if (valid) {
        productValue.images = multipleFiles;
        setProductValue(productValue);
        addProductData(prepareFormData());
      }
    }
  };

  // Función generadora de código aleatorio
  var generateRandomCode = function generateRandomCode() {
    var chars = "0123456789";
    var randomPart = Array.from({
      length: 5
    }, function () {
      return chars.charAt(Math.floor(Math.random() * chars.length));
    }).join("");
    var code = "JS-".concat(randomPart);

    // Actualiza el estado directamente en lugar de simular un evento
    setProductValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, {
        code: code
      });
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
    className: "card",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
      className: "card-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
            className: "col-xl-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
              className: "card",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                  className: "col-md-6 mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                    className: "form-label",
                    children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("globally.input.name.label"), ":", " "]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                    className: "required"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                    type: "text",
                    name: "name",
                    value: productValue.name,
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("globally.input.name.placeholder.label"),
                    className: "form-control",
                    autoFocus: true,
                    onChange: function onChange(e) {
                      return onChangeInput(e);
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                    className: "text-danger d-block fw-400 fs-small mt-2",
                    children: errors["name"] ? errors["name"] : null
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                  className: "col-md-6 mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                    className: "form-label",
                    children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.code.label"), ":", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                      className: "required"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    className: "flex-nowrap dropdown-side-btn",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                      type: "text",
                      name: "code",
                      className: "form-control position-relative",
                      placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.code.placeholder.label"),
                      onChange: function onChange(e) {
                        return onChangeInput(e);
                      },
                      value: productValue.code
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      onClick: generateRandomCode,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_25__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__.faBarcode
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                    className: "text-danger d-block fw-400 fs-small mt-2",
                    children: errors["code"] ? errors["code"] : null
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                  className: "col-md-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-category.label"),
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.product-category.placeholder.label"),
                    defaultValue: selectedProductCategory,
                    value: productValue.product_category_id,
                    data: productCategories,
                    onChange: onProductCategoryChange,
                    errors: errors["product_category_id"]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                  className: "col-md-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.brand.label"),
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.brand.placeholder.label"),
                    defaultValue: selectedBrand,
                    errors: errors["brand_id"],
                    data: brands,
                    onChange: onBrandChange,
                    value: productValue.brand_id
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                  className: "col-md-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.barcode-symbology.label"),
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.barcode-symbology.placeholder.label"),
                    defaultValue: selectedBarcode,
                    errors: errors["barcode_symbol"],
                    data: _shared_option_lists_barcode_json__WEBPACK_IMPORTED_MODULE_14__,
                    onChange: onBarcodeChange,
                    value: productValue.barcode_symbol
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                  className: "col-md-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    className: "flex-nowrap dropdown-side-btn",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                      className: "position-relative",
                      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-unit.label"),
                      placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.product-unit.placeholder.label"),
                      defaultValue: productValue.product_unit,
                      value: productValue.product_unit,
                      data: baseUnits,
                      errors: errors["product_unit"],
                      onChange: handleProductUnitChange
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      onClick: function onClick() {
                        return showUnitModel(true);
                      },
                      className: "position-absolute model-dtn",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_25__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_26__.faPlus
                      })
                    })]
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                  className: "col-md-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    className: "position-relative",
                    title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.sale-unit.label"),
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.sale-unit.placeholder.label"),
                    value: isClearDropdown === false ? "" : productValue.sale_unit,
                    data: saleUnitOption,
                    errors: errors["sale_unit"],
                    onChange: handleSaleUnitChange
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                  className: "col-md-6 mb-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                    className: "position-relative",
                    title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.purchase-unit.label"),
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.purchase-unit.placeholder.label"),
                    value: isDropdown === false ? "" : productValue.purchase_unit,
                    data: saleUnitOption,
                    errors: errors["purchase_unit"],
                    onChange: handlePurchaseUnitChange
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                  className: "col-md-6 mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                    className: "form-label",
                    children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.quantity-limitation.label"), ":", " "]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                    type: "number",
                    name: "sale_quantity_limit",
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.quantity-limitation.placeholder"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onChangeInput(e);
                    },
                    value: productValue.sale_quantity_limit,
                    min: 1
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                    className: "text-danger d-block fw-400 fs-small mt-2",
                    children: errors["stock_alert"] ? errors["stock_alert"] : null
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                  className: "col-md-6 mb-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                    className: "form-label",
                    children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("globally.input.notes.label"), ":", " "]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("textarea", {
                    className: "form-control",
                    name: "notes",
                    rows: 3,
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("globally.input.notes.placeholder.label"),
                    onChange: function onChange(e) {
                      return onChangeInput(e);
                    },
                    value: productValue.notes ? productValue.notes === "null" ? "" : productValue.notes : ""
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                    className: "text-danger d-block fw-400 fs-small mt-2",
                    children: errors["notes"] ? errors["notes"] : null
                  })]
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
            className: "col-xl-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "card",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                className: "form-label",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.multiple-image.label"), ":", " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_MultipleImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
                product: singleProduct,
                fetchFiles: onChangeFiles,
                transferImage: transferImage
              })]
            }), singleProduct ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                className: "col-md-12 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("h1", {
                  className: "text-center",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("add-stock.title"), " ", ":", " "]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                className: "col-md-12 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  data: warehouses,
                  onChange: onWarehouseChange,
                  defaultValue: productValue.warehouse_id,
                  isWarehouseDisable: true,
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("warehouse.title"),
                  errors: errors["warehouse_id"],
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("purchase.select.warehouse.placeholder.label")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                className: "col-md-12 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  data: suppliers,
                  onChange: onSupplierChange,
                  defaultValue: productValue.supplier_id,
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("supplier.title"),
                  errors: errors["supplier_id"],
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("purchase.select.supplier.placeholder.label")
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                className: "col-md-12 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  multiLanguageOption: statusFilterOptions,
                  onChange: onStatusChange,
                  name: "status",
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("purchase.select.status.label"),
                  value: productValue.status_id,
                  errors: errors["status_id"],
                  defaultValue: statusDefaultValue[0],
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("purchase.select.status.label")
                })
              })]
            })]
          }), !singleProduct && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
            className: "row border-top pt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
              className: "col-md-4 mb-3",
              children: !singleProduct ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.type.label"),
                multiLanguageOption: productTypesOptionsObj,
                onChange: onProductTypeChange,
                value: productValue.product_type,
                errors: errors["product_type"],
                placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.type.placeholder.label")
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("label", {
                  className: "form-label",
                  children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.type.label")
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "text",
                  className: "form-control",
                  value: productValue.product_type.label,
                  disabled: true
                })]
              })
            }), typeof productValue.product_type !== "string" && ((_productValue$product2 = productValue.product_type) === null || _productValue$product2 === void 0 ? void 0 : _productValue$product2.value) === 2 && (!singleProduct ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
              className: "col-md-4 mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variations.title"),
                value: productValue.variation,
                multiLanguageOption: variationsOptions,
                onChange: onVariationChange,
                errors: errors["variation"]
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "col-md-4 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("label", {
                className: "form-label",
                children: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variations.title")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                type: "text",
                className: "form-control",
                value: productValue.variation.label,
                disabled: true
              })]
            })), typeof productValue.product_type !== "string" && ((_productValue$product3 = productValue.product_type) === null || _productValue$product3 === void 0 ? void 0 : _productValue$product3.value) === 2 && typeof productValue.variation !== "string" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
              className: "col-md-4 mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_ReactMultiSelect__WEBPACK_IMPORTED_MODULE_29__["default"], {
                title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variation.variation_types"),
                value: productValue.variation_type,
                option: variationTypesOptions,
                onChange: onVariationTypesChange,
                errors: errors["variation_type"]
              })
            })]
          }), typeof productValue.product_type !== "string" && !singleProduct && ((_productValue$product4 = productValue.product_type) === null || _productValue$product4 === void 0 ? void 0 : _productValue$product4.value) === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
            className: "row border-top pt-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "col-md-3 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                className: "form-label",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-cost.label"), ":", " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "required"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "text",
                  name: "product_cost",
                  min: 0,
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.product-cost.placeholder.label"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onSingleProductDataChange(e);
                  },
                  value: singleProductTypeData.product_cost
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
                  children: frontSetting.value && frontSetting.value.currency_symbol
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "text-danger d-block fw-400 fs-small mt-2",
                children: errors["product_cost"] ? errors["product_cost"] : null
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "col-md-3 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                className: "form-label",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-price.label"), ":", " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "required"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "text",
                  name: "product_price",
                  min: 0,
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.product-price.placeholder.label"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onSingleProductDataChange(e);
                  },
                  value: singleProductTypeData.product_price
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
                  children: frontSetting.value && frontSetting.value.currency_symbol
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "text-danger d-block fw-400 fs-small mt-2",
                children: errors["product_price"] ? errors["product_price"] : null
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "col-md-3 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                className: "form-label",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.stock-alert.label"), ":", " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                type: "number",
                name: "stock_alert",
                className: "form-control",
                placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.stock-alert.placeholder.label"),
                onKeyPress: function onKeyPress(event) {
                  return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                },
                onChange: function onChange(e) {
                  return onSingleProductDataChange(e);
                },
                value: singleProductTypeData.stock_alert,
                min: 0
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "col-md-3 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                className: "form-label",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.order-tax.label"), ":", " "]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "text",
                  name: "order_tax",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.order-tax.placeholder.label"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onSingleProductDataChange(e);
                  },
                  min: 0,
                  pattern: "[0-9]*",
                  value: singleProductTypeData.order_tax
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
                  children: "%"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "text-danger d-block fw-400 fs-small mt-2",
                children: errors["order_tax"] ? errors["order_tax"] : null
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
              className: "col-md-3 mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.tax-type.label"),
                multiLanguageOption: taxTypeFilterOptions,
                value: singleProductTypeData.tax_type,
                onChange: function onChange(data) {
                  return onTaxTypeChange(data);
                },
                errors: errors["tax_type"],
                defaultValue: defaultTaxType,
                placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.tax-type.placeholder.label")
              })
            }), !singleProduct && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "col-md-3 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                className: "form-label",
                children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product-quantity.add.title"), ":"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "required"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                type: "number",
                name: "add_stock",
                className: "form-control",
                placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product-quantity.add.title"),
                onKeyPress: function onKeyPress(event) {
                  return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                },
                onChange: function onChange(e) {
                  return onSingleProductDataChange(e);
                },
                value: singleProductTypeData.add_stock,
                min: 1
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                className: "text-danger d-block fw-400 fs-small mt-2",
                children: errors["add_stock"] ? errors["add_stock"] : null
              })]
            })]
          }) : ((_productValue$product5 = productValue.product_type) === null || _productValue$product5 === void 0 ? void 0 : _productValue$product5.value) === 2 && typeof productValue.variation !== "string" && typeof productValue.variation_type !== "string" && (variationTypesData === null || variationTypesData === void 0 ? void 0 : variationTypesData.map(function (variation) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
              className: "row border-top pt-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("variation.type.title"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "text",
                  name: "variation_type",
                  className: "form-control",
                  value: variation.variation_type,
                  disabled: true,
                  readOnly: true
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-cost.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                    type: "text",
                    name: "product_cost",
                    min: 0,
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.product-cost.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onChangeVariationTypesData(e, variation.variation_type_id);
                    },
                    value: variation.product_cost
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
                    children: frontSetting.value && frontSetting.value.currency_symbol
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["".concat(variation.variation_type_id, "_product_cost")] ? errors["".concat(variation.variation_type_id, "_product_cost")] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.product-price.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                    type: "text",
                    name: "product_price",
                    min: 0,
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.product-price.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onChangeVariationTypesData(e, variation.variation_type_id);
                    },
                    value: variation.product_price
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
                    children: frontSetting.value && frontSetting.value.currency_symbol
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["".concat(variation.variation_type_id, "_product_price")] ? errors["".concat(variation.variation_type_id, "_product_price")] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.stock-alert.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "number",
                  name: "stock_alert",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.stock-alert.placeholder.label"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onChangeVariationTypesData(e, variation.variation_type_id);
                  },
                  value: variation.stock_alert,
                  min: 0
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.order-tax.label"), ":", " "]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                    type: "text",
                    name: "order_tax",
                    className: "form-control",
                    placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.order-tax.placeholder.label"),
                    onKeyPress: function onKeyPress(event) {
                      return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                    },
                    onChange: function onChange(e) {
                      return onChangeVariationTypesData(e, variation.variation_type_id);
                    },
                    min: 0,
                    pattern: "[0-9]*",
                    value: variation.order_tax
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_5__["default"].Text, {
                    children: "%"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["".concat(variation.variation_type_id, "_order_tax")] ? errors["".concat(variation.variation_type_id, "_order_tax")] : null
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("div", {
                className: "col-md-3 mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product.input.tax-type.label"),
                  multiLanguageOption: taxTypeFilterOptions,
                  value: variation.tax_type,
                  onChange: function onChange(data) {
                    return onTaxTypeChange(data, variation.variation_type_id);
                  },
                  errors: errors["".concat(variation.variation_type_id, "_tax_type")],
                  defaultValue: defaultTaxType,
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product.input.tax-type.placeholder.label")
                })
              }), !singleProduct && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("div", {
                className: "col-md-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsxs)("label", {
                  className: "form-label",
                  children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("product-quantity.add.title"), ":"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "required"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("input", {
                  type: "number",
                  name: "add_stock",
                  className: "form-control",
                  placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.placeholderText)("product-quantity.add.title"),
                  onKeyPress: function onKeyPress(event) {
                    return (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.decimalValidate)(event);
                  },
                  onChange: function onChange(e) {
                    return onChangeVariationTypesData(e, variation.variation_type_id);
                  },
                  value: variation.add_stock,
                  min: 1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)("span", {
                  className: "text-danger d-block fw-400 fs-small mt-2",
                  children: errors["".concat(variation.variation_type_id, "_add_stock")] ? errors["".concat(variation.variation_type_id, "_add_stock")] : null
                })]
              })]
            }, variation.variation_type_id);
          })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_15__["default"], {
            onEditRecord: singleProduct,
            onSubmit: onSubmit,
            editDisabled: disabled,
            link: "/app/products",
            addDisabled: !productValue.name
          })]
        })
      })
    }), unitModel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_31__.jsx)(_units_UnitsForm__WEBPACK_IMPORTED_MODULE_27__["default"], {
      addProductData: addUnitsData,
      product_unit: productValue.product_unit,
      title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_12__.getFormattedMessage)("unit.create.title"),
      show: unitModel,
      hide: setUnitModel
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var brands = state.brands,
    productCategories = state.productCategories,
    units = state.units,
    totalRecord = state.totalRecord,
    suppliers = state.suppliers,
    warehouses = state.warehouses,
    productUnits = state.productUnits,
    frontSetting = state.frontSetting;
  return {
    brands: brands,
    productCategories: productCategories,
    units: units,
    totalRecord: totalRecord,
    suppliers: suppliers,
    warehouses: warehouses,
    productUnits: productUnits,
    frontSetting: frontSetting
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchProduct: _store_action_productAction__WEBPACK_IMPORTED_MODULE_10__.fetchProduct,
  editMainProduct: _store_action_productAction__WEBPACK_IMPORTED_MODULE_10__.editMainProduct,
  fetchAllBrands: _store_action_brandsAction__WEBPACK_IMPORTED_MODULE_9__.fetchAllBrands,
  fetchAllProductCategories: _store_action_productCategoryAction__WEBPACK_IMPORTED_MODULE_8__.fetchAllProductCategories,
  fetchUnits: _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_7__.fetchUnits,
  productUnitDropdown: _store_action_productUnitAction__WEBPACK_IMPORTED_MODULE_11__.productUnitDropdown,
  fetchAllWarehouses: _store_action_warehouseAction__WEBPACK_IMPORTED_MODULE_18__.fetchAllWarehouses,
  fetchAllSuppliers: _store_action_supplierAction__WEBPACK_IMPORTED_MODULE_19__.fetchAllSuppliers,
  addUnit: _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_7__.addUnit
})(ProductForm));

/***/ },

/***/ "./resources/pos/src/components/units/UnitsForm.js"
/*!*********************************************************!*\
  !*** ./resources/pos/src/components/units/UnitsForm.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Form.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Modal.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/action/unitsAction */ "./resources/pos/src/store/action/unitsAction.js");
/* harmony import */ var _shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modelFooter */ "./resources/pos/src/shared/components/modelFooter.js");
/* harmony import */ var _shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/select/reactSelect */ "./resources/pos/src/shared/select/reactSelect.js");
/* harmony import */ var _store_action_baseUnitsAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/action/baseUnitsAction */ "./resources/pos/src/store/action/baseUnitsAction.js");
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









var UnitsForm = function UnitsForm(props) {
  var _unitValue$base_unit$, _newUnit$, _newUnit$2;
  var handleClose = props.handleClose,
    base = props.base,
    fetchAllBaseUnits = props.fetchAllBaseUnits,
    show = props.show,
    title = props.title,
    addProductData = props.addProductData,
    editUnit = props.editUnit,
    singleUnit = props.singleUnit,
    hide = props.hide,
    product_unit = props.product_unit;
  var innerRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)();
  var newUnit = singleUnit && base.filter(function (da) {
    return singleUnit.base_unit === da.attributes.name;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: singleUnit ? singleUnit.name : '',
      short_name: singleUnit ? singleUnit.short_name : '',
      base_unit: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    unitValue = _useState2[0],
    setUnitValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: '',
      short_name: '',
      base_unit: ''
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    errors = _useState4[0],
    setErrors = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetchAllBaseUnits();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (newUnit && (newUnit === null || newUnit === void 0 ? void 0 : newUnit.length) >= 1) {
      setUnitValue(function (unitValue) {
        return _objectSpread(_objectSpread({}, unitValue), {}, {
          base_unit: {
            value: newUnit[0].id,
            label: newUnit[0].attributes.name
          }
        });
      });
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (singleUnit) {
      var _data$;
      var data = base.filter(function (da) {
        return Number(singleUnit.base_unit) === da.id;
      });
      data.length && setUnitValue({
        name: singleUnit ? singleUnit.name : '',
        short_name: singleUnit ? singleUnit.short_name : '',
        base_unit: {
          label: (_data$ = data[0]) === null || _data$ === void 0 || (_data$ = _data$.attributes) === null || _data$ === void 0 ? void 0 : _data$.name,
          value: singleUnit === null || singleUnit === void 0 ? void 0 : singleUnit.base_unit
        }
      });
    }
  }, [singleUnit]);
  var disabled = singleUnit && singleUnit.name === unitValue.name.trim() && (singleUnit === null || singleUnit === void 0 ? void 0 : singleUnit.short_name) === (unitValue === null || unitValue === void 0 ? void 0 : unitValue.short_name.trim()) && (unitValue === null || unitValue === void 0 ? void 0 : unitValue.base_unit[0]) && (unitValue === null || unitValue === void 0 || (_unitValue$base_unit$ = unitValue.base_unit[0]) === null || _unitValue$base_unit$ === void 0 ? void 0 : _unitValue$base_unit$.label) === (singleUnit === null || singleUnit === void 0 ? void 0 : singleUnit.base_unit);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newUnit ? [{
      label: (_newUnit$ = newUnit[0]) === null || _newUnit$ === void 0 || (_newUnit$ = _newUnit$.attributes) === null || _newUnit$ === void 0 ? void 0 : _newUnit$.name,
      value: (_newUnit$2 = newUnit[0]) === null || _newUnit$2 === void 0 ? void 0 : _newUnit$2.id
    }] : null),
    _useState6 = _slicedToArray(_useState5, 1),
    selectedBaseUnit = _useState6[0];
  var handleValidation = function handleValidation() {
    var errorss = {};
    var isValid = false;
    if (!unitValue['name'].trim()) {
      errorss['name'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("globally.input.name.validate.label");
    } else if (!unitValue['short_name'].trim()) {
      errorss['short_name'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.modal.input.short-name.validate.label");
    } else if (unitValue['short_name'] && unitValue['short_name'].length > 50) {
      errorss['short_name'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.modal.input.short-name.valid.validate.label");
    } else if (!unitValue['base_unit']) {
      errorss['base_unit'] = (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.modal.input.base-unit.validate.label");
    } else {
      isValid = true;
    }
    setErrors(errorss);
    return isValid;
  };
  var onChangeInput = function onChangeInput(e) {
    e.preventDefault();
    setUnitValue(function (inputs) {
      return _objectSpread(_objectSpread({}, inputs), {}, _defineProperty({}, e.target.name, e.target.value));
    });
    setErrors('');
  };
  var onBaseUnitChange = function onBaseUnitChange(obj) {
    setUnitValue(function (unitValue) {
      return _objectSpread(_objectSpread({}, unitValue), {}, {
        base_unit: obj
      });
    });
  };
  var prepareFormData = function prepareFormData(data) {
    var params = new URLSearchParams();
    params.append('name', data.name);
    params.append('short_name', data.short_name);
    if (data.base_unit[0]) {
      params.append('base_unit', data.base_unit[0].value);
    } else {
      params.append('base_unit', data.base_unit.value);
    }
    return params;
  };
  var onSubmit = function onSubmit(event) {
    event.preventDefault();
    var valid = handleValidation();
    if (singleUnit && valid) {
      if (!disabled) {
        editUnit(singleUnit.id, prepareFormData(unitValue), handleClose);
        clearField(false);
      }
    } else {
      if (valid) {
        setUnitValue(unitValue);
        addProductData(prepareFormData(unitValue));
        clearField(false);
      }
    }
  };
  var clearField = function clearField() {
    setUnitValue({
      name: '',
      short_name: '',
      base_unit: ''
    });
    setErrors('');
    // handleClose(false);
    handleClose ? handleClose(false) : hide(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: show,
    onHide: clearField,
    keyboard: true,
    onShow: function onShow() {
      return setTimeout(function () {
        innerRef.current.focus();
      }, 1);
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') {
          onSubmit(e);
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"].Header, {
        closeButton: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"].Title, {
          children: title
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_3__["default"].Body, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "col-md-12 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("globally.input.name.label"), ": "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
              type: "text",
              name: "name",
              value: unitValue.name,
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.placeholderText)("globally.input.name.placeholder.label"),
              className: "form-control",
              ref: innerRef,
              autoComplete: "off",
              onChange: function onChange(e) {
                return onChangeInput(e);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['name'] ? errors['name'] : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "col-md-12 mb-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
              className: "form-label",
              children: [(0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.modal.input.short-name.label"), ": "]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "required"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
              type: "text",
              name: "short_name",
              className: "form-control",
              value: unitValue.short_name,
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.placeholderText)("unit.modal.input.short-name.placeholder.label"),
              onChange: function onChange(e) {
                return onChangeInput(e);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
              className: "text-danger d-block fw-400 fs-small mt-2",
              children: errors['short_name'] ? errors['short_name'] : null
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "col-md-12 mb-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_select_reactSelect__WEBPACK_IMPORTED_MODULE_7__["default"], {
              title: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("unit.modal.input.base-unit.label"),
              placeholder: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.placeholderText)("unit.modal.input.base-unit.placeholder.label")
              // defaultValue={selectedBaseUnit}
              ,
              defaultValue: unitValue.base_unit,
              value: unitValue.base_unit,
              data: base,
              onChange: onBaseUnitChange,
              errors: errors['base_unit']
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_shared_components_modelFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onEditRecord: singleUnit,
      onSubmit: onSubmit,
      editDisabled: disabled,
      clearField: clearField,
      addDisabled: !unitValue.name.trim()
    })]
  });
};
var mapStateToProps = function mapStateToProps(state) {
  var base = state.base;
  return {
    base: base
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, {
  fetchAllBaseUnits: _store_action_baseUnitsAction__WEBPACK_IMPORTED_MODULE_8__.fetchAllBaseUnits,
  editUnit: _store_action_unitsAction__WEBPACK_IMPORTED_MODULE_5__.editUnit
})(UnitsForm));

/***/ },

/***/ "./resources/pos/src/config/apiConfigWthFormData.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/config/apiConfigWthFormData.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axiosInterceptor */ "./resources/pos/src/config/axiosInterceptor.js");
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ "./resources/pos/src/config/environment.js");



var wampServer = _environment__WEBPACK_IMPORTED_MODULE_2__.environment.URL + '/api/';
var axiosApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: wampServer
});
_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__["default"].setupInterceptors(axiosApi, false, true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosApi);

/***/ },

/***/ "./resources/pos/src/shared/apiHelper.js"
/*!***********************************************!*\
  !*** ./resources/pos/src/shared/apiHelper.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   apiRequest: () => (/* binding */ apiRequest)
/* harmony export */ });
/* harmony import */ var _store_action_toastAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store/action/toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./resources/pos/src/constants/index.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


var apiRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch, requestFn, onSuccess) {
    var errorMsg,
      response,
      _error$response,
      message,
      _args = arguments,
      _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          errorMsg = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'Something went wrong';
          _context.p = 1;
          _context.n = 2;
          return requestFn();
        case 2:
          response = _context.v;
          if (onSuccess) onSuccess(response);
          return _context.a(2, response);
        case 3:
          _context.p = 3;
          _t = _context.v;
          message = (_t === null || _t === void 0 || (_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || errorMsg;
          dispatch((0,_store_action_toastAction__WEBPACK_IMPORTED_MODULE_0__.addToast)({
            text: message,
            type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
          }));
          return _context.a(2, null);
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function apiRequest(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ "./resources/pos/src/shared/select/ReactMultiSelect.jsx"
/*!**************************************************************!*\
  !*** ./resources/pos/src/shared/select/ReactMultiSelect.jsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-v5 */ "./node_modules/react-bootstrap-v5/lib/esm/Form.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var react_select_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select/animated */ "./node_modules/react-select/animated/dist/react-select-animated.esm.js");
/* harmony import */ var _sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var animatedComponents = (0,react_select_animated__WEBPACK_IMPORTED_MODULE_3__["default"])();
var ReactMultiSelect = function ReactMultiSelect(_ref) {
  var title = _ref.title,
    isRequired = _ref.isRequired,
    placeholder = _ref.placeholder,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? null : _ref$value,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
    onChange = _ref.onChange,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? "" : _ref$errors,
    option = _ref.option;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Group, {
    className: "form-group w-100",
    controlId: "formBasic",
    children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap_v5__WEBPACK_IMPORTED_MODULE_1__["default"].Label, {
      children: [title, " :"]
    }) : "", isRequired ? "" : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "required"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
      placeholder: placeholder,
      components: animatedComponents,
      isMulti: true,
      value: value,
      defaultValue: defaultValue,
      onChange: onChange,
      options: option,
      noOptionsMessage: function noOptionsMessage() {
        return (0,_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)("no-option.label");
      }
    }), errors ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "text-danger d-block fw-400 fs-small mt-2",
      children: errors ? errors : null
    }) : null]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactMultiSelect);

/***/ },

/***/ "./resources/pos/src/store/action/baseUnitsAction.js"
/*!***********************************************************!*\
  !*** ./resources/pos/src/store/action/baseUnitsAction.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBaseUnit: () => (/* binding */ addBaseUnit),
/* harmony export */   deleteBaseUnit: () => (/* binding */ deleteBaseUnit),
/* harmony export */   editBaseUnit: () => (/* binding */ editBaseUnit),
/* harmony export */   fetchAllBaseUnits: () => (/* binding */ fetchAllBaseUnits),
/* harmony export */   fetchBaseUnit: () => (/* binding */ fetchBaseUnit),
/* harmony export */   fetchBaseUnits: () => (/* binding */ fetchBaseUnits)
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







var fetchBaseUnits = function fetchBaseUnits() {
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
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BASE_UNITS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.baseUnitsActionType.FETCH_UNITS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
            })["catch"](function (_ref2) {
              var _response$data;
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message,
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
var fetchBaseUnit = function fetchBaseUnit(unitId, singleUnit) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BASE_UNITS + "/" + unitId, singleUnit).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.baseUnitsActionType.FETCH_UNIT,
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
var addBaseUnit = function addBaseUnit(base_units) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BASE_UNITS, base_units).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.baseUnitsActionType.ADD_UNIT,
                payload: response.data.data
              });
              dispatch(fetchBaseUnits(_constants__WEBPACK_IMPORTED_MODULE_1__.Filters.OBJ));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("base-unit.success.create.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
            })["catch"](function (_ref6) {
              var _response$data2;
              var response = _ref6.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response === null || response === void 0 || (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.message,
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
var editBaseUnit = function editBaseUnit(unitId, units, handleClose) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BASE_UNITS + "/" + unitId, units).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.baseUnitsActionType.EDIT_UNIT,
                payload: response.data.data
              });
              handleClose(false);
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("base-unit.success.edit.message")
              }));
            })["catch"](function (_ref8) {
              var _response$data3;
              var response = _ref8.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response === null || response === void 0 || (_response$data3 = response.data) === null || _response$data3 === void 0 ? void 0 : _response$data3.message,
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
var deleteBaseUnit = function deleteBaseUnit(unitId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BASE_UNITS + "/" + unitId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.baseUnitsActionType.DELETE_UNIT,
                payload: unitId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("base-unit.success.delete.message")
              }));
            })["catch"](function (_ref0) {
              var _response$data4;
              var response = _ref0.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response === null || response === void 0 || (_response$data4 = response.data) === null || _response$data4 === void 0 ? void 0 : _response$data4.message,
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
var fetchAllBaseUnits = function fetchAllBaseUnits() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("base-units?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.baseUnitsActionType.FETCH_ALL_BASE_UNITS,
                payload: response.data.data
              });
            })["catch"](function (_ref10) {
              var _response$data5;
              var response = _ref10.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response === null || response === void 0 || (_response$data5 = response.data) === null || _response$data5 === void 0 ? void 0 : _response$data5.message,
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

/***/ },

/***/ "./resources/pos/src/store/action/brandsAction.js"
/*!********************************************************!*\
  !*** ./resources/pos/src/store/action/brandsAction.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBrand: () => (/* binding */ addBrand),
/* harmony export */   deleteBrand: () => (/* binding */ deleteBrand),
/* harmony export */   editBrand: () => (/* binding */ editBrand),
/* harmony export */   fetchAllBrands: () => (/* binding */ fetchAllBrands),
/* harmony export */   fetchBrand: () => (/* binding */ fetchBrand),
/* harmony export */   fetchBrands: () => (/* binding */ fetchBrands)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _updateBrand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateBrand */ "./resources/pos/src/store/action/updateBrand.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








var fetchBrands = function fetchBrands() {
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
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BRANDS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.brandsActionType.FETCH_BRANDS,
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
var fetchBrand = function fetchBrand(brandsId, singleUser) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BRANDS + "/" + brandsId, singleUser).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.brandsActionType.FETCH_BRAND,
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
var addBrand = function addBrand(brands) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BRANDS, brands).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.brandsActionType.ADD_BRANDS,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("brand.success.create.message")
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
var editBrand = function editBrand(brandsId, brands, handleClose) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BRANDS + "/" + brandsId, brands).then(function (response) {
              dispatch((0,_updateBrand__WEBPACK_IMPORTED_MODULE_7__.callUpdateBrandApi)(true));
              // dispatch({type: productActionType.ADD_IMPORT_PRODUCT, payload: response.data.data});
              handleClose(false);
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("brand.success.edit.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
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
var deleteBrand = function deleteBrand(brandsId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.BRANDS + "/" + brandsId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.brandsActionType.DELETE_BRANDS,
                payload: brandsId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("brand.success.delete.message")
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
var fetchAllBrands = function fetchAllBrands() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("brands?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.brandsActionType.FETCH_ALL_BRANDS,
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

/***/ "./resources/pos/src/store/action/productAction.js"
/*!*********************************************************!*\
  !*** ./resources/pos/src/store/action/productAction.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImportProduct: () => (/* binding */ addImportProduct),
/* harmony export */   addMainProduct: () => (/* binding */ addMainProduct),
/* harmony export */   addProduct: () => (/* binding */ addProduct),
/* harmony export */   clearMainProduct: () => (/* binding */ clearMainProduct),
/* harmony export */   deleteMainProduct: () => (/* binding */ deleteMainProduct),
/* harmony export */   deleteProduct: () => (/* binding */ deleteProduct),
/* harmony export */   editMainProduct: () => (/* binding */ editMainProduct),
/* harmony export */   editProduct: () => (/* binding */ editProduct),
/* harmony export */   fetchAllMainProducts: () => (/* binding */ fetchAllMainProducts),
/* harmony export */   fetchAllProducts: () => (/* binding */ fetchAllProducts),
/* harmony export */   fetchMainProduct: () => (/* binding */ fetchMainProduct),
/* harmony export */   fetchProduct: () => (/* binding */ fetchProduct),
/* harmony export */   fetchProducts: () => (/* binding */ fetchProducts),
/* harmony export */   fetchProductsByWarehouse: () => (/* binding */ fetchProductsByWarehouse)
/* harmony export */ });
/* harmony import */ var _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfigWthFormData */ "./resources/pos/src/config/apiConfigWthFormData.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/apiHelper */ "./resources/pos/src/shared/apiHelper.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
/* harmony import */ var _saveButtonAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./saveButtonAction */ "./resources/pos/src/store/action/saveButtonAction.js");
/* harmony import */ var _importProductApiAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./importProductApiAction */ "./resources/pos/src/store/action/importProductApiAction.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }










var buildUrl = function buildUrl(baseUrl, filter) {
  if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
    return baseUrl + (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_4__["default"])(filter, null, null, null, baseUrl);
  }
  return baseUrl;
};
var fetchProducts = function fetchProducts() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(buildUrl(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS, filter));
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_PRODUCTS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var fetchProduct = function fetchProduct(productId, singleProduct) {
  var isLoading = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context2.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + "/" + productId, singleProduct);
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_PRODUCT,
                payload: response.data.data
              });
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var addProduct = function addProduct(product, navigate) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS, product);
            }, function () {
              dispatch(fetchMainProduct(product.get('main_product_id'), false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.create.message")
              }));
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var editProduct = function editProduct(productId, product, navigate) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context4.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + "/" + productId, product);
            }, function () {
              dispatch(fetchMainProduct(product.get('main_product_id'), false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.edit.message")
              }));
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var deleteProduct = function deleteProduct(productId, mainProductId) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS + "/" + productId);
            }, function () {
              dispatch(fetchMainProduct(mainProductId, false));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.delete.message")
              }));
            });
          case 1:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};
var fetchAllProducts = function fetchAllProducts() {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _context6.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get("products?page[size]=0");
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_ALL_PRODUCTS,
                payload: response.data.data
              });
            });
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var fetchProductsByWarehouse = function fetchProductsByWarehouse(id) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dispatch) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get("products?page[size]=0&warehouse_id=".concat(id));
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_PRODUCTS_BY_WAREHOUSE,
                payload: response.data.data
              });
            });
          case 1:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function (_x7) {
      return _ref7.apply(this, arguments);
    };
  }();
};
var addImportProduct = function addImportProduct(importProduct) {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(dispatch) {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.IMPORT_PRODUCT, importProduct);
            }, function () {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              dispatch((0,_importProductApiAction__WEBPACK_IMPORTED_MODULE_8__.callImportProductApi)(true));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: "Product Import Create Success"
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.addInToTotalRecord)(1));
            });
          case 1:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function (_x8) {
      return _ref8.apply(this, arguments);
    };
  }();
};
var fetchAllMainProducts = function fetchAllMainProducts() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(dispatch) {
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context9.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(buildUrl(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS, filter));
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_ALL_MAIN_PRODUCTS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.setTotalRecord)(response.data.meta.total !== undefined && response.data.meta.total >= 0 ? response.data.meta.total : response.data.data.total));
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function (_x9) {
      return _ref9.apply(this, arguments);
    };
  }();
};
var deleteMainProduct = function deleteMainProduct(productId) {
  return /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(dispatch) {
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS + "/" + productId);
            }, function () {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.DELETE_MAIN_PRODUCT,
                payload: productId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.delete.message")
              }));
            });
          case 1:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function (_x0) {
      return _ref0.apply(this, arguments);
    };
  }();
};
var fetchMainProduct = function fetchMainProduct(productId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(dispatch) {
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            _context1.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS + "/" + productId);
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.FETCH_MAIN_PRODUCT,
                payload: response.data.data
              });
            });
          case 1:
            if (isLoading) dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
          case 2:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return function (_x1) {
      return _ref1.apply(this, arguments);
    };
  }();
};
var clearMainProduct = function clearMainProduct() {
  return function (dispatch) {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.CLEAR_MAIN_PRODUCT
    });
  };
};
var addMainProduct = function addMainProduct(product, navigate) {
  return /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(dispatch) {
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context10.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS, product);
            }, function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productActionType.ADD_MAIN_PRODUCT,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.create.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.addInToTotalRecord)(1));
              navigate("/app/products");
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context10.a(2);
        }
      }, _callee10);
    }));
    return function (_x10) {
      return _ref10.apply(this, arguments);
    };
  }();
};
var editMainProduct = function editMainProduct(productId, product, navigate) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(dispatch) {
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context11.n = 1;
            return (0,_shared_apiHelper__WEBPACK_IMPORTED_MODULE_2__.apiRequest)(dispatch, function () {
              return _config_apiConfigWthFormData__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.MAIN_PRODUCTS + "/" + productId, product);
            }, function () {
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_9__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product.success.edit.message")
              }));
              navigate("/app/products");
            });
          case 1:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(false));
          case 2:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return function (_x11) {
      return _ref11.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/productCategoryAction.js"
/*!*****************************************************************!*\
  !*** ./resources/pos/src/store/action/productCategoryAction.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProductCategory: () => (/* binding */ addProductCategory),
/* harmony export */   deleteProductCategory: () => (/* binding */ deleteProductCategory),
/* harmony export */   editProductCategory: () => (/* binding */ editProductCategory),
/* harmony export */   fetchAllProductCategories: () => (/* binding */ fetchAllProductCategories),
/* harmony export */   fetchProductCategories: () => (/* binding */ fetchProductCategories),
/* harmony export */   fetchProductCategory: () => (/* binding */ fetchProductCategory)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var fetchProductCategories = function fetchProductCategories() {
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
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS_CATEGORIES;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_4__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productCategoriesActionType.FETCH_PRODUCTS_CATEGORIES,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.setTotalRecord)(response.data.meta.total));
            })["catch"](function (response) {
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: response.response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            })["finally"](function () {
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              }
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
var fetchProductCategory = function fetchProductCategory(productId, singleProduct) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS_CATEGORIES + "/" + productId, singleProduct).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productCategoriesActionType.FETCH_PRODUCT_CATEGORIES,
                payload: response.data.data
              });
            })["catch"](function (_ref3) {
              var response = _ref3.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
      return _ref2.apply(this, arguments);
    };
  }();
};
var addProductCategory = function addProductCategory(products) {
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS_CATEGORIES, products).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productCategoriesActionType.ADD_PRODUCT_CATEGORIES,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product-category.success.create.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.addInToTotalRecord)(1));
            })["catch"](function (_ref5) {
              var response = _ref5.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
      return _ref4.apply(this, arguments);
    };
  }();
};
var editProductCategory = function editProductCategory(productId, products, handleClose) {
  return /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS_CATEGORIES + "/" + productId, products).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productCategoriesActionType.EDIT_PRODUCT_CATEGORIES,
                payload: response.data.data
              });
              handleClose(false);
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product-category.success.edit.message")
              }));
            })["catch"](function (_ref7) {
              var response = _ref7.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
      return _ref6.apply(this, arguments);
    };
  }();
};
var deleteProductCategory = function deleteProductCategory(productId) {
  return /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCTS_CATEGORIES + "/" + productId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_3__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productCategoriesActionType.DELETE_PRODUCT_CATEGORIES,
                payload: productId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("product-category.success.delete.message")
              }));
            })["catch"](function (_ref9) {
              var response = _ref9.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
      return _ref8.apply(this, arguments);
    };
  }();
};
var fetchAllProductCategories = function fetchAllProductCategories() {
  return /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("product-categories?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productCategoriesActionType.FETCH_ALL_PRODUCTS_CATEGORIES,
                payload: response.data.data
              });
            })["catch"](function (_ref1) {
              var response = _ref1.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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
      return _ref0.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/productImageAction.js"
/*!**************************************************************!*\
  !*** ./resources/pos/src/store/action/productImageAction.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteProductImage: () => (/* binding */ deleteProductImage)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var deleteProductImage = function deleteProductImage(imageId) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.PRODUCT_IMAGE_DELETE + '/' + imageId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_2__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.productImageActionType.DELETE_PRODUCT_IMAGE,
                payload: imageId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_4__.getFormattedMessage)('product.image.success.delete.message')
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
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ },

/***/ "./resources/pos/src/store/action/productUnitAction.js"
/*!*************************************************************!*\
  !*** ./resources/pos/src/store/action/productUnitAction.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   productUnitDropdown: () => (/* binding */ productUnitDropdown)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



var productUnitDropdown = function productUnitDropdown(base_unit_value) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_1__["default"].get("units?page[size]=0&base_unit=".concat(base_unit_value)).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_0__.productUnitActionType.PRODUCT_UNITS,
                payload: response.data.data
              });
            })["catch"](function (_ref2) {
              var response = _ref2.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_2__.addToast)({
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

/***/ "./resources/pos/src/store/action/supplierAction.js"
/*!**********************************************************!*\
  !*** ./resources/pos/src/store/action/supplierAction.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImportSupplier: () => (/* binding */ addImportSupplier),
/* harmony export */   addSupplier: () => (/* binding */ addSupplier),
/* harmony export */   deleteSupplier: () => (/* binding */ deleteSupplier),
/* harmony export */   editSupplier: () => (/* binding */ editSupplier),
/* harmony export */   fetchAllSuppliers: () => (/* binding */ fetchAllSuppliers),
/* harmony export */   fetchSupplier: () => (/* binding */ fetchSupplier),
/* harmony export */   fetchSuppliers: () => (/* binding */ fetchSuppliers)
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
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









var fetchSuppliers = function fetchSuppliers() {
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
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SUPPLIERS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.supplierActionType.FETCH_SUPPLIERS,
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
var fetchSupplier = function fetchSupplier(supplierId) {
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(true));
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SUPPLIERS + "/" + supplierId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.supplierActionType.FETCH_SUPPLIER,
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
var addSupplier = function addSupplier(supplier, navigate) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _context3.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SUPPLIERS, supplier).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.supplierActionType.ADD_SUPPLIER,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("supplier.success.create.message")
              }));
              navigate("/app/suppliers");
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
var editSupplier = function editSupplier(supplierId, supplier, navigate) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            dispatch((0,_saveButtonAction__WEBPACK_IMPORTED_MODULE_7__.setSavingButton)(true));
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SUPPLIERS + "/" + supplierId, supplier).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.supplierActionType.EDIT_SUPPLIER,
                payload: response.data.data
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("supplier.success.edit.message")
              }));
              navigate("/app/suppliers");
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
var deleteSupplier = function deleteSupplier(supplierId) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.SUPPLIERS + "/" + supplierId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.supplierActionType.DELETE_SUPPLIER,
                payload: supplierId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("supplier.success.delete.message")
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
var fetchAllSuppliers = function fetchAllSuppliers() {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("suppliers?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.supplierActionType.FETCH_ALL_SUPPLIERS,
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
var addImportSupplier = function addImportSupplier(importSupplier) {
  return /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(dispatch) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.IMPORT_SUPPLIER, importSupplier).then(function (response) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_5__.setLoading)(false));
              dispatch((0,_importProductApiAction__WEBPACK_IMPORTED_MODULE_8__.callImportProductApi)(true));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: "Product Import Create Success "
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
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

/***/ "./resources/pos/src/store/action/unitsAction.js"
/*!*******************************************************!*\
  !*** ./resources/pos/src/store/action/unitsAction.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUnit: () => (/* binding */ addUnit),
/* harmony export */   deleteUnit: () => (/* binding */ deleteUnit),
/* harmony export */   editUnit: () => (/* binding */ editUnit),
/* harmony export */   fetchAllunits: () => (/* binding */ fetchAllunits),
/* harmony export */   fetchUnit: () => (/* binding */ fetchUnit),
/* harmony export */   fetchUnits: () => (/* binding */ fetchUnits)
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







var fetchUnits = function fetchUnits() {
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
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.UNITS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_2__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.unitsActionType.FETCH_UNITS,
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
var fetchAllunits = function fetchAllunits() {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get("units?page[size]=0").then(function (response) {
              dispatch({
                type: warehouseActionType.FETCH_UNITS,
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
var fetchUnit = function fetchUnit(unitId, singleUnit) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.UNITS + "/" + unitId, singleUnit).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.unitsActionType.FETCH_UNIT,
                payload: response.data.data
              });
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
var addUnit = function addUnit(units) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.UNITS, units).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.unitsActionType.ADD_UNIT,
                payload: response.data.data
              });
              dispatch(fetchUnits(_constants__WEBPACK_IMPORTED_MODULE_1__.Filters.OBJ));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("unit.success.create.message")
              }));
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
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
var editUnit = function editUnit(unitId, units, handleClose) {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"].patch(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.UNITS + "/" + unitId, units).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.unitsActionType.EDIT_UNIT,
                payload: response.data.data
              });
              handleClose(false);
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("unit.success.edit.message")
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
var deleteUnit = function deleteUnit(unitId) {
  return /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.UNITS + "/" + unitId).then(function (response) {
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.unitsActionType.DELETE_UNIT,
                payload: unitId
              });
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("unit.success.delete.message")
              }));
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

/***/ },

/***/ "./resources/pos/src/store/action/updateBrand.js"
/*!*******************************************************!*\
  !*** ./resources/pos/src/store/action/updateBrand.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   callUpdateBrandApi: () => (/* binding */ callUpdateBrandApi)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");

var callUpdateBrandApi = function callUpdateBrandApi(isCall) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__.constants.CALL_UPDATE_BRAND_API,
    payload: isCall
  };
};

/***/ },

/***/ "./resources/pos/src/store/action/variationAction.js"
/*!***********************************************************!*\
  !*** ./resources/pos/src/store/action/variationAction.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createVariation: () => (/* binding */ createVariation),
/* harmony export */   deleteVariation: () => (/* binding */ deleteVariation),
/* harmony export */   fetchAllVariations: () => (/* binding */ fetchAllVariations),
/* harmony export */   fetchVariation: () => (/* binding */ fetchVariation),
/* harmony export */   fetchVariations: () => (/* binding */ fetchVariations),
/* harmony export */   updateVariation: () => (/* binding */ updateVariation)
/* harmony export */ });
/* harmony import */ var _loadingAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadingAction */ "./resources/pos/src/store/action/loadingAction.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./resources/pos/src/constants/index.js");
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/apiConfig */ "./resources/pos/src/config/apiConfig.js");
/* harmony import */ var _toastAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastAction */ "./resources/pos/src/store/action/toastAction.js");
/* harmony import */ var _totalRecordAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./totalRecordAction */ "./resources/pos/src/store/action/totalRecordAction.js");
/* harmony import */ var _shared_requestParam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/requestParam */ "./resources/pos/src/shared/requestParam.js");
/* harmony import */ var _shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sharedMethod */ "./resources/pos/src/shared/sharedMethod.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }







var fetchVariations = function fetchVariations() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isLoading = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(dispatch) {
      var url;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isLoading) {
              dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_0__.setLoading)(true));
            }
            url = _constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.VARIATIONS;
            if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
              url += (0,_shared_requestParam__WEBPACK_IMPORTED_MODULE_5__["default"])(filter, null, null, null, url);
            }
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(url).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.variationActionType.FETCH_VARIATIONS,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.setTotalRecord)(response.data.meta.total));
              if (isLoading) {
                dispatch((0,_loadingAction__WEBPACK_IMPORTED_MODULE_0__.setLoading)(false));
              }
            })["catch"](function (response) {
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.response.data.message,
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
var fetchVariation = function fetchVariation(variationId) {
  return /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(dispatch) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.VARIATIONS + "/" + variationId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.variationActionType.FETCH_VARIATION,
                payload: response.data.data
              });
            })["catch"](function (response) {
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var createVariation = function createVariation(variation, clearField) {
  return /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(dispatch) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].post(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.VARIATIONS, variation).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.variationActionType.ADD_VARIATION,
                payload: response.data.data
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.addInToTotalRecord)(1));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("variation.success.create.message"),
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.SUCCESS
              }));
              clearField();
            })["catch"](function (_ref4) {
              var response = _ref4.response;
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
      return _ref3.apply(this, arguments);
    };
  }();
};
var updateVariation = function updateVariation(variationId, variation, clearField) {
  return /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(dispatch) {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].put(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.VARIATIONS + "/" + variationId, variation).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.variationActionType.EDIT_VARIATION,
                payload: response.data.data
              });
              clearField();
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: (0,_shared_sharedMethod__WEBPACK_IMPORTED_MODULE_6__.getFormattedMessage)("variation.success.edit.message"),
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.SUCCESS
              }));
            })["catch"](function (_ref6) {
              var response = _ref6.response;
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
      return _ref5.apply(this, arguments);
    };
  }();
};
var deleteVariation = function deleteVariation(variationId) {
  return /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(dispatch) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.VARIATIONS + "/" + variationId).then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.variationActionType.DELETE_VARIATION,
                payload: variationId
              });
              dispatch((0,_totalRecordAction__WEBPACK_IMPORTED_MODULE_4__.removeFromTotalRecord)(1));
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response.data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.SUCCESS
              }));
            })["catch"](function (_ref8) {
              var response = _ref8.response;
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
      return _ref7.apply(this, arguments);
    };
  }();
};
var fetchAllVariations = function fetchAllVariations() {
  return /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(dispatch) {
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            _config_apiConfig__WEBPACK_IMPORTED_MODULE_2__["default"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.apiBaseURL.VARIATIONS + "?page[size]=0").then(function (response) {
              dispatch({
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.variationActionType.FETCH_ALL_VARIATIONS,
                payload: response.data.data
              });
            })["catch"](function (_ref0) {
              var _response$data;
              var response = _ref0.response;
              dispatch((0,_toastAction__WEBPACK_IMPORTED_MODULE_3__.addToast)({
                text: response === null || response === void 0 || (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.message,
                type: _constants__WEBPACK_IMPORTED_MODULE_1__.toastType.ERROR
              }));
            });
          case 1:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref9.apply(this, arguments);
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

/***/ "./node_modules/react-bootstrap-v5/lib/esm/Button.js"
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/Button.js ***!
  \***********************************************************/
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
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap-v5/lib/esm/SafeAnchor.js");






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
var Button = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', variant && prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (type) {
    props.type = type;
  } else if (!as) {
    props.type = 'button';
  }

  var Component = as || 'button';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ },

/***/ "./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js"
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/InputGroup.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap-v5/lib/esm/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap-v5/lib/esm/ThemeProvider.js");
/* harmony import */ var _FormCheckInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap-v5/lib/esm/FormCheckInput.js");







var InputGroupText = (0,_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(InputGroupText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormCheckInput__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(InputGroupText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_FormCheckInput__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    type: "radio"
  }, props)));
};

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["bsPrefix", "size", "className", "as"]);

  bsPrefix = (0,_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.useBootstrapPrefix)(bsPrefix, 'input-group');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, size && bsPrefix + "-" + size)
  }));
});
InputGroup.displayName = 'InputGroup';

var InputGroupWithExtras = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroupWithExtras);

/***/ },

/***/ "./node_modules/react-bootstrap-v5/lib/esm/SafeAnchor.js"
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap-v5/lib/esm/SafeAnchor.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/react-bootstrap-v5/lib/esm/createChainedFunction.js");





function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: (0,_createChainedFunction__WEBPACK_IMPORTED_MODULE_3__["default"])(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SafeAnchor);

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

/***/ },

/***/ "./node_modules/react-select/animated/dist/react-select-animated.esm.js"
/*!******************************************************************************!*\
  !*** ./node_modules/react-select/animated/dist/react-select-animated.esm.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   MultiValue: () => (/* binding */ MultiValue),
/* harmony export */   Placeholder: () => (/* binding */ Placeholder),
/* harmony export */   SingleValue: () => (/* binding */ SingleValue),
/* harmony export */   ValueContainer: () => (/* binding */ ValueContainer),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _dist_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dist/index-641ee5b8.esm.js */ "./node_modules/react-select/dist/index-641ee5b8.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");

















var _excluded$4 = ["in", "onExited", "appear", "enter", "exit"];
// strip transition props off before spreading onto select component
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    _ref.in;
      _ref.onExited;
      _ref.appear;
      _ref.enter;
      _ref.exit;
      var props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded$4);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(WrappedComponent, props);
  };
};
var AnimatedInput$1 = AnimatedInput;

var _excluded$3 = ["component", "duration", "in", "onExited"];
var Fade = function Fade(_ref) {
  var Tag = _ref.component,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1 : _ref$duration,
    inProp = _ref.in;
    _ref.onExited;
    var props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded$3);
  var nodeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration,
    nodeRef: nodeRef
  }, function (state) {
    var innerProps = {
      style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, transition[state]),
      ref: nodeRef
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      innerProps: innerProps
    }, props));
  });
};

// ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse = function Collapse(_ref2) {
  var children = _ref2.children,
    _in = _ref2.in,
    _onExited = _ref2.onExited;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('auto'),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    var el = ref.current;
    if (!el) return;

    /*
      Here we're invoking requestAnimationFrame with a callback invoking our
      call to getBoundingClientRect and setState in order to resolve an edge case
      around portalling. Certain portalling solutions briefly remove children from the DOM
      before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
      while the Select component is in this state.
    */
    // cannot use `offsetWidth` because it is rounded
    var rafId = window.requestAnimationFrame(function () {
      return setWidth(el.getBoundingClientRect().width);
    });
    return function () {
      return window.cancelAnimationFrame(rafId);
    };
  }, []);
  var getStyleFromStatus = function getStyleFromStatus(status) {
    switch (status) {
      default:
        return {
          width: width
        };
      case 'exiting':
        return {
          width: 0,
          transition: "width ".concat(collapseDuration, "ms ease-out")
        };
      case 'exited':
        return {
          width: 0
        };
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__["default"], {
    enter: false,
    mountOnEnter: true,
    unmountOnExit: true,
    in: _in,
    onExited: function onExited() {
      var el = ref.current;
      if (!el) return;
      _onExited === null || _onExited === void 0 ? void 0 : _onExited(el);
    },
    timeout: collapseDuration,
    nodeRef: ref
  }, function (status) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      ref: ref,
      style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }, getStyleFromStatus(status))
    }, children);
  });
};

var _excluded$2 = ["in", "onExited"];
// strip transition props off before spreading onto actual component

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
      onExited = _ref.onExited,
      props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded$2);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(WrappedComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      cropWithEllipsis: inProp
    }, props)));
  };
};
var AnimatedMultiValue$1 = AnimatedMultiValue;

// fade in when last multi-value removed, otherwise instant
var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Fade, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};
var AnimatedPlaceholder$1 = AnimatedPlaceholder;

// instant fade; all transition-group children must be transitions

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Fade, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      component: WrappedComponent
    }, props));
  };
};
var AnimatedSingleValue$1 = AnimatedSingleValue;

var _excluded$1 = ["component"],
  _excluded2 = ["children"];
// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return props.isMulti ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(IsMultiValueContainer, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      component: WrappedComponent
    }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
      component: WrappedComponent
    }, props));
  };
};
var IsMultiValueContainer = function IsMultiValueContainer(_ref) {
  var component = _ref.component,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded$1);
  var multiProps = useIsMultiValueContainer(restProps);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_7__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({
    component: component
  }, multiProps));
};
var useIsMultiValueContainer = function useIsMultiValueContainer(_ref2) {
  var children = _ref2.children,
    props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded2);
  var isMulti = props.isMulti,
    hasValue = props.hasValue,
    innerProps = props.innerProps,
    _props$selectProps = props.selectProps,
    components = _props$selectProps.components,
    controlShouldRenderValue = _props$selectProps.controlShouldRenderValue;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(isMulti && controlShouldRenderValue && hasValue),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    cssDisplayFlex = _useState2[0],
    setCssDisplayFlex = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    removingValue = _useState4[0],
    setRemovingValue = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (hasValue && !cssDisplayFlex) {
      setCssDisplayFlex(true);
    }
  }, [hasValue, cssDisplayFlex]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (removingValue && !hasValue && cssDisplayFlex) {
      setCssDisplayFlex(false);
    }
    setRemovingValue(false);
  }, [removingValue, hasValue, cssDisplayFlex]);
  var onExited = function onExited() {
    return setRemovingValue(true);
  };
  var childMapper = function childMapper(child) {
    if (isMulti && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.isValidElement(child)) {
      // Add onExited callback to MultiValues
      if (child.type === components.MultiValue) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(child, {
          onExited: onExited
        });
      }
      // While container flexed, Input cursor is shown after Placeholder text,
      // so remove Placeholder until display is set back to grid
      if (child.type === components.Placeholder && cssDisplayFlex) {
        return null;
      }
    }
    return child;
  };
  var newInnerProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps), {}, {
    style: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps === null || innerProps === void 0 ? void 0 : innerProps.style), {}, {
      display: isMulti && hasValue || cssDisplayFlex ? 'flex' : 'grid'
    })
  });
  var newProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    innerProps: newInnerProps,
    children: react__WEBPACK_IMPORTED_MODULE_4__.Children.toArray(children).map(childMapper)
  });
  return newProps;
};
var AnimatedValueContainer$1 = AnimatedValueContainer;

var _excluded = ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"];
var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components = (0,_dist_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_3__.F)({
    components: externalComponents
  });
  var Input = components.Input,
    MultiValue = components.MultiValue,
    Placeholder = components.Placeholder,
    SingleValue = components.SingleValue,
    ValueContainer = components.ValueContainer,
    rest = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(components, _excluded);
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    Input: AnimatedInput$1(Input),
    MultiValue: AnimatedMultiValue$1(MultiValue),
    Placeholder: AnimatedPlaceholder$1(Placeholder),
    SingleValue: AnimatedSingleValue$1(SingleValue),
    ValueContainer: AnimatedValueContainer$1(ValueContainer)
  }, rest);
};
var AnimatedComponents = makeAnimated();
var Input = AnimatedComponents.Input;
var MultiValue = AnimatedComponents.MultiValue;
var Placeholder = AnimatedComponents.Placeholder;
var SingleValue = AnimatedComponents.SingleValue;
var ValueContainer = AnimatedComponents.ValueContainer;
var index = (0,memoize_one__WEBPACK_IMPORTED_MODULE_2__["default"])(makeAnimated);




/***/ },

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js"
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__.getInitialChildMapping)(nextProps, handleExited) : (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().any),

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
} : 0;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionGroup);

/***/ },

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js"
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getChildMapping: () => (/* binding */ getChildMapping),
/* harmony export */   getInitialChildMapping: () => (/* binding */ getInitialChildMapping),
/* harmony export */   getNextChildMapping: () => (/* binding */ getNextChildMapping),
/* harmony export */   mergeChildMappings: () => (/* binding */ mergeChildMappings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ },

/***/ "./resources/pos/src/shared/option-lists/barcode.json"
/*!************************************************************!*\
  !*** ./resources/pos/src/shared/option-lists/barcode.json ***!
  \************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"label":"Code 128","value":"1"},{"label":"Code 39","value":"2"}]');

/***/ },

/***/ "./resources/pos/src/shared/option-lists/taxType.json"
/*!************************************************************!*\
  !*** ./resources/pos/src/shared/option-lists/taxType.json ***!
  \************************************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('[{"label":"Exclusive","value":"1"},{"label":"Inclusive","value":"2"}]');

/***/ }

}]);