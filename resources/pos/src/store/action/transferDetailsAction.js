import apiConfig from '../../config/apiConfig';
import { apiBaseURL, toastType, transferActionType } from '../../constants';
import { addToast } from './toastAction';
import { setLoading } from './loadingAction';

export const fetchTransferDetails = (Id, isLoading = true) => async (dispatch) => {
    if (isLoading) {
        dispatch(setLoading(true))
    }
    apiConfig.get(apiBaseURL.TRANSFERS + '/' + Id)
        .then((response) => {
            dispatch({ type: transferActionType.TRANSFER_DETAILS, payload: response.data.data })
            if (isLoading) {
                dispatch(setLoading(false))
            }
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        })
};
