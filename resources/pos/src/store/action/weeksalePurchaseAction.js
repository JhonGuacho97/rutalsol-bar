import apiConfig from '../../config/apiConfig';
import { apiBaseURL, toastType, weekSalePurchasesActionType } from '../../constants';
import { addToast } from './toastAction';
import { setLoading } from "./loadingAction";

export const weekSalePurchases = () => async (dispatch) => {
    dispatch(setLoading(true));

    apiConfig.get(apiBaseURL.WEEK_SALE_PURCHASES_API)
        .then((response) => {
            dispatch({ type: weekSalePurchasesActionType.WEEK_SALE_PURCHASES, payload: response.data.data })
            dispatch(setLoading(false));
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        })
}
