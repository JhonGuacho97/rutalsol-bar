import apiConfig from '../../config/apiConfig';
import { apiBaseURL, toastType, warehouseActionType } from '../../constants';
import { addToast } from './toastAction';

export const fetchWarehouseReport = (id) => async (dispatch) => {
    await apiConfig.get(apiBaseURL.WAREHOUSE_REPORT + '?warehouse_id=' + id)
        .then((response) => {
            dispatch({ type: warehouseActionType.FETCH_WAREHOUSE_REPORT, payload: response.data.data });
        })
        .catch((error) => {
            const message = error?.response?.data?.message || 'Something went wrong';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        })
};
