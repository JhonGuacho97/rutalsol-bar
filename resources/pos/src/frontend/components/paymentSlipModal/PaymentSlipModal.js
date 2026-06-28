import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import { useReactToPrint } from "react-to-print";
import { calculateProductCost } from "../../shared/SharedMethod";
import {
    currencySymbolHandling,
    getFormattedDate,
    getFormattedMessage,
} from "../../../shared/sharedMethod";
import { Image } from "react-bootstrap";

const PaymentSlipModal = (props) => {
    const {
        settings,
        modalShowPaymentSlip,
        setModalShowPaymentSlip,
        updateProducts,
        paymentType,
        frontSetting,
        paymentDetails,
        allConfigData,
        setPaymentValue,
        paymentTypeDefaultValue,
    } = props;

    // ✅ 1. Ref para el contenido a imprimir
    const printRef = useRef();

    // ✅ 2. Hook de impresión con tamaño de ticket
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        pageStyle: `
            @page { 
                size: 80mm auto;  
                margin: 4mm 2mm;
            }
            @media print {
                * {
                    box-sizing: border-box !important;
        font-family: Arial, sans-serif !important;
        -webkit-font-smoothing: none !important;
        }
                body { 
                    margin: 0 !important; 
                    padding: 0 !important; 
                    background: white !important;
                    width: 80mm !important;
                }
                table { 
                    width: 100% !important; 
                    border-collapse: collapse !important;
                }
            }
        `,
    });

    const currency =
        updateProducts.settings &&
        updateProducts.settings.attributes &&
        updateProducts.settings.attributes.currency_symbol;

    // ✅ 3. Estilos del ticket (alineados a TicketSlipModal)
    const ticketStyle = {
        width: '72mm',
        maxWidth: '72mm',
        margin: '0 auto',
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '12px',
        color: '#000',
        backgroundColor: '#fff',
        padding: '6px',
        lineHeight: '1.4',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px 0',
        fontSize: '12px',
    };

    const dividerStyle = {
        borderBottom: '1px dashed #000',
        margin: '6px 0',
    };

    const handleClose = () => {
        setModalShowPaymentSlip(false);
        setPaymentValue({ payment_type: paymentTypeDefaultValue[0] });
    };

    return (
        <Modal
            show={modalShowPaymentSlip}
            onHide={handleClose}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="pos-modal"
        >
            <Modal.Header closeButton className="pb-3">
                <Modal.Title id="contained-modal-title-vcenter">
                    {getFormattedMessage("pos-sale.detail.invoice.info")} POS
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="pt-0 pb-3">
                {/* ✅ 4. ref en el div con ancho fijo, NO en Modal.Body */}
                <div ref={printRef} style={ticketStyle}>

                    {/* 🔷 HEADER */}
                    <div style={{ textAlign: 'center' }}>
                        {settings.attributes &&
                            settings.attributes.show_logo_in_receipt === "1" && (
                                <img
                                    src={frontSetting.value.logo}
                                    alt=""
                                    style={{ width: '55px', marginBottom: '4px' }}
                                />
                            )}

                        <div style={{ fontWeight: 'bold', fontSize: '13px' }}>
                            {paymentDetails?.attributes?.warehouse_name}
                        </div>

                        <div style={{ fontSize: '10px' }}>
                            {frontSetting.value && frontSetting.value.address}
                        </div>

                        <div style={{ fontSize: '10px' }}>
                            {frontSetting.value && frontSetting.value.email}
                        </div>

                        <div style={{ fontSize: '10px' }}>
                            {frontSetting.value && frontSetting.value.phone}
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 INFO DOCUMENTO */}
                    <div style={{ textAlign: 'center', fontSize: '11px' }}>
                        <div style={{ fontWeight: 'bold' }}>
                            {getFormattedMessage("pos-sale.detail.invoice.info")}
                        </div>
                        <div>No: {updateProducts.products?.reference_code}</div>
                        <div>
                            {getFormattedMessage("react-data-table.date.column.label")}:{' '}
                            {getFormattedDate(new Date(), allConfigData && allConfigData)}
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 CLIENTE */}
                    <div style={{ fontSize: '11px' }}>
                        <div>
                            <strong>{getFormattedMessage("dashboard.recentSales.customer.label")}:</strong>{' '}
                            {updateProducts.customer_name && updateProducts.customer_name[0]
                                ? updateProducts.customer_name[0].label
                                : updateProducts.customer_name && updateProducts.customer_name.label}
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* Productos — tabla estilo supermercado */}
                    <table style={{
                        width: '100%',
                        fontSize: '11px',
                        borderCollapse: 'collapse'
                    }}>
                        <thead>
                            <tr style={{
                                borderBottom: '1px solid #000',
                                borderTop: '1px solid #000'
                            }}>
                                <th align="left">Prod.</th>
                                <th align="center">Cant</th>
                                <th align="right">P.Unit</th>
                                <th align="right">Total</th>
                            </tr>
                        </thead>

                        <tbody>
                            {updateProducts.products &&
                                updateProducts.products.map((productName, index) => {
                                    const price = calculateProductCost(productName);
                                    const total = productName.quantity * price;

                                    return (
                                        <tr key={index + 1}>
                                            <td style={{ paddingTop: '2px' }}>
                                                {productName.name}{' '}
                                            </td>
                                            <td align="center">
                                                {productName.quantity.toFixed(2)}
                                            </td>
                                            <td align="right">{price.toFixed(2)}</td>
                                            <td align="right">
                                                {currencySymbolHandling(allConfigData, currency, total)}
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>

                    <div style={dividerStyle} />

                    {/* Subtotal */}
                    <div style={rowStyle}>
                        <span>{getFormattedMessage("pos-total-amount.title")}:</span>
                        <span>
                            {currencySymbolHandling(allConfigData, currency,
                                updateProducts.subTotal ? updateProducts.subTotal : "0.00")}
                        </span>
                    </div>

                    {/* Tax */}
                    <div style={rowStyle}>
                        <span>{getFormattedMessage("globally.detail.order.tax")}:</span>
                        <span>
                            {currencySymbolHandling(allConfigData, currency,
                                updateProducts.taxTotal ? updateProducts.taxTotal : "0.00")}{' '}
                            ({updateProducts ? parseFloat(updateProducts.tax).toFixed(2) : "0.00"} %)
                        </span>
                    </div>

                    {/* Descuento */}
                    <div style={rowStyle}>
                        <span>{getFormattedMessage("purchase.order-item.table.discount.column.label")}:</span>
                        <span>
                            {currencySymbolHandling(allConfigData, currency,
                                updateProducts ? updateProducts.discount : "0.00")}
                        </span>
                    </div>

                    {/* Shipping (condicional) */}
                    {updateProducts.shipping && (
                        <div style={rowStyle}>
                            <span>Shipping:</span>
                            <span>
                                {currencySymbolHandling(allConfigData, currency,
                                    updateProducts ? updateProducts.shipping : "0.00")}
                            </span>
                        </div>
                    )}

                    {/* Gran total */}
                    <div style={{
                        ...rowStyle,
                        fontWeight: 'bold',
                        fontSize: '13px',
                        borderTop: '1px dashed #000',
                        marginTop: '4px',
                        paddingTop: '4px'
                    }}>
                        <span>{getFormattedMessage("purchase.grant-total.label")}:</span>
                        <span>
                            {currencySymbolHandling(allConfigData, currency, updateProducts.grandTotal)}
                        </span>
                    </div>

                    <div style={dividerStyle} />

                    {/* Método de pago */}
                    <div style={{ fontSize: '11px' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                            {getFormattedMessage("pos-sale.detail.Paid-bt.title")}
                        </div>
                        <div style={rowStyle}>
                            <span>{paymentType}</span>
                            <span>
                                {currencySymbolHandling(allConfigData, currency, updateProducts.grandTotal)}
                            </span>
                        </div>
                        <div style={rowStyle}>
                            <span>{getFormattedMessage("pos.change-return.label")}</span>
                            <span>
                                {currencySymbolHandling(allConfigData, currency, updateProducts.changeReturn)}
                            </span>
                        </div>
                    </div>

                    {/* Notas (condicional) */}
                    {updateProducts && updateProducts.note && (
                        <>
                            <div style={dividerStyle} />
                            <div style={{ fontSize: '11px' }}>
                                <span style={{ fontWeight: 'bold' }}>Notes:</span>
                                <div style={{ marginTop: '2px' }}>
                                    {updateProducts.note}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Mensaje y código de barras */}
                    <div style={{ textAlign: 'center', marginTop: '6px' }}>
                        <div style={dividerStyle} />
                        <p style={{ margin: '0 0 6px', fontWeight: 'bold', fontSize: '11px' }}>
                            {getFormattedMessage("pos-thank.you-slip.invoice")}.
                        </p>
                        <Image
                            src={paymentDetails?.attributes?.barcode_url}
                            height={25}
                            width={100}
                        />
                        <span style={{ display: 'block', fontSize: '10px', marginTop: '2px' }}>
                            {paymentDetails?.attributes?.reference_code}
                        </span>
                    </div>

                </div>
            </Modal.Body>

            <Modal.Footer className="justify-content-center pt-2">
                {/* ✅ 5. Llama a handlePrint directamente, sin el botón oculto */}
                <button
                    className="btn btn-primary text-white"
                    onClick={handlePrint}
                >
                    {getFormattedMessage("print.title")}
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={handleClose}
                >
                    {getFormattedMessage("pos-close-btn.title")}
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default PaymentSlipModal;