import apiConfig from '../../config/apiConfig';
import { apiBaseURL, frontSettingActionType, toastType } from '../../constants';
import { addToast } from './toastAction';

export const fetchFrontSetting = () => async (dispatch) => {
    return await apiConfig.get(apiBaseURL.FRONT_SETTING)
        .then((response) => {
            dispatch({ type: frontSettingActionType.FETCH_FRONT_SETTING, payload: response.data.data });
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        });
}