import React from "react";
import {
    maxLengthPorTipo,
    placeholderPorTipo,
    labelPorTipo,
} from "../../utils/identificacionValidator";

const IdentificacionField = ({ tipo, value, onChange, error, isEdit, sriLoading, onSriLookup }) => (
    <div className="col-md-6 mb-3">
        <label className="form-label">{labelPorTipo(tipo)}</label>
        <div className="input-group">
            <input
                type="text"
                name="identification"
                className={`form-control ${error ? "is-invalid" : ""}`}
                maxLength={maxLengthPorTipo(tipo)}
                value={value || ""}
                onChange={onChange}
                disabled={tipo === "07"}
                placeholder={placeholderPorTipo(tipo)}
            />
            {!isEdit && tipo !== "07" && (
                <button
                    type="button"
                    className="btn btn-primary"
                    disabled={sriLoading || (value || "").length < 10}
                    onClick={onSriLookup}
                >
                    {sriLoading ? "..." : "SRI"}
                </button>
            )}
        </div>
        {error && (
            <span className="text-danger" style={{ fontSize: "0.85rem" }}>
                {error}
            </span>
        )}
    </div>
);

export default IdentificacionField;