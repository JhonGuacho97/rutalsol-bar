import React from "react";
import { Table, Image } from "react-bootstrap-v5";
import { calculateProductCost } from "../../shared/SharedMethod";
import "../../../assets/scss/frontend/pdf.scss";
import {
currencySymbolHandling,
getFormattedDate,
getFormattedMessage,
} from "../../../shared/sharedMethod";

class PrintData extends React.PureComponent {
render() {

    const paymentPrint = this.props.updateProducts || {};
    const allConfigData = this.props.allConfigData;
    const paymentType = this.props.paymentType || "Cash";

    const currency =
        paymentPrint?.settings?.attributes?.currency_symbol || "$";

    const products =
        paymentPrint.products ||
        paymentPrint.sale_items ||
        [];

    const frontSetting =
        paymentPrint.frontSetting ||
        this.props.frontSetting ||
        {};

    const getNumber = (value) => {
        const n = Number(value);
        return isNaN(n) ? 0 : n;
    };

    return (
        <div className="print-data">

            {/* Logo */}
            <div className="mt-4 mb-4 text-center">
                {paymentPrint?.settings?.attributes?.show_logo_in_receipt === "1" && (
                    <img
                        src={frontSetting?.value?.logo}
                        alt=""
                        width="100px"
                    />
                )}
            </div>

            {/* Company */}
            <div
                className="mt-2 mb-3 text-center"
                style={{ fontSize: "22px", fontWeight: "600" }}
            >
                {frontSetting?.value?.company_name || ""}
            </div>

            {/* Company info */}
            <section className="product-border">

                <div>
                    <b>{getFormattedMessage("react-data-table.date.column.label")} :</b>{" "}
                    {getFormattedDate(new Date(), allConfigData)}
                </div>

                <div>
                    <b>{getFormattedMessage("supplier.table.address.column.title")} :</b>{" "}
                    {frontSetting?.value?.address || ""}
                </div>

                <div>
                    <b>{getFormattedMessage("globally.input.email.label")} :</b>{" "}
                    {frontSetting?.value?.email || ""}
                </div>

                <div>
                    <b>{getFormattedMessage("pos-sale.detail.Phone.info")} :</b>{" "}
                    {frontSetting?.value?.phone || ""}
                </div>

                <div>
                    <b>{getFormattedMessage("dashboard.recentSales.customer.label")} :</b>{" "}
                    {paymentPrint?.customer_name?.label ||
                        paymentPrint?.customer?.name ||
                        ""}
                </div>

            </section>

            {/* Products */}
            <section className="mt-3">

                {products.map((product, index) => {

                    const quantity = getNumber(product.quantity);
                    const price =
                        getNumber(product.price) ||
                        getNumber(product.sale_price) ||
                        getNumber(product.net_unit_price);

                    const total = quantity * price;

                    return (
                        <div key={index}>

                            <div>
                                {product.name || product.product_name}
                                {" "}
                                <span>({product.code || product.product_code})</span>
                            </div>

                            <div className="product-border">

                                <div className="d-flex justify-content-between">

                                    <span>
                                        {quantity.toFixed(2)} X {price.toFixed(2)}
                                    </span>

                                    <span>
                                        {currencySymbolHandling(
                                            allConfigData,
                                            currency,
                                            total
                                        )}
                                    </span>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </section>

            {/* Totals */}
            <section className="mt-3 product-border">

                <div className="d-flex">
                    <div><b>{getFormattedMessage("pos-total-amount.title")}:</b></div>
                    <div className="ms-auto">
                        {currencySymbolHandling(
                            allConfigData,
                            currency,
                            getNumber(paymentPrint.subTotal)
                        )}
                    </div>
                </div>

                <div className="d-flex">
                    <div><b>{getFormattedMessage("globally.detail.order.tax")}:</b></div>
                    <div className="ms-auto">
                        {currencySymbolHandling(
                            allConfigData,
                            currency,
                            getNumber(paymentPrint.taxTotal)
                        )}
                    </div>
                </div>

                <div className="d-flex">
                    <div><b>{getFormattedMessage("globally.detail.discount")}:</b></div>
                    <div className="ms-auto">
                        {currencySymbolHandling(
                            allConfigData,
                            currency,
                            getNumber(paymentPrint.discount)
                        )}
                    </div>
                </div>

                <div className="d-flex">
                    <div><b>{getFormattedMessage("globally.detail.shipping")}:</b></div>
                    <div className="ms-auto">
                        {currencySymbolHandling(
                            allConfigData,
                            currency,
                            getNumber(paymentPrint.shipping)
                        )}
                    </div>
                </div>

                <div className="d-flex">
                    <div><b>{getFormattedMessage("globally.detail.grand.total")}:</b></div>
                    <div className="ms-auto">
                        {currencySymbolHandling(
                            allConfigData,
                            currency,
                            getNumber(paymentPrint.grandTotal)
                        )}
                    </div>
                </div>

            </section>

            {/* Payment */}
            <Table className="mt-3">

                <thead>
                    <tr>
                        <th>{getFormattedMessage("pos-sale.detail.Paid-bt.title")}</th>
                        <th className="text-center">
                            {getFormattedMessage("expense.input.amount.label")}
                        </th>
                        <th className="text-end">
                            {getFormattedMessage("pos.change-return.label")}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{paymentType}</td>

                        <td className="text-center">
                            {currencySymbolHandling(
                                allConfigData,
                                currency,
                                getNumber(paymentPrint.grandTotal)
                            )}
                        </td>

                        <td className="text-end">
                            {currencySymbolHandling(
                                allConfigData,
                                currency,
                                getNumber(paymentPrint.changeReturn)
                            )}
                        </td>
                    </tr>
                </tbody>

            </Table>

            {/* Note */}
            {paymentPrint?.note && (
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <b>{getFormattedMessage("globally.input.notes.label")}:</b>{" "}
                                {paymentPrint.note}
                            </td>
                        </tr>
                    </tbody>
                </Table>
            )}

            {/* Footer */}
            <h4 className="text-center mt-3">
                {getFormattedMessage("pos-thank.you-slip.invoice")}
            </h4>

            {/* Barcode */}
            {paymentPrint?.barcode_url && (
                <div className="text-center">

                    <Image
                        src={paymentPrint.barcode_url}
                        alt={paymentPrint.reference_code}
                        height={25}
                        width={100}
                    />

                    <span className="d-block">
                        {paymentPrint.reference_code}
                    </span>

                </div>
            )}

        </div>
    );
}}

export default PrintData;