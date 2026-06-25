import React from "react";
import MultipleImage from "../MultipleImage";
import ReactSelect from "../../../shared/select/reactSelect";
import {
    getFormattedMessage,
    placeholderText,
} from "../../../shared/sharedMethod";
import { saleStatusOptions } from "../../../constants";
import { getFormattedOptions } from "../../../shared/sharedMethod";

const StockSection = ({
    singleProduct,
    warehouses,
    suppliers,
    productValue,
    errors,
    onChangeFiles,
    transferImage,
    onWarehouseChange,
    onSupplierChange,
    onStatusChange,
}) => {
    const statusFilterOptions = getFormattedOptions(saleStatusOptions);
    const statusDefaultValue = statusFilterOptions.map((option) => ({
        value: option.id,
        label: option.name,
    }));

    return (
        <div className="col-xl-4">
            {/* Imágenes */}
            <div className="card">
                <label className="form-label">
                    {getFormattedMessage("product.input.multiple-image.label")}:{" "}
                </label>
                <MultipleImage
                    product={singleProduct}
                    fetchFiles={onChangeFiles}
                    transferImage={transferImage}
                />
            </div>

            {/* Almacén, proveedor y estado — solo en creación */}
            {!singleProduct && (
                <div>
                    <div className="col-md-12 mb-3">
                        <h1 className="text-center">
                            {getFormattedMessage("add-stock.title")} :{" "}
                        </h1>
                    </div>
                    <div className="col-md-12 mb-3">
                        <ReactSelect
                            data={warehouses}
                            onChange={onWarehouseChange}
                            defaultValue={productValue.warehouse_id}
                            isWarehouseDisable={true}
                            title={getFormattedMessage("warehouse.title")}
                            errors={errors["warehouse_id"]}
                            placeholder={placeholderText("purchase.select.warehouse.placeholder.label")}
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <ReactSelect
                            data={suppliers}
                            onChange={onSupplierChange}
                            defaultValue={productValue.supplier_id}
                            title={getFormattedMessage("supplier.title")}
                            errors={errors["supplier_id"]}
                            placeholder={placeholderText("purchase.select.supplier.placeholder.label")}
                        />
                    </div>
                    <div className="col-md-12 mb-3">
                        <ReactSelect
                            multiLanguageOption={statusFilterOptions}
                            onChange={onStatusChange}
                            name="status"
                            title={getFormattedMessage("purchase.select.status.label")}
                            value={productValue.status_id}
                            errors={errors["status_id"]}
                            defaultValue={statusDefaultValue[0]}
                            placeholder={getFormattedMessage("purchase.select.status.label")}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default StockSection;
