import { addToast } from '../store/action/toastAction';
import { toastType } from '../constants';

export const apiRequest = async (dispatch, requestFn, onSuccess, errorMsg = 'Something went wrong') => {
    try {
        const response = await requestFn();
        if (onSuccess) onSuccess(response);
        return response;
    } catch (error) {
        const message = error?.response?.data?.message || errorMsg;
        dispatch(addToast({ text: message, type: toastType.ERROR }));
        return null;
    }
};