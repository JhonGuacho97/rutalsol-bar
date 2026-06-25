import { setLoading } from './loadingAction';
import apiConfig from '../../config/apiConfig';
import { apiBaseURL, purchaseReturnActionType, toastType } from '../../constants';
import { addToast } from './toastAction';

export const fetchPurchaseReturnDetails = (purchaseId, singlePurchase, isLoading = true) => async (dispatch) => {
    if (isLoading) {
        dispatch(setLoading(true))
    }
    apiConfig.get(apiBaseURL.PURCHASES_RETURN_DETAILS + '/' + purchaseId, singlePurchase)
        .then((response) => {
            dispatch({ type: purchaseReturnActionType.PURCHASES_RETURN_DETAILS, payload: response.data.data })
            if (isLoading) {
                dispatch(setLoading(false))
            }
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        })
};
