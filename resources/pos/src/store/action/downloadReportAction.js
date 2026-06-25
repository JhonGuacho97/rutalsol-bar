import apiConfig from '../../config/apiConfig';
import { toastType } from '../../constants';
import { addToast } from './toastAction';
import { setLoading } from './loadingAction';

/**
 * Generic Excel report downloader.
 *
 * @param {string} endpoint  - Full API path with query params already included.
 * @param {string} responseKey - Key inside response.data.data that holds the URL.
 * @param {Function} [onSuccess] - Optional callback after download starts (e.g. setIsWarehouseValue(false)).
 * @param {boolean} [isLoading=true] - Whether to show/hide global loading spinner.
 *
 * Usage examples:
 *
 *   // Ventas (warehouse)
 *   dispatch(downloadExcel(
 *     `sales-report-excel?warehouse_id=${warehouse}`,
 *     'sale_excel_url',
 *     () => setIsWarehouseValue(false)
 *   ));
 *
 *   // Productos (id opcional)
 *   dispatch(downloadExcel(
 *     `products-export-excel${id ? '?id=' + id : ''}`,
 *     'product_excel_url',
 *     () => setIsWarehouseValue(false)
 *   ));
 *
 *   // Top selling (fechas)
 *   dispatch(downloadExcel(
 *     `top-selling-product-report-excel?start_date=${dates.start_date ?? null}&end_date=${dates.end_date ?? null}`,
 *     'top_selling_product_excel_url',
 *     () => setIsWarehouseValue(false)
 *   ));
 */
export const downloadExcel = (endpoint, responseKey, onSuccess = null, isLoading = true) =>
    async (dispatch) => {
        if (isLoading) dispatch(setLoading(true));

        try {
            const response = await apiConfig.get(endpoint);
            const url = response.data.data[responseKey];
            window.open(url, '_blank');
            if (onSuccess) onSuccess();
        } catch (error) {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        } finally {
            if (isLoading) dispatch(setLoading(false));
        }
    };

/**
 * Generic PDF report downloader.
 *
 * @param {string} endpoint  - Full API path including the record ID.
 * @param {string} responseKey - Key inside response.data.data that holds the PDF URL.
 * @param {boolean} [isLoading=true] - Whether to show/hide global loading spinner.
 *
 * Usage examples:
 *
 *   // Venta
 *   dispatch(downloadPdf(`sale-pdf-download/${saleId}`, 'sale_pdf_url'));
 *
 *   // Compra
 *   dispatch(downloadPdf(`purchase-pdf-download/${purchaseId}`, 'purchase_pdf_url'));
 *
 *   // Cotización
 *   dispatch(downloadPdf(`quotation-pdf-download/${quotationId}`, 'quotation_pdf_url'));
 *
 *   // Devolución de venta
 *   dispatch(downloadPdf(`sale-return-pdf-download/${saleReturnId}`, 'sale_return_pdf_url'));
 *
 *   // Devolución de compra
 *   dispatch(downloadPdf(`purchase-return-pdf-download/${purchaseReturnId}`, 'purchase_return_pdf_url'));
 */
export const downloadPdf = (endpoint, responseKey, isLoading = true) =>
    async (dispatch) => {
        if (isLoading) dispatch(setLoading(true));

        try {
            const response = await apiConfig.get(endpoint);
            const url = response.data.data[responseKey];
            window.open(url, '_blank');
        } catch (error) {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        } finally {
            if (isLoading) dispatch(setLoading(false));
        }
    };
