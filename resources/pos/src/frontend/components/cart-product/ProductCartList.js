import React from "react";
import { Button } from "react-bootstrap-v5";
import { connect, useDispatch } from "react-redux";
import {
    currencySymbolHandling,
    decimalValidate,
    getFormattedMessage,
} from "../../../shared/sharedMethod";
import { calculateProductCost } from "../../shared/SharedMethod";
import { addToast } from "../../../store/action/toastAction";
import { toastType } from "../../../constants";

const ProductCartList = (props) => {
    const {
        singleProduct,
        index,
        onClickUpdateItemInCart,
        onDeleteCartItem,
        frontSetting,
        setUpdateProducts,
        posAllProducts,
        allConfigData,
    } = props;
    const dispatch = useDispatch();
    const totalQty = posAllProducts
        .filter((product) => product.id === singleProduct.id)
        .map((product) => product.attributes.stock.quantity);

    const handleIncrement = () => {
        setUpdateProducts((updateProducts) =>
            updateProducts.map((item) => {
                if (item.id === singleProduct.id) {
                    if (item.quantity >= totalQty[0]) {
                        dispatch(
                            addToast({
                                text: getFormattedMessage(
                                    "pos.product-quantity-error.message"
                                ),
                                type: toastType.ERROR,
                            })
                        );
                        return item;
                    } else {
                        return { ...item, quantity: item.quantity++ + 1 };
                    }
                } else {
                    return item;
                }
            })
        );
    };

    const handleDecrement = () => {
        if (singleProduct.quantity - 1 > 0.0) {
            setUpdateProducts((updateProducts) =>
                updateProducts.map((item) =>
                    item.id === singleProduct.id
                        ? { ...item, quantity: item.quantity-- - 1 }
                        : item
                )
            );
        }
    };

    //qty onChange
    const handleChange = (e) => {
        e.preventDefault();
        const { value } = e.target;
        // check if value includes a decimal point
        if (value.match(/\./g)) {
            const [, decimal] = value.split(".");
            // restrict value to only 2 decimal places
            if (decimal?.length > 2) {
                // do nothing
                return;
            }
        }

        setUpdateProducts((updateProducts) =>
            updateProducts.map((item) => {
                if (item.id === singleProduct.id) {
                    if (totalQty[0] < Number(e.target.value)) {
                        dispatch(
                            addToast({
                                text: getFormattedMessage(
                                    "pos.product-quantity-error.message"
                                ),
                                type: toastType.ERROR,
                            })
                        );
                        return { ...item, quantity: totalQty[0] };
                    } else {
                        return {
                            ...item,
                            quantity: Number(e.target.value),
                        };
                    }
                } else {
                    return item;
                }
            })
        );
    };

    return (
        <tr className="align-middle product-row">
            {/* 🛍️ PRODUCTO */}
            <td className="ps-3">
                <div className="d-flex flex-column">
                    <span className="product-title text-truncate">
                        {singleProduct.name}
                    </span>

                    <div className="d-flex align-items-center gap-2 mt-1">
                        <span className="sku-badge">
                            {singleProduct.code}
                        </span>

                        <i
                            className="bi bi-pencil edit-icon"
                            onClick={() => onClickUpdateItemInCart(singleProduct)}
                        />
                    </div>
                </div>
            </td>

            {/* 🔢 CANTIDAD */}
            <td>
                <div className="qty-container">
                    <button
                        onClick={handleDecrement}
                        className="qty-btn"
                    >
                        -
                    </button>

                    <input
                        type="number"
                        value={singleProduct.quantity}
                        className="qty-input"
                        onKeyPress={(event) => decimalValidate(event)}
                        onChange={(e) => handleChange(e)}
                    />

                    <button
                        onClick={handleIncrement}
                        className="qty-btn"
                    >
                        +
                    </button>
                </div>
            </td>

            {/* 💰 PRECIO */}
            <td className="price-text">
                {currencySymbolHandling(
                    allConfigData,
                    frontSetting.value && frontSetting.value.currency_symbol,
                    calculateProductCost(singleProduct)
                )}
            </td>

            {/* 💵 SUBTOTAL */}
            <td className="text-end subtotal-text">
                {currencySymbolHandling(
                    allConfigData,
                    frontSetting.value && frontSetting.value.currency_symbol,
                    calculateProductCost(singleProduct) * singleProduct.quantity
                )}
            </td>

            {/* 🗑️ DELETE */}
            <td className="text-end pe-3">
                <button
                    className="delete-btn"
                    onClick={() => onDeleteCartItem(singleProduct.id)}
                >
                    <i className="bi bi-trash3" />
                </button>
            </td>

            <style>
                {`
        /* 🔥 PRODUCTO */
        .product-title {
            font-weight: 600;
            font-size: 14px;
            color: #111827;
        }

        .sku-badge {
            font-size: 11px;
            background: #eef2ff;
            color: #4f46e5;
            padding: 2px 8px;
            border-radius: 6px;
        }

        .edit-icon {
            font-size: 12px;
            color: #6b7280;
            cursor: pointer;
            transition: 0.2s;
        }

        .edit-icon:hover {
            color: #4f46e5;
        }

        /* 🔢 CANTIDAD (🔥 clave del POS) */
        .qty-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        .qty-btn {
            width: 30px;
            height: 30px;
            border-radius: 8px;
            border: none;
            background: #eef2ff;
            color: #4f46e5;
            font-weight: bold;
            transition: 0.2s;
        }

        .qty-btn:hover {
            background: #4f46e5;
            color: white;
        }

        .qty-input {
            width: 45px;
            text-align: center;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            height: 30px;
            font-weight: 600;
        }

        .qty-input:focus {
            outline: none;
            border-color: #4f46e5;
        }

        /* 💰 PRECIO */
        .price-text {
            font-size: 13px;
            color: #6b7280;
        }

        /* 💵 SUBTOTAL (más importante) */
        .subtotal-text {
            font-weight: 700;
            color: #111827;
        }

        /* 🗑️ DELETE */
        .delete-btn {
            border: none;
            background: transparent;
            color: #ef4444;
            font-size: 16px;
            transition: 0.2s;
        }

        .delete-btn:hover {
            transform: scale(1.2);
        }
        `}
            </style>
        </tr>
    );
};

export default connect(null, null)(ProductCartList);
