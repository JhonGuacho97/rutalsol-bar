import apiConfig from '../../config/apiConfig';
import { apiBaseURL, purchaseProductActionType, toastType } from '../../constants';
import { addToast } from "./toastAction";

export const searchPurchaseProduct = (productId) => async (dispatch) => {
    apiConfig.get(apiBaseURL.PRODUCTS + '/' + productId)
        .then((response) => {
            dispatch({ type: purchaseProductActionType.SEARCH_PURCHASE_PRODUCTS, payload: response.data.data });
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        })
};
