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
                * { box-sizing: border-box !important; }
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

    // ✅ 3. Estilos del ticket
    const ticketStyle = {
        width: '72mm',
        maxWidth: '72mm',
        margin: '0 auto',
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '12px',
        color: '#000',
        backgroundColor: '#fff',
        padding: '4px',
    };

    const rowStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px dashed #ccc',
        padding: '4px 0',
        fontSize: '12px',
    };

    const dividerStyle = {
        borderBottom: '1px dashed #000',
        margin: '4px 0',
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

                    {/* Logo */}
                    {settings.attributes &&
                        settings.attributes.show_logo_in_receipt === "1" && (
                        <div style={{ textAlign: 'center', margin: '8px 0' }}>
                            <img
                                src={frontSetting.value.logo}
                                alt=""
                                style={{ width: '80px', height: 'auto' }}
                            />
                        </div>
                    )}

                    {/* Nombre empresa */}
                    <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '14px', margin: '4px 0 8px' }}>
                        {frontSetting?.value?.company_name}
                    </div>

                    {/* Info empresa */}
                    <div style={dividerStyle} />
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                        <tbody>
                            <tr>
                                <td style={{ padding: '2px 0' }}>
                                    <strong>{getFormattedMessage("react-data-table.date.column.label")}:</strong>{' '}
                                    {getFormattedDate(new Date(), allConfigData && allConfigData)}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 0' }}>
                                    <strong>{getFormattedMessage("supplier.table.address.column.title")}:</strong>{' '}
                                    {frontSetting.value && frontSetting.value.address}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 0' }}>
                                    <strong>{getFormattedMessage("globally.input.email.label")}:</strong>{' '}
                                    {frontSetting.value && frontSetting.value.email}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 0' }}>
                                    <strong>{getFormattedMessage("pos-sale.detail.Phone.info")}:</strong>{' '}
                                    {frontSetting.value && frontSetting.value.phone}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ padding: '2px 0' }}>
                                    <strong>{getFormattedMessage("dashboard.recentSales.customer.label")}:</strong>{' '}
                                    {updateProducts.customer_name && updateProducts.customer_name[0]
                                        ? updateProducts.customer_name[0].label
                                        : updateProducts.customer_name && updateProducts.customer_name.label}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={dividerStyle} />

                    {/* Productos */}
                    {updateProducts.products &&
                        updateProducts.products.map((productName, index) => (
                            <div key={index + 1} style={{ padding: '3px 0' }}>
                                <div style={{ fontSize: '11px' }}>
                                    {productName.name}{' '}
                                    <span style={{ color: '#555' }}>({productName.code})</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
                                    <span>
                                        {productName.quantity.toFixed(2)}{' '}
                                        {(productName.product_unit === "3" && "Kg") ||
                                         (productName.product_unit === "1" && "Pc") ||
                                         (productName.product_unit === "2" && "M")}{' '}
                                        X {calculateProductCost(productName).toFixed(2)}
                                    </span>
                                    <span>
                                        {currencySymbolHandling(
                                            allConfigData,
                                            currency,
                                            productName.quantity * calculateProductCost(productName)
                                        )}
                                    </span>
                                </div>
                                <div style={dividerStyle} />
                            </div>
                        ))
                    }

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
                    <div style={{ ...rowStyle, fontWeight: 'bold', fontSize: '13px' }}>
                        <span>{getFormattedMessage("purchase.grant-total.label")}:</span>
                        <span>
                            {currencySymbolHandling(allConfigData, currency, updateProducts.grandTotal)}
                        </span>
                    </div>

                    {/* Método de pago — reemplaza la Table striped de Bootstrap */}
                    <div style={{ marginTop: '6px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderTop: '1px dashed #000',
                            borderBottom: '1px dashed #000',
                            padding: '3px 0',
                            fontWeight: 'bold',
                            fontSize: '11px',
                        }}>
                            <span>{getFormattedMessage("pos-sale.detail.Paid-bt.title")}</span>
                            <span>{getFormattedMessage("expense.input.amount.label")}</span>
                            <span>{getFormattedMessage("pos.change-return.label")}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', fontSize: '11px' }}>
                            <span>{paymentType}</span>
                            <span>
                                {currencySymbolHandling(allConfigData, currency, updateProducts.grandTotal)}
                            </span>
                            <span>
                                {currencySymbolHandling(allConfigData, currency, updateProducts.changeReturn)}
                            </span>
                        </div>
                    </div>

                    {/* Notas (condicional) */}
                    {updateProducts && updateProducts.note && (
                        <div style={{ ...rowStyle, flexDirection: 'column', marginTop: '6px' }}>
                            <span style={{ fontWeight: 'bold' }}>Notes:</span>
                            <span style={{ marginTop: '2px', fontSize: '11px' }}>
                                {updateProducts.note}
                            </span>
                        </div>
                    )}

                    {/* Mensaje y código de barras */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        borderTop: '1px dashed #000',
                        paddingTop: '8px',
                    }}>
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