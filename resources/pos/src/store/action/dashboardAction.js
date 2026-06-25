import apiConfig from '../../config/apiConfig';
import { apiBaseURL, toastType, todaySalePurchaseCountActionType } from '../../constants';
import { addToast } from './toastAction';
import { setLoading } from "./loadingAction";

export const todaySalePurchaseCount = () => async (dispatch) => {
    dispatch(setLoading(true));
    apiConfig.get(apiBaseURL.TODAY_SALE_COUNT)
        .then((response) => {
            dispatch({ type: todaySalePurchaseCountActionType.TODAY_SALE_COUNT, payload: response.data.data })
            dispatch(setLoading(false));
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        })
}

