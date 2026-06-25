import React from "react";
import { InputGroup } from "react-bootstrap-v5";
import ReactSelect from "../../../shared/select/reactSelect";
import {
    decimalValidate,
    getFormattedMessage,
    getFormattedOptions,
    placeholderText,
} from "../../../shared/sharedMethod";
import { taxMethodOptions } from "../../../constants";

const PricingSection = ({
    singleProduct,
    singleProductTypeData,
    errors,
    frontSetting,
    defaultTaxType,
    onSingleProductDataChange,
    onTaxTypeChange,
}) => {
    const taxTypeFilterOptions = getFormattedOptions(taxMethodOptions);

    return (
        <div className="row border-top pt-3">
            {/* Costo */}
            <div className="col-md-3 mb-3">
                <label className="form-label">
                    {getFormattedMessage("product.input.product-cost.label")}:{" "}
                </label>
                <span className="required" />
                <InputGroup>
                    <input
                        type="text"
                        name="product_cost"
                        min={0}
                        className="form-control"
                        placeholder={placeholderText("product.input.product-cost.placeholder.label")}
                        onKeyPress={(event) => decimalValidate(event)}
                        onChange={(e) => onSingleProductDataChange(e)}
                        value={singleProductTypeData.product_cost}
                    />
                    <InputGroup.Text>
                        {frontSetting.value && frontSetting.value.currency_symbol}
                    </InputGroup.Text>
                </InputGroup>
                <span className="text-danger d-block fw-400 fs-small mt-2">
                    {errors["product_cost"] ? errors["product_cost"] : null}
                </span>
            </div>

            {/* Precio */}
            <div className="col-md-3 mb-3">
                <label className="form-label">
                    {getFormattedMessage("product.input.product-price.label")}:{" "}
                </label>
                <span className="required" />
                <InputGroup>
                    <input
                        type="text"
                        name="product_price"
                        min={0}
                        className="form-control"
                        placeholder={placeholderText("product.input.product-price.placeholder.label")}
                        onKeyPress={(event) => decimalValidate(event)}
                        onChange={(e) => onSingleProductDataChange(e)}
                        value={singleProductTypeData.product_price}
                    />
                    <InputGroup.Text>
                        {frontSetting.value && frontSetting.value.currency_symbol}
                    </InputGroup.Text>
                </InputGroup>
                <span className="text-danger d-block fw-400 fs-small mt-2">
                    {errors["product_price"] ? errors["product_price"] : null}
                </span>
            </div>

            {/* Alerta de stock */}
            <div className="col-md-3 mb-3">
                <label className="form-label">
                    {getFormattedMessage("product.input.stock-alert.label")}:{" "}
                </label>
                <input
                    type="number"
                    name="stock_alert"
                    className="form-control"
                    placeholder={placeholderText("product.input.stock-alert.placeholder.label")}
                    onKeyPress={(event) => decimalValidate(event)}
                    onChange={(e) => onSingleProductDataChange(e)}
                    value={singleProductTypeData.stock_alert}
                    min={0}
                />
            </div>

            {/* Impuesto de orden */}
            <div className="col-md-3 mb-3">
                <label className="form-label">
                    {getFormattedMessage("product.input.order-tax.label")}:{" "}
                </label>
                <InputGroup>
                    <input
                        type="text"
                        name="order_tax"
                        className="form-control"
                        placeholder={placeholderText("product.input.order-tax.placeholder.label")}
                        onKeyPress={(event) => decimalValidate(event)}
                        onChange={(e) => onSingleProductDataChange(e)}
                        min={0}
                        pattern="[0-9]*"
                        value={singleProductTypeData.order_tax}
                    />
                    <InputGroup.Text>%</InputGroup.Text>
                </InputGroup>
                <span className="text-danger d-block fw-400 fs-small mt-2">
                    {errors["order_tax"] ? errors["order_tax"] : null}
                </span>
            </div>

            {/* Tipo de impuesto */}
            <div className="col-md-3 mb-3">
                <ReactSelect
                    title={getFormattedMessage("product.input.tax-type.label")}
                    multiLanguageOption={taxTypeFilterOptions}
                    value={singleProductTypeData.tax_type}
                    onChange={(data) => onTaxTypeChange(data)}
                    errors={errors["tax_type"]}
                    defaultValue={defaultTaxType}
                    placeholder={placeholderText("product.input.tax-type.placeholder.label")}
                />
            </div>

            {/* Cantidad a agregar — solo en creación */}
            {!singleProduct && (
                <div className="col-md-3 mb-3">
                    <label className="form-label">
                        {getFormattedMessage("product-quantity.add.title")}:
                    </label>
                    <span className="required" />
                    <input
                        type="number"
                        name="add_stock"
                        className="form-control"
                        placeholder={placeholderText("product-quantity.add.title")}
                        onKeyPress={(event) => decimalValidate(event)}
                        onChange={(e) => onSingleProductDataChange(e)}
                        value={singleProductTypeData.add_stock}
                        min={1}
                    />
                    <span className="text-danger d-block fw-400 fs-small mt-2">
                        {errors["add_stock"] ? errors["add_stock"] : null}
                    </span>
                </div>
            )}
        </div>
    );
};

export default PricingSection;
