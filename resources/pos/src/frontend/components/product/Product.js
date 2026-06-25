import React, { useEffect, useState } from "react";
import { Card, Badge } from "react-bootstrap-v5";
import { connect, useDispatch } from "react-redux";
import useSound from "use-sound";
import { posFetchProduct } from "../../../store/action/pos/posfetchProductAction";
import { posAllProduct } from "../../../store/action/pos/posAllProductAction";
import productImage from "../../../assets/images/brand_logo.png";
import { addToast } from "../../../store/action/toastAction";
import {
    currencySymbolHandling,
    getFormattedMessage,
} from "../../../shared/sharedMethod";
import { toastType } from "../../../constants";
import { SkeletonCard } from "../card-skeleton/SkeletonCard";

const Product = (props) => {
    const {
        posAllProducts,
        posFetchProduct,
        cartProducts,
        updateCart,
        customCart,
        cartProductIds,
        setCartProductIds,
        settings,
        productMsg,
        newCost,
        selectedOption,
        allConfigData,
    } = props;
    const [updateProducts, setUpdateProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [play] = useSound(
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    );
    const dispatch = useDispatch();

    // useEffect(() => {
    //     // update cart while cart is updated
    //     cartProducts && setUpdateProducts(cartProducts);
    //     const ids = updateProducts.map((item) => {
    //         return item.id;
    //     });
    //     setCartProductIds(ids);
    // }, [updateProducts, cartProducts]);

    useEffect(() => {
        if (cartProducts) {
            setUpdateProducts(cartProducts);
            const ids = cartProducts.map((item) => item.id);
            setCartProductIds(ids);
        }
    }, [cartProducts]);

    useEffect(() => {
        if (posAllProducts && posAllProducts.length > 0) {
            setIsLoading(false);  // ← cuando llegan productos, quita el skeleton
        }
    }, [posAllProducts]);

    const addToCart = (product) => {
        play();
        posFetchProduct(product.id);
        addProductToCart(product);
    };

    const addProductToCart = (product) => {
        const newId = posAllProducts
            .filter((item) => item.id === product.id)
            .map((item) => item.id);
        const finalIdArrays = customCart.map((id) => id.product_id);
        const finalId = finalIdArrays.filter(
            (finalIdArray) => finalIdArray === newId[0]
        );
        const pushArray = [...customCart];
        const newProduct = pushArray.find(
            (element) => element.id === finalId[0]
        );
        const filterQty = updateProducts
            .filter((item) => item.id === product.id)
            .map((qty) => qty.quantity)[0];
        if (
            updateProducts.filter((item) => item.id === product.id).length > 0
        ) {
            if (filterQty >= product.attributes.stock.quantity) {
                dispatch(
                    addToast({
                        text: getFormattedMessage(
                            "pos.quantity.exceeds.quantity.available.in.stock.message"
                        ),
                        type: toastType.ERROR,
                    })
                );
            } else {
                setUpdateProducts((updateProducts) =>
                    updateProducts.map((item) =>
                        item.id === product.id
                            ? {
                                ...item,
                                quantity:
                                    product.attributes.stock.quantity >
                                        item.quantity
                                        ? item.quantity++ + 1
                                        : null,
                            }
                            : { ...item, id: item.id }
                    )
                );
                updateCart(updateProducts, product);
            }
        } else {
            setUpdateProducts((prevSelected) => [...prevSelected, product]);
            updateCart((prevSelected) => [...prevSelected, newProduct]);
        }
    };

    const isProductExistInCart = (productId) => {
        return cartProductIds.includes(productId);
    };

    const posFilterProduct =
        posAllProducts &&
        posAllProducts.filter(
            (product) => product.attributes.stock.quantity > 0.0
        );
    const loadAllProduct = (product, index) => {
        const findDifferentWords = (str1, str2) => {
            const words1 = str1.split("_");
            const words2 = str2.split("_");

            const uniqueWords1 = words1.filter(
                (word) => word !== "" && !words2.includes(word)
            );
            const uniqueWords2 = words2.filter(
                (word) => word !== "" && !words1.includes(word)
            );

            return [...uniqueWords1, ...uniqueWords2];
        };

        return product.attributes.stock.quantity >= !0.0 ? (
            <div
                className="product-custom-card"
                key={index}
                onClick={() => addToCart(product)}
            >
                <Card
                    className={`product-card h-100 ${isProductExistInCart(product.id) ? "product-active" : ""
                        }`}
                >
                    <div className="product-img-wrapper">
                        <img
                            src={
                                product.attributes.images.imageUrls
                                    ? product.attributes.images.imageUrls[0]
                                    : productImage
                            }
                            alt="product"
                            className="product-img"
                        />

                        <div className="price-badge">
                            {currencySymbolHandling(
                                allConfigData,
                                settings.attributes &&
                                settings.attributes.currency_symbol,
                                newCost
                                    ? newCost
                                    : product.attributes.product_price
                            )}
                        </div>
                    </div>

                    {/* 📦 BODY */}
                    <Card.Body className="p-2">
                        <h6 className="product-title text-truncate">
                            {product.attributes?.name}
                            {product.attributes?.code !==
                                product.attributes?.product_code
                                ? ` (${findDifferentWords(
                                    product.attributes?.code,
                                    product.attributes?.product_code
                                )})`
                                : null}
                        </h6>

                        <span className="product-code">
                            {product.attributes.code}
                        </span>

                        {/* 📊 STOCK */}
                        <div className="stock-badge mt-1">
                            {product.attributes.stock &&
                                product.attributes.stock.quantity}{" "}
                            {product?.attributes?.product_unit_name?.name}
                        </div>
                    </Card.Body>
                </Card>

                <style>
                    {`
/* 🔥 CONTENEDOR */
.product-img-wrapper {
    position: relative;
    width: 100%;
    height: 180px; /* puedes subir a 200 si quieres más grande */
    overflow: hidden;
    border-radius: 12px 12px 0 0; /* solo arriba */
}

/* 🖼️ IMAGEN FULL */
.product-img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 🔥 clave */
    display: block;
}

/* 💰 PRECIO */
.price-badge {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: rgba(17, 24, 39, 0.9);
    color: white;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: 600;
}

/* ❌ QUITA ESPACIOS DE CARD */
.product-card .card-img-top {
    margin: 0 !important;
    border-radius: 0 !important;
}

/* 📦 BODY MÁS COMPACTO */
.product-card .card-body {
    padding: 6px 8px !important;
}

/* 🧾 TEXTO MÁS LIMPIO */
.product-title {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 2px;
}

.product-code {
    font-size: 10px;
}

/* 📊 STOCK */
.stock-badge {
    font-size: 10px;
}
                `}
                </style>
            </div>
        ) : (
            ""
        );
    };

    return (
        <div
            className={`${posFilterProduct && posFilterProduct.length === 0
                ? "d-flex align-items-center justify-content-center"
                : ""
                } product-list-block pt-1`}
        >
            {isLoading ? (
                <div
                    className="d-flex flex-wrap product-list-block__product-block"
                    style={{ width: '100%', padding: '0 8px' }}  // ← agrega esto
                >
                    {[...Array(24)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            ) : (
                <div className="d-flex flex-wrap product-list-block__product-block">
                    {posFilterProduct && posFilterProduct.length === 0 ? (
                        <h4 className="m-auto">
                            {getFormattedMessage("pos-no-product-available.label")}
                        </h4>
                    ) : ""}
                    {productMsg && productMsg === 1 ? (
                        <h4 className="m-auto">
                            {getFormattedMessage("pos-no-product-available.label")}
                        </h4>
                    ) : (
                        posFilterProduct && posFilterProduct.map((product, index) => {
                            return loadAllProduct(product, index);
                        })
                    )}
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    const { posAllProducts, allConfigData } = state;
    return { posAllProducts, allConfigData };
};

export default connect(mapStateToProps, { posAllProduct, posFetchProduct })(
    Product
);
