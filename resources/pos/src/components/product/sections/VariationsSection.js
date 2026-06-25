import React from "react";
import { InputGroup } from "react-bootstrap-v5";
import ReactSelect from "../../../shared/select/reactSelect";
import ReactMultiSelect from "../../../shared/select/ReactMultiSelect";
import {
    decimalValidate,
    getFormattedMessage,
    getFormattedOptions,
    placeholderText,
} from "../../../shared/sharedMethod";
import { taxMethodOptions } from "../../../constants";

const VariationsSection = ({
    singleProduct,
    productValue,
    variationsOptions,
    variationTypesOptions,
    variationTypesData,
    errors,
    frontSetting,
    defaultTaxType,
    onVariationChange,
    onVariationTypesChange,
    onTaxTypeChange,
    onChangeVariationTypesData,
}) => {
    const taxTypeFilterOptions = getFormattedOptions(taxMethodOptions);

    const isVariable = typeof productValue.product_type !== "string" &&
        productValue.product_type?.value === 2;

    const variationSelected = typeof productValue.variation !== "string";
    const variationTypeSelected = typeof productValue.variation_type !== "string";

    // ReactSelect siempre se renderiza (nunca condicionalmente) para respetar
    // las Rules of Hooks — useDispatch/useContext dentro de ReactSelect
    // debe llamarse en el mismo orden en cada render.
    // Usamos display:none para ocultar secciones en lugar de && condicional.

    return (
        <>
            {/* Selector de variación — siempre en el DOM, visible solo si isVariable */}
            <div className="col-md-4 mb-3" style={{ display: isVariable ? "block" : "none" }}>
                <ReactSelect
                    title={getFormattedMessage("variations.title")}
                    value={productValue.variation}
                    multiLanguageOption={variationsOptions}
                    onChange={onVariationChange}
                    errors={errors["variation"]}
                    isWarehouseDisable={!!singleProduct}
                />
            </div>

            {/* Selector de tipos de variación */}
            <div
                className="col-md-4 mb-3"
                style={{ display: isVariable && variationSelected ? "block" : "none" }}
            >
                <ReactMultiSelect
                    title={getFormattedMessage("variation.variation_types")}
                    value={productValue.variation_type}
                    option={variationTypesOptions}
                    onChange={onVariationTypesChange}
                    errors={errors["variation_type"]}
                />
            </div>

            {/* Filas de precio por tipo de variación */}
            {isVariable && variationSelected && variationTypeSelected &&
                variationTypesData?.map((variation) => (
                    <div
                        className="row border-top pt-3"
                        key={variation.variation_type_id}
                    >
                        {/* Tipo */}
                        <div className="col-md-3 mb-3">
                            <label className="form-label">
                                {getFormattedMessage("variation.type.title")}:
                            </label>
                            <input
                                type="text"
                                name="variation_type"
                                className="form-control"
                                value={variation.variation_type}
                                disabled
                                readOnly
                            />
                        </div>

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
                                    onChange={(e) => onChangeVariationTypesData(e, variation.variation_type_id)}
                                    value={variation.product_cost}
                                />
                                <InputGroup.Text>
                                    {frontSetting.value && frontSetting.value.currency_symbol}
                                </InputGroup.Text>
                            </InputGroup>
                            <span className="text-danger d-block fw-400 fs-small mt-2">
                                {errors[`${variation.variation_type_id}_product_cost`] || null}
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
                                    onChange={(e) => onChangeVariationTypesData(e, variation.variation_type_id)}
                                    value={variation.product_price}
                                />
                                <InputGroup.Text>
                                    {frontSetting.value && frontSetting.value.currency_symbol}
                                </InputGroup.Text>
                            </InputGroup>
                            <span className="text-danger d-block fw-400 fs-small mt-2">
                                {errors[`${variation.variation_type_id}_product_price`] || null}
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
                                onChange={(e) => onChangeVariationTypesData(e, variation.variation_type_id)}
                                value={variation.stock_alert}
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
                                    onChange={(e) => onChangeVariationTypesData(e, variation.variation_type_id)}
                                    min={0}
                                    pattern="[0-9]*"
                                    value={variation.order_tax}
                                />
                                <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup>
                            <span className="text-danger d-block fw-400 fs-small mt-2">
                                {errors[`${variation.variation_type_id}_order_tax`] || null}
                            </span>
                        </div>

                        {/* Tipo de impuesto — siempre renderizado */}
                        <div className="col-md-3 mb-3">
                            <ReactSelect
                                title={getFormattedMessage("product.input.tax-type.label")}
                                multiLanguageOption={taxTypeFilterOptions}
                                value={variation.tax_type}
                                onChange={(data) => onTaxTypeChange(data, variation.variation_type_id)}
                                errors={errors[`${variation.variation_type_id}_tax_type`]}
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
                                    onChange={(e) => onChangeVariationTypesData(e, variation.variation_type_id)}
                                    value={variation.add_stock}
                                    min={1}
                                />
                                <span className="text-danger d-block fw-400 fs-small mt-2">
                                    {errors[`${variation.variation_type_id}_add_stock`] || null}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
        </>
    );
};

export default VariationsSection;
