import { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { saleDetailsAction } from "../../../store/action/saleDetailsAction";
import { fetchFrontSetting } from "../../../store/action/frontSettingAction";
import { connect } from "react-redux";
import { getFormattedDate, getFormattedMessage } from "../../../shared/sharedMethod";
import { calculateProductCost } from "../../shared/SharedMethod";
import { Image } from "react-bootstrap-v5";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";

const TicketSlipModal = (props) => {
    const {
        saleId,
        modalShowPaymentSlip,
        saleDetailsAction,
        handleCloseTicketModal,
        saleDetails,
        frontSetting,
        allConfigData,
    } = props;

    const printRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        pageStyle: `
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
        `});

    useEffect(() => {
        if (saleId) {
            saleDetailsAction(saleId);
        }
    }, [saleId]);

    const subtotal = saleDetails?.sale_items?.reduce((acc, item) => {
        return acc + (item.sub_total || 0);
    }, 0);

    // 🔹 estilos base mejorados
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

    const subtleDivider = {
        borderBottom: '1px dashed #ccc',
        margin: '4px 0',
    };

    const handleShareWhatsApp = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            handleShareAsImage();
        } else {
            handleShareAsText();
        }
    };

    const handleShareAsImage = async () => {
        const canvas = await html2canvas(printRef.current, {
            scale: 2,
            backgroundColor: '#ffffff',
        });

        canvas.toBlob(async (blob) => {
            const file = new File([blob], `ticket-${saleDetails.reference_code}.png`, {
                type: 'image/png',
            });

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'Comprobante de venta',
                    text: `COMPROBANTE ENVIADO DESDE MY-POS-SYSTEM`,
                    files: [file],
                });
            } else {
                // Fallback si Web Share API no está disponible en móvil
                handleShareAsText();
            }
        }, 'image/png');
    };

    const handleShareAsText = () => {
        const paymentLabel = {
            1: "Dinero",
            2: "Cheque",
            3: "Transferencia",
            4: "Otro",
        }[Number(saleDetails.payment_type)] ?? "N/A";

        const items = saleDetails?.sale_items?.map(item =>
            `- ${item.product.name} x${item.quantity} = $${(item.quantity * calculateProductCost(item.product_price)).toFixed(2)}`
        ).join('\n');

        const message = [
            `*${saleDetails?.company_info?.company_name}*`,
            `--------------------------------`,
            `Fecha: ${getFormattedDate(saleDetails.date, allConfigData)}`,
            `Direccion: ${saleDetails?.company_info?.address}`,
            `--------------------------------`,
            `*Productos:*`,
            items,
            `--------------------------------`,
            `*Total: $${saleDetails.grand_total?.toFixed(2) ?? '0.00'}*`,
            `Pago: ${paymentLabel}`,
            `Ref: ${saleDetails?.reference_code}`,
            `--------------------------------`,
            `Gracias por su compra!`,
        ].join('\n');

        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <Modal
            show={modalShowPaymentSlip}
            onHide={handleCloseTicketModal}
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
                <div ref={printRef} style={ticketStyle}>

                    {/* 🔷 HEADER SRI */}
                    <div style={{ textAlign: 'center' }}>
                        <img
                            src={frontSetting?.value?.logo}
                            alt=""
                            style={{ width: '55px', marginBottom: '4px' }}
                        />

                        <div style={{ fontWeight: 'bold', fontSize: '13px' }}>
                            {saleDetails?.company_info?.company_name}
                        </div>

                        <div style={{ fontSize: '10px' }}>
                            RUC: {saleDetails?.company_info?.tax_id ?? '0000000000001'}
                        </div>

                        <div style={{ fontSize: '10px' }}>
                            {saleDetails?.company_info?.address}
                        </div>

                        <div style={{ fontSize: '10px' }}>
                            {saleDetails?.company_info?.email}
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 INFO DOCUMENTO */}
                    <div style={{ textAlign: 'center', fontSize: '11px' }}>
                        <div style={{ fontWeight: 'bold' }}>NOTA DE VENTA</div>
                        <div>No: {saleDetails?.reference_code}</div>
                        <div>
                            Fecha: {getFormattedDate(saleDetails.date, allConfigData)}
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 CLIENTE */}
                    <div style={{ fontSize: '11px' }}>
                        <div>
                            <strong>Cliente:</strong> {saleDetails?.customer?.name ?? 'Consumidor Final'}
                        </div>
                        <div>
                            <strong>CI/RUC:</strong> {saleDetails?.customer?.identification ?? '9999999999'}
                        </div>
                        <div>
                            <strong>Dirección:</strong> {saleDetails?.customer?.address ?? '-'}
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 TABLA TIPO SUPERMERCADO */}
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
                            {saleDetails?.sale_items?.map((item) => {
                                const price = calculateProductCost(item.product_price);
                                const total = item.quantity * (
                                    item.discount_amount > 0
                                        ? item.net_unit_price
                                        : price
                                );

                                return (
                                    <tr key={item.id}>
                                        <td style={{ paddingTop: '2px' }}>
                                            {item.product.name}
                                        </td>
                                        <td align="center">{item.quantity}</td>
                                        <td align="right">{price.toFixed(2)}</td>
                                        <td align="right">{total.toFixed(2)}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div style={dividerStyle} />

                    {/* 🔷 RESUMEN (TIPO SUPERMERCADO) */}
                    <div style={{ fontSize: '11px' }}>

                        <div style={rowStyle}>
                            <span>Subtotal</span>
                            <span>$ {subtotal?.toFixed(2) ?? "0.00"}</span>
                        </div>

                        {saleDetails.discount > 0 && (
                            <div style={rowStyle}>
                                <span>Descuento</span>
                                <span>- $ {saleDetails.discount.toFixed(2)}</span>
                            </div>
                        )}

                        <div style={rowStyle}>
                            <span>IVA</span>
                            <span>$ {saleDetails.tax_amount?.toFixed(2) ?? "0.00"}</span>
                        </div>

                        <div style={{
                            ...rowStyle,
                            fontWeight: 'bold',
                            fontSize: '13px',
                            borderTop: '1px dashed #000',
                            marginTop: '4px',
                            paddingTop: '4px'
                        }}>
                            <span>TOTAL</span>
                            <span>$ {saleDetails.grand_total?.toFixed(2) ?? "0.00"}</span>
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 FORMA DE PAGO */}
                    <div style={{ fontSize: '11px' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '2px' }}>
                            Forma de pago
                        </div>

                        <div style={rowStyle}>
                            <span>
                                {saleDetails.payment_type === 1 ? "Efectivo"
                                    : saleDetails.payment_type === 2 ? "Cheque"
                                        : saleDetails.payment_type === 3 ? "Transferencia"
                                            : "Otro"}
                            </span>
                            <span>$ {saleDetails.grand_total?.toFixed(2)}</span>
                        </div>
                    </div>

                    <div style={dividerStyle} />

                    {/* 🔷 FOOTER PREMIUM */}
                    <div style={{ textAlign: 'center', fontSize: '10px' }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                            ¡GRACIAS POR SU COMPRA!
                        </div>

                        <div>Conserve este comprobante</div>

                        <Image
                            src={'https://res.cloudinary.com/dxt0es7sj/image/upload/v1773608207/barcode-SA_1115_exsk0c.png'}
                            height={25}
                            width={100}
                        />

                        <div>{saleDetails?.reference_code}</div>
                    </div>

                </div>
            </Modal.Body>

            <Modal.Footer className="justify-content-center pt-2">
                <button
                    className="btn btn-primary text-white"
                    onClick={handlePrint}
                >
                    {getFormattedMessage("print.title")}
                </button>
                <button
                    className="btn btn-danger"
                    onClick={handleCloseTicketModal}
                >
                    {getFormattedMessage("pos-close-btn.title")}
                </button>
                <button
                    className="btn btn-success text-white"
                    onClick={handleShareWhatsApp}
                >
                    <i className="bi bi-whatsapp me-1" /> {/* si usas Bootstrap Icons */}
                    Compartir por WhatsApp
                </button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    const { saleDetails, frontSetting, allConfigData } = state;
    return { saleDetails, frontSetting, allConfigData };
};

export default connect(mapStateToProps, {
    saleDetailsAction,
    fetchFrontSetting,
})(TicketSlipModal);