import apiConfig from "../../config/apiConfigWthFormData";
import { apiBaseURL, productActionType } from "../../constants";
import { apiRequest } from "../../shared/apiHelper";
import {
    setTotalRecord,
    addInToTotalRecord,
    removeFromTotalRecord,
} from "./totalRecordAction";
import requestParam from "../../shared/requestParam";
import { setLoading } from "./loadingAction";
import { getFormattedMessage } from "../../shared/sharedMethod";
import { setSavingButton } from "./saveButtonAction";
import { callImportProductApi } from "./importProductApiAction";
import { addToast } from "./toastAction";

const buildUrl = (baseUrl, filter) => {
    if (!_.isEmpty(filter) && (filter.page || filter.pageSize || filter.search || filter.order_By || filter.created_at)) {
        return baseUrl + requestParam(filter, null, null, null, baseUrl);
    }
    return baseUrl;
};

export const fetchProducts = (filter = {}, isLoading = true) => async (dispatch) => {
    if (isLoading) dispatch(setLoading(true));
    await apiRequest(dispatch,
        () => apiConfig.get(buildUrl(apiBaseURL.PRODUCTS, filter)),
        (response) => {
            dispatch({ type: productActionType.FETCH_PRODUCTS, payload: response.data.data });
            dispatch(setTotalRecord(
                response.data.meta.total !== undefined && response.data.meta.total >= 0
                    ? response.data.meta.total
                    : response.data.data.total
            ));
        }
    );
    if (isLoading) dispatch(setLoading(false));
};

export const fetchProduct = (productId, singleProduct, isLoading = true) => async (dispatch) => {
    if (isLoading) dispatch(setLoading(true));
    await apiRequest(dispatch,
        () => apiConfig.get(apiBaseURL.PRODUCTS + "/" + productId, singleProduct),
        (response) => {
            dispatch({ type: productActionType.FETCH_PRODUCT, payload: response.data.data });
        }
    );
    if (isLoading) dispatch(setLoading(false));
};

export const addProduct = (product, navigate) => async (dispatch) => {
    dispatch(setSavingButton(true));
    await apiRequest(dispatch,
        () => apiConfig.post(apiBaseURL.PRODUCTS, product),
        () => {
            dispatch(fetchMainProduct(product.get('main_product_id'), false));
            dispatch(addToast({ text: getFormattedMessage("product.success.create.message") }));
        }
    );
    dispatch(setSavingButton(false));
};

export const editProduct = (productId, product, navigate) => async (dispatch) => {
    dispatch(setSavingButton(true));
    await apiRequest(dispatch,
        () => apiConfig.post(apiBaseURL.PRODUCTS + "/" + productId, product),
        () => {
            dispatch(fetchMainProduct(product.get('main_product_id'), false));
            dispatch(addToast({ text: getFormattedMessage("product.success.edit.message") }));
        }
    );
    dispatch(setSavingButton(false));
};

export const deleteProduct = (productId, mainProductId) => async (dispatch) => {
    await apiRequest(dispatch,
        () => apiConfig.delete(apiBaseURL.PRODUCTS + "/" + productId),
        () => {
            dispatch(fetchMainProduct(mainProductId, false));
            dispatch(addToast({ text: getFormattedMessage("product.success.delete.message") }));
        }
    );
};

export const fetchAllProducts = () => async (dispatch) => {
    await apiRequest(dispatch,
        () => apiConfig.get(`products?page[size]=0`),
        (response) => {
            dispatch({ type: productActionType.FETCH_ALL_PRODUCTS, payload: response.data.data });
        }
    );
};

export const fetchProductsByWarehouse = (id) => async (dispatch) => {
    await apiRequest(dispatch,
        () => apiConfig.get(`products?page[size]=0&warehouse_id=${id}`),
        (response) => {
            dispatch({ type: productActionType.FETCH_PRODUCTS_BY_WAREHOUSE, payload: response.data.data });
        }
    );
};

export const addImportProduct = (importProduct) => async (dispatch) => {
    await apiRequest(dispatch,
        () => apiConfig.post(apiBaseURL.IMPORT_PRODUCT, importProduct),
        () => {
            dispatch(setLoading(false));
            dispatch(callImportProductApi(true));
            dispatch(addToast({ text: "Product Import Create Success" }));
            dispatch(addInToTotalRecord(1));
        }
    );
};

export const fetchAllMainProducts = (filter = {}, isLoading = true) => async (dispatch) => {
    if (isLoading) dispatch(setLoading(true));
    await apiRequest(dispatch,
        () => apiConfig.get(buildUrl(apiBaseURL.MAIN_PRODUCTS, filter)),
        (response) => {
            dispatch({ type: productActionType.FETCH_ALL_MAIN_PRODUCTS, payload: response.data.data });
            dispatch(setTotalRecord(
                response.data.meta.total !== undefined && response.data.meta.total >= 0
                    ? response.data.meta.total
                    : response.data.data.total
            ));
        }
    );
    if (isLoading) dispatch(setLoading(false));
};

export const deleteMainProduct = (productId) => async (dispatch) => {
    await apiRequest(dispatch,
        () => apiConfig.delete(apiBaseURL.MAIN_PRODUCTS + "/" + productId),
        () => {
            dispatch(removeFromTotalRecord(1));
            dispatch({ type: productActionType.DELETE_MAIN_PRODUCT, payload: productId });
            dispatch(addToast({ text: getFormattedMessage("product.success.delete.message") }));
        }
    );
};

export const fetchMainProduct = (productId, isLoading = true) => async (dispatch) => {
    if (isLoading) dispatch(setLoading(true));
    await apiRequest(dispatch,
        () => apiConfig.get(apiBaseURL.MAIN_PRODUCTS + "/" + productId),
        (response) => {
            dispatch({ type: productActionType.FETCH_MAIN_PRODUCT, payload: response.data.data });
        }
    );
    if (isLoading) dispatch(setLoading(false));
};

export const clearMainProduct = () => (dispatch) => {
    dispatch({ type: productActionType.CLEAR_MAIN_PRODUCT });
};

export const addMainProduct = (product, navigate) => async (dispatch) => {
    dispatch(setSavingButton(true));
    await apiRequest(dispatch,
        () => apiConfig.post(apiBaseURL.MAIN_PRODUCTS, product),
        (response) => {
            dispatch({ type: productActionType.ADD_MAIN_PRODUCT, payload: response.data.data });
            dispatch(addToast({ text: getFormattedMessage("product.success.create.message") }));
            dispatch(addInToTotalRecord(1));
            navigate("/app/products");
        }
    );
    dispatch(setSavingButton(false));
};

export const editMainProduct = (productId, product, navigate) => async (dispatch) => {
    dispatch(setSavingButton(true));
    await apiRequest(dispatch,
        () => apiConfig.post(apiBaseURL.MAIN_PRODUCTS + "/" + productId, product),
        () => {
            dispatch(addToast({ text: getFormattedMessage("product.success.edit.message") }));
            navigate("/app/products");
        }
    );
    dispatch(setSavingButton(false));
};