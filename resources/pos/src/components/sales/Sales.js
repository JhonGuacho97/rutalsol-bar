import React, { useEffect, useState } from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(utc);
dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);
dayjs.extend(relativeTime);
import { connect, useDispatch, useSelector } from "react-redux";
import MasterLayout from "../MasterLayout";
import TabTitle from "../../shared/tab-title/TabTitle";
import ReactDataTable from "../../shared/table/ReactDataTable";
import { fetchSales } from "../../store/action/salesAction";
import DeleteSale from "./DeleteSale";
import {
    currencySymbolHandling,
    getFormattedDate,
    getFormattedMessage,
    placeholderText,
} from "../../shared/sharedMethod";
import { downloadPdf } from "../../store/action/downloadReportAction";
import ActionDropDownButton from "../../shared/action-buttons/ActionDropDownButton";
import { fetchFrontSetting } from "../../store/action/frontSettingAction";
import ShowPayment from "../../shared/showPayment/ShowPayment";
import CreatePaymentModal from "./CreatePaymentModal";
import { fetchSalePayments } from "../../store/action/salePaymentAction";
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import TicketSlipModal from "../../frontend/components/paymentSlipModal/TicketSlipModal";

const Sales = (props) => {
    const {
        sales,
        fetchSales,
        totalRecord,
        isLoading,
        downloadPdf,
        fetchFrontSetting,
        frontSetting,
        isCallSaleApi,
        allConfigData,
    } = props;

    const [deleteModel, setDeleteModel] = useState(false);
    const [isShowPaymentModel, setIsShowPaymentModel] = useState(false);
    const [isCreatePaymentOpen, setIsCreatePaymentOpen] = useState(false);
    const [isDelete, setIsDelete] = useState(null);
    const [createPaymentItem, setCreatePaymentItem] = useState({});
    const { allSalePayments } = useSelector((state) => state);
    const [tableArray, setTableArray] = useState([]);

    const [modalShowPaymentSlip, setModalShowPaymentSlip] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);

    useEffect(() => {
        fetchFrontSetting();
    }, []);

    const currencySymbol =
        frontSetting &&
        frontSetting.value &&
        frontSetting.value.currency_symbol;

    const onChange = (filter) => {
        fetchSales(filter, true);
    };

    //sale edit function
    const goToEdit = (item) => {
        const id = item.id;
        window.location.href = "#/app/sales/edit/" + id;
    };

    // delete sale function
    const onClickDeleteModel = (isDelete = null) => {
        setDeleteModel(!deleteModel);
        setIsDelete(isDelete);
    };
    const dispatch = useDispatch();

    const onShowPaymentClick = (item) => {
        setIsShowPaymentModel(!isShowPaymentModel);
        setCreatePaymentItem(item);
        if (item) {
            dispatch(fetchSalePayments(item.id));
        }
    };

    const onCreatePaymentClick = (item) => {
        setIsCreatePaymentOpen(!isCreatePaymentOpen);
        setCreatePaymentItem(item);
        if (item) {
            dispatch(fetchSalePayments(item.id));
        }
    };

    //sale details function
    const goToDetailScreen = (ProductId) => {
        window.location.href = "#/app/sales/detail/" + ProductId;
    };

    //onClick pdf function
    const onPdfClick = (id) => {
        downloadPdf(`sale-pdf-download/${id}`, 'sale_pdf_url');
    };

    const onShowReceiptClick = (sale) => {
        //document.body.click();
        setSelectedSale(sale);
        setModalShowPaymentSlip(true);
    };

    const handleCloseTicketModal = () => {
        setModalShowPaymentSlip(false);
        setSelectedSale(null);
    };

    const onCreateSaleReturnClick = (item) => {
        const id = item.id;
        window.location.href =
            item.is_return === 1
                ? "#/app/sales/return/edit/" + id
                : "#/app/sales/return/" + id;
    };

    const itemsValue =
        currencySymbol &&
        sales.length >= 0 &&
        sales.map((sale) => ({
            date: getFormattedDate(
                sale.attributes.date,
                allConfigData && allConfigData
            ),
            // date_for_payment: sale.attributes.date,
            time: dayjs(sale.attributes.created_at).format("LT"),
            reference_code: sale.attributes.reference_code,
            customer_name: sale.attributes.customer_name,
            warehouse_name: sale.attributes.warehouse_name,
            status: sale.attributes.status,
            payment_status: sale.attributes.payment_status,
            payment_type: sale.attributes.payment_type,
            grand_total: sale.attributes.grand_total,
            paid_amount: sale.attributes.paid_amount
                ? sale.attributes.paid_amount
                : (0.0).toFixed(2),
            id: sale.id,
            currency: currencySymbol,
            is_return: sale.attributes.is_return,
        }));

    useEffect(() => {
        const grandTotalSum = () => {
            let x = 0;
            itemsValue.length &&
                itemsValue.map((item) => {
                    x = x + Number(item.grand_total);
                    return x;
                });
            return x;
        };
        const paidTotalSum = (itemsValue) => {
            let x = 0;
            itemsValue.length &&
                itemsValue.map((item) => {
                    x = x + Number(item.paid_amount);
                    return x;
                });
            return x;
        };
        if (sales.length) {
            const newObject = itemsValue.length && {
                date: "",
                time: "",
                reference_code: "Total",
                customer_name: "",
                warehouse_name: "",
                status: "",
                payment_status: "",
                payment_type: "",
                grand_total: grandTotalSum(itemsValue),
                paid_amount: paidTotalSum(itemsValue),
                id: "",
                currency: currencySymbol,
            };
            const newItemValue =
                itemsValue.length && newObject && itemsValue.concat(newObject);
            const latestArray = newItemValue.map((item) => item);
            newItemValue.length && setTableArray(latestArray);
        } else {
            setTableArray([]);
        }
    }, [sales]);

    const columns = [
        {
            name: getFormattedMessage("dashboard.recentSales.reference.label"),
            sortField: "reference_code",
            sortable: false,
            cell: (row) => {
                return row.reference_code === "Total" ? (
                    <span className="fw-bold fs-4">
                        {getFormattedMessage("pos-total.title")}
                    </span>
                ) : (
                    <span className="badge bg-light-danger">
                        <span>{row.reference_code}</span>
                    </span>
                );
            },
        },
        {
            name: getFormattedMessage("customer.title"),
            selector: (row) => row.customer_name,
            sortField: "customer_name",
            sortable: false,
        },
        {
            name: getFormattedMessage("warehouse.title"),
            selector: (row) => row.warehouse_name,
            sortField: "warehouse_name",
            sortable: false,
        },
        {
            name: getFormattedMessage("dashboard.recentSales.paid.label"),
            sortField: "paid_amount",
            cell: (row) => {
                return row.reference_code === "Total" ? (
                    <span className="fw-bold fs-4">
                        {currencySymbolHandling(
                            allConfigData,
                            row.currency,
                            row.paid_amount
                        )}
                    </span>
                ) : (
                    <span>
                        {currencySymbolHandling(
                            allConfigData,
                            row.currency,
                            row.paid_amount
                        )}
                    </span>
                );
            },
            sortable: true,
        },
        {
            name: getFormattedMessage(
                "dashboard.recentSales.paymentStatus.label"
            ),
            sortField: "payment_status",
            sortable: false,
            cell: (row) => {
                return (
                    (row.payment_status === 1 && (
                        <span className="badge bg-light-success">
                            <span>
                                {getFormattedMessage(
                                    "payment-status.filter.paid.label"
                                )}
                            </span>
                        </span>
                    )) ||
                    (row.payment_status === 2 && (
                        <span className="badge bg-light-danger">
                            <span>
                                {getFormattedMessage(
                                    "payment-status.filter.unpaid.label"
                                )}
                            </span>
                        </span>
                    )) ||
                    (row.payment_status === 3 && (
                        <span className="badge bg-light-warning">
                            {/*<span>{getFormattedMessage("payment-status.filter.unpaid.label")}</span>*/}
                            <span>
                                {getFormattedMessage(
                                    "payment-status.filter.partial.label"
                                )}
                            </span>
                        </span>
                    ))
                );
            },
        },
        {
            name: getFormattedMessage("select.payment-type.label"),
            sortField: "payment_type",
            sortable: false,
            cell: (row) => {
                return (
                    (row.payment_type === 1 && (
                        <span className="badge bg-light-primary">
                            <span>{getFormattedMessage("cash.label")}</span>
                        </span>
                    )) ||
                    (row.payment_type === 2 && (
                        <span className="badge bg-light-primary">
                            <span>
                                {getFormattedMessage(
                                    "payment-type.filter.cheque.label"
                                )}
                            </span>
                        </span>
                    )) ||
                    (row.payment_type === 3 && (
                        <span className="badge bg-light-primary">
                            <span>
                                {getFormattedMessage(
                                    "payment-type.filter.bank-transfer.label"
                                )}
                            </span>
                        </span>
                    )) ||
                    (row.payment_type === 4 && (
                        <span className="badge bg-light-primary">
                            <span>
                                {getFormattedMessage(
                                    "payment-type.filter.other.label"
                                )}
                            </span>
                        </span>
                    ))
                );
            },
        },
        {
            name: getFormattedMessage(
                "globally.react-table.column.created-date.label"
            ),
            selector: (row) => row.date,
            sortField: "date",
            sortable: true,
            cell: (row) => {
                return (
                    row.date && (
                        <span className="badge bg-light-info">
                            <div className="mb-1">{row.time}</div>
                            <div>{row.date}</div>
                        </span>
                    )
                );
            },
        },
        {
            name: getFormattedMessage("react-data-table.action.column.label"),
            right: true,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            cell: (row) =>
                row.reference_code === "Total" ? null : (
                    <ActionDropDownButton
                        item={row}
                        goToEditProduct={goToEdit}
                        isEditMode={true}
                        isPdfIcon={true}
                        onClickDeleteModel={onClickDeleteModel}
                        onPdfClick={onPdfClick}
                        title={getFormattedMessage("sale.title")}
                        isPaymentShow={true}
                        isCreatePayment={true}
                        isViewIcon={true}
                        goToDetailScreen={goToDetailScreen}
                        onShowPaymentClick={onShowPaymentClick}
                        isCreateSaleReturn={true}
                        onCreatePaymentClick={onCreatePaymentClick}
                        onCreateSaleReturnClick={onCreateSaleReturnClick}
                        /* NUEVO */
                        isReceiptShow={true}
                        onShowReceiptClick={onShowReceiptClick}
                    />
                ),
        },
    ];

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText("sales.title")} />
            <div className="sale_table">
                <ReactDataTable
                    columns={columns}
                    items={tableArray}
                    to="#/app/sales/create"
                    ButtonValue={getFormattedMessage("sale.create.title")}
                    isShowPaymentModel={isShowPaymentModel}
                    isCallSaleApi={isCallSaleApi}
                    isShowDateRangeField
                    onChange={onChange}
                    totalRows={totalRecord}
                    goToEdit={goToEdit}
                    isLoading={isLoading}
                    isShowFilterField
                    isPaymentStatus
                    isStatus
                    isPaymentType
                />
            </div>
            <DeleteSale
                onClickDeleteModel={onClickDeleteModel}
                deleteModel={deleteModel}
                onDelete={isDelete}
            />
            <ShowPayment
                allConfigData={allConfigData}
                setIsShowPaymentModel={setIsShowPaymentModel}
                currencySymbol={currencySymbol}
                allSalePayments={allSalePayments}
                createPaymentItem={createPaymentItem}
                onShowPaymentClick={onShowPaymentClick}
                isShowPaymentModel={isShowPaymentModel}
            />
            <CreatePaymentModal
                setIsCreatePaymentOpen={setIsCreatePaymentOpen}
                onCreatePaymentClick={onCreatePaymentClick}
                isCreatePaymentOpen={isCreatePaymentOpen}
                createPaymentItem={createPaymentItem}
            />

            <TicketSlipModal
                saleId={selectedSale?.id}
                allConfigData={allConfigData}
                modalShowPaymentSlip={modalShowPaymentSlip}
                handleCloseTicketModal={handleCloseTicketModal}
                frontSetting={frontSetting}
            />
        </MasterLayout>
    );
};

const mapStateToProps = (state) => {
    const {
        sales,
        totalRecord,
        isLoading,
        frontSetting,
        isCallSaleApi,
        allConfigData,
    } = state;
    return {
        sales,
        totalRecord,
        isLoading,
        frontSetting,
        isCallSaleApi,
        allConfigData,
    };
};

export default connect(mapStateToProps, {
    fetchSales,
    downloadPdf,
    fetchFrontSetting,
})(Sales);
