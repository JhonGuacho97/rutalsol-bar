import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);
dayjs.extend(relativeTime);
import { Button, Image } from "react-bootstrap-v5";
import MasterLayout from "../MasterLayout";
import { fetchAllMainProducts } from "../../store/action/productAction";
import ReactDataTable from "../../shared/table/ReactDataTable";
import DeleteMainProduct from "./DeleteMainProduct";
import TabTitle from "../../shared/tab-title/TabTitle";
import ProductImageLightBox from "./ProductImageLightBox";
import user from "../../assets/images/brand_logo.png";
import {
    getFormattedDate,
    getFormattedMessage,
    placeholderText,
    currencySymbolHandling,
} from "../../shared/sharedMethod";
import ActionButton from "../../shared/action-buttons/ActionButton";
import { fetchFrontSetting } from "../../store/action/frontSettingAction";
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import ImportProductModel from "./ImportProductModel";
import { downloadExcel } from "../../store/action/downloadReportAction";

const Product = (props) => {
    const {
        fetchAllMainProducts,
        products,
        totalRecord,
        isLoading,
        frontSetting,
        fetchFrontSetting,
        downloadExcel,
        productUnitId,
        allConfigData,
    } = props;
    const [deleteModel, setDeleteModel] = useState(false);
    const [isDelete, setIsDelete] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [lightBoxImage, setLightBoxImage] = useState([]);

    const [importProduct, setimportProduct] = useState(false);
    const handleClose = () => {
        setimportProduct(!importProduct);
    };

    const [isWarehouseValue, setIsWarehouseValue] = useState(false);
    useEffect(() => {
        if (isWarehouseValue === true) {
            downloadExcel(`products-export-excel${productUnitId ? '?id=' + productUnitId : ''}`, 'product_excel_url', () => setIsWarehouseValue(false));
        }
    }, [isWarehouseValue]);

    const onExcelClick = () => {
        setIsWarehouseValue(true);
    };

    useEffect(() => {
        fetchFrontSetting();
    }, []);

    const onClickDeleteModel = (isDelete = null) => {
        setDeleteModel(!deleteModel);
        setIsDelete(isDelete);
    };

    const onChange = (filter) => {
        fetchAllMainProducts(filter, true);
    };

    const goToEditProduct = (item) => {
        const id = item.id;
        window.location.href = "#/app/products/edit/" + id;
    };

    const goToProductDetailPage = (ProductId) => {
        window.location.href = "#/app/products/detail/" + ProductId;
    };

    const currencySymbol =
        frontSetting &&
        frontSetting.value &&
        frontSetting.value.currency_symbol;

    const formattedPrice = (product_price) => {
        return currencySymbolHandling(
            allConfigData,
            currencySymbol,
            product_price
        )
    }

    const itemsValue =
        currencySymbol &&
        products.length >= 0 &&
        products.map((product) => {
            let product_price = product.attributes.min_price == product.attributes.max_price ? formattedPrice(product.attributes.min_price) : formattedPrice(product.attributes.min_price) + " - " + formattedPrice(product.attributes.max_price);
            const productData = product?.attributes?.products?.length > 0
                ? product.attributes.products[0]
                : null;
            return {
                name: product?.attributes.name,
                code: product?.attributes.code,
                date: getFormattedDate(
                    productData?.created_at,
                    allConfigData && allConfigData
                ),
                time: productData?.created_at
                    ? dayjs(productData.created_at).format("LT")
                    : "-",
                brand_name: product?.attributes.products ? product?.attributes.products[0].brand_name : "",
                product_price: product_price,
                product_unit: product?.attributes.product_unit?.name
                    ? product?.attributes.product_unit?.name
                    : "N/A",
                in_stock: product.attributes.products?.reduce((sum, product) => sum + product?.stock?.quantity ? product.stock.quantity : 0, 0),
                images: product?.attributes.images,
                id: product.id,
                currency: currencySymbol,
            };
        });

    const columns = [
        {
            name: getFormattedMessage("product.title"),
            sortField: "name",
            sortable: false,
            cell: (row) => {
                const imageUrl = row.images
                    ? row.images.imageUrls && row.images.imageUrls[0]
                    : null;
                return imageUrl ? (
                    <div className="d-flex align-items-center">
                        <Button
                            type="button"
                            className="btn-transparent me-2 d-flex align-items-center justify-content-center"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                                setLightBoxImage(row.images.imageUrls);
                            }}
                        >
                            <Image
                                src={imageUrl}
                                height="50"
                                width="50"
                                alt="Product Image"
                                className="image image-circle image-mini cursor-pointer"
                            />
                        </Button>
                    </div>
                ) : (
                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <Image
                                src={user}
                                height="50"
                                width="50"
                                alt="Product Image"
                                className="image image-circle image-mini"
                            />
                        </div>
                    </div>
                );
            },
        },
        {
            name: getFormattedMessage("supplier.table.name.column.title"),
            selector: (row) => row.name,
            className: "product-name",
            sortField: "name",
            sortable: true,
        },
        {
            name: getFormattedMessage("product.input.code.label"),
            selector: (row) => (
                <span className="badge bg-light-danger">
                    <span>{row.code}</span>
                </span>
            ),
            sortField: "code",
            sortable: true,
        },
        {
            name: getFormattedMessage("product.input.brand.label"),
            selector: (row) => row.brand_name,
            sortField: "brand_name",
            sortable: false,
        },
        {
            name: getFormattedMessage("product.table.price.column.label"),

            selector: (row) =>
                row.product_price
        },
        {
            name: getFormattedMessage("product.input.product-unit.label"),
            sortField: "product_unit",
            sortable: true,
            cell: (row) => {
                return (
                    row.product_unit && (
                        <span className="badge bg-light-success">
                            <span>{row.product_unit}</span>
                        </span>
                    )
                );
            },
        },
        {
            name: getFormattedMessage("product.product-in-stock.label"),
            // name: "In stock",
            selector: (row) => row.in_stock,
            sortField: "in_stock",
            sortable: false,
        },
        {
            name: getFormattedMessage(
                "globally.react-table.column.created-date.label"
            ),
            selector: (row) => row.date,
            sortField: "created_at",
            sortable: true,
            cell: (row) => {
                return (
                    <span className="badge bg-light-info">
                        <div className="mb-1">{row.time}</div>
                        {row.date}
                    </span>
                );
            },
        },
        {
            name: getFormattedMessage("react-data-table.action.column.label"),
            right: true,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            width: "120px",
            cell: (row) => (
                <ActionButton
                    isViewIcon={true}
                    goToDetailScreen={goToProductDetailPage}
                    item={row}
                    goToEditProduct={goToEditProduct}
                    isEditMode={true}
                    onClickDeleteModel={onClickDeleteModel}
                />
            ),
        },
    ];

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText("products.title")} />
            <ReactDataTable
                columns={columns}
                items={itemsValue}
                onChange={onChange}
                isLoading={isLoading}
                ButtonValue={getFormattedMessage("product.create.title")}
                totalRows={totalRecord}
                to="#/app/products/create"
                isShowFilterField
                isUnitFilter
                title={getFormattedMessage("product.input.product-unit.label")}
                buttonImport={true}
                goToImport={handleClose}
                importBtnTitle={"product.import.title"}
                isExport
                onExcelClick={onExcelClick}
            />
            <DeleteMainProduct
                onClickDeleteModel={onClickDeleteModel}
                deleteModel={deleteModel}
                onDelete={isDelete}
            />
            {isOpen && lightBoxImage.length !== 0 && (
                <ProductImageLightBox
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    lightBoxImage={lightBoxImage}
                />
            )}
            {importProduct && (
                <ImportProductModel
                    handleClose={handleClose}
                    show={importProduct}
                />
            )}
        </MasterLayout>
    );
};

const mapStateToProps = (state) => {
    const {
        products,
        totalRecord,
        isLoading,
        frontSetting,
        productUnitId,
        allConfigData,
    } = state;
    return {
        products,
        totalRecord,
        isLoading,
        frontSetting,
        productUnitId,
        allConfigData,
    };
};

export default connect(mapStateToProps, {
    fetchAllMainProducts,
    fetchFrontSetting,
    downloadExcel,
})(Product);
