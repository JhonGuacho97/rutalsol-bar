import apiConfig from '../../config/apiConfig';
import { apiBaseURL, adjustMentActionType, toastType } from '../../constants';
import { addToast } from './toastAction';
import { setLoading } from './loadingAction';

export const getAdjustmentDetails = (adjustmentid, isLoading = true) => async (dispatch) => {
    if (isLoading) {
        dispatch(setLoading(true))
    }
    apiConfig.get(apiBaseURL.ADJUSTMENTS + '/' + adjustmentid)
        .then((response) => {
            dispatch({ type: adjustMentActionType.ADJUSTMENT_DETAILS, payload: response.data.data })
            if (isLoading) {
                dispatch(setLoading(false))
            }
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        });
};