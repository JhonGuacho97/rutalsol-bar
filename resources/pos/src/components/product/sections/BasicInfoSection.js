import React from "react";
import { InputGroup, Button } from "react-bootstrap-v5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faPlus } from "@fortawesome/free-solid-svg-icons";
import ReactSelect from "../../../shared/select/reactSelect";
import {
    decimalValidate,
    getFormattedMessage,
    placeholderText,
} from "../../../shared/sharedMethod";
import barcodes from "../../../shared/option-lists/barcode.json";

const BasicInfoSection = ({
    productValue,
    errors,
    selectedProductCategory,
    selectedBrand,
    selectedBarcode,
    productCategories,
    brands,
    baseUnits,
    saleUnitOption,
    isClearDropdown,
    isDropdown,
    onChangeInput,
    onProductCategoryChange,
    onBrandChange,
    onBarcodeChange,
    handleProductUnitChange,
    handleSaleUnitChange,
    handlePurchaseUnitChange,
    generateRandomCode,
    showUnitModel,
}) => {
    return (
        <div className="col-xl-8">
            <div className="card">
                <div className="row">
                    {/* Nombre */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            {getFormattedMessage("globally.input.name.label")}:{" "}
                        </label>
                        <span className="required" />
                        <input
                            type="text"
                            name="name"
                            value={productValue.name}
                            placeholder={placeholderText("globally.input.name.placeholder.label")}
                            className="form-control"
                            autoFocus={true}
                            onChange={(e) => onChangeInput(e)}
                        />
                        <span className="text-danger d-block fw-400 fs-small mt-2">
                            {errors["name"] ? errors["name"] : null}
                        </span>
                    </div>

                    {/* Código */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            {getFormattedMessage("product.input.code.label")}:{" "}
                            <span className="required" />
                        </label>
                        <InputGroup className="flex-nowrap dropdown-side-btn">
                            <input
                                type="text"
                                name="code"
                                className="form-control position-relative"
                                placeholder={placeholderText("product.input.code.placeholder.label")}
                                onChange={(e) => onChangeInput(e)}
                                value={productValue.code}
                            />
                            <Button onClick={generateRandomCode}>
                                <FontAwesomeIcon icon={faBarcode} />
                            </Button>
                        </InputGroup>
                        <span className="text-danger d-block fw-400 fs-small mt-2">
                            {errors["code"] ? errors["code"] : null}
                        </span>
                    </div>

                    {/* Categoría */}
                    <div className="col-md-6 mb-3">
                        <ReactSelect
                            title={getFormattedMessage("product.input.product-category.label")}
                            placeholder={placeholderText("product.input.product-category.placeholder.label")}
                            defaultValue={selectedProductCategory}
                            value={productValue.product_category_id}
                            data={productCategories}
                            onChange={onProductCategoryChange}
                            errors={errors["product_category_id"]}
                        />
                    </div>

                    {/* Marca */}
                    <div className="col-md-6 mb-3">
                        <ReactSelect
                            title={getFormattedMessage("product.input.brand.label")}
                            placeholder={placeholderText("product.input.brand.placeholder.label")}
                            defaultValue={selectedBrand}
                            errors={errors["brand_id"]}
                            data={brands}
                            onChange={onBrandChange}
                            value={productValue.brand_id}
                        />
                    </div>

                    {/* Código de barras */}
                    <div className="col-md-6 mb-3">
                        <ReactSelect
                            title={getFormattedMessage("product.input.barcode-symbology.label")}
                            placeholder={placeholderText("product.input.barcode-symbology.placeholder.label")}
                            defaultValue={selectedBarcode}
                            errors={errors["barcode_symbol"]}
                            data={barcodes}
                            onChange={onBarcodeChange}
                            value={productValue.barcode_symbol}
                        />
                    </div>

                    {/* Unidad del producto */}
                    <div className="col-md-6 mb-3">
                        <InputGroup className="flex-nowrap dropdown-side-btn">
                            <ReactSelect
                                className="position-relative"
                                title={getFormattedMessage("product.input.product-unit.label")}
                                placeholder={placeholderText("product.input.product-unit.placeholder.label")}
                                defaultValue={productValue.product_unit}
                                value={productValue.product_unit}
                                data={baseUnits}
                                errors={errors["product_unit"]}
                                onChange={handleProductUnitChange}
                            />
                            <Button
                                onClick={() => showUnitModel(true)}
                                className="position-absolute model-dtn"
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </Button>
                        </InputGroup>
                    </div>

                    {/* Unidad de venta */}
                    <div className="col-md-6 mb-3">
                        <ReactSelect
                            className="position-relative"
                            title={getFormattedMessage("product.input.sale-unit.label")}
                            placeholder={placeholderText("product.input.sale-unit.placeholder.label")}
                            value={isClearDropdown === false ? "" : productValue.sale_unit}
                            data={saleUnitOption}
                            errors={errors["sale_unit"]}
                            onChange={handleSaleUnitChange}
                        />
                    </div>

                    {/* Unidad de compra */}
                    <div className="col-md-6 mb-3">
                        <ReactSelect
                            className="position-relative"
                            title={getFormattedMessage("product.input.purchase-unit.label")}
                            placeholder={placeholderText("product.input.purchase-unit.placeholder.label")}
                            value={isDropdown === false ? "" : productValue.purchase_unit}
                            data={saleUnitOption}
                            errors={errors["purchase_unit"]}
                            onChange={handlePurchaseUnitChange}
                        />
                    </div>

                    {/* Límite de cantidad de venta */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            {getFormattedMessage("product.input.quantity-limitation.label")}:{" "}
                        </label>
                        <input
                            type="number"
                            name="sale_quantity_limit"
                            className="form-control"
                            placeholder={placeholderText("product.input.quantity-limitation.placeholder")}
                            onKeyPress={(event) => decimalValidate(event)}
                            onChange={(e) => onChangeInput(e)}
                            value={productValue.sale_quantity_limit}
                            min={1}
                        />
                        <span className="text-danger d-block fw-400 fs-small mt-2">
                            {errors["stock_alert"] ? errors["stock_alert"] : null}
                        </span>
                    </div>

                    {/* Notas */}
                    <div className="col-md-6 mb-3">
                        <label className="form-label">
                            {getFormattedMessage("globally.input.notes.label")}:{" "}
                        </label>
                        <textarea
                            className="form-control"
                            name="notes"
                            rows={3}
                            placeholder={placeholderText("globally.input.notes.placeholder.label")}
                            onChange={(e) => onChangeInput(e)}
                            value={
                                productValue.notes
                                    ? productValue.notes === "null"
                                        ? ""
                                        : productValue.notes
                                    : ""
                            }
                        />
                        <span className="text-danger d-block fw-400 fs-small mt-2">
                            {errors["notes"] ? errors["notes"] : null}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfoSection;
