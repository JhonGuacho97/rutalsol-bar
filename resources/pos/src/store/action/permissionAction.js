import { permissionActionType, toastType, apiBaseURL } from '../../constants';
import apiConfig from '../../config/apiConfig';
import { addToast } from './toastAction';

export const fetchPermissions = () => async (dispatch) => {
    return await apiConfig.get(`permissions?page[size]=0`)
        .then((response) => {
            dispatch({ type: permissionActionType.FETCH_PERMISSIONS, payload: response.data.data });
        })
        .catch((error) => {

            const message = error?.response?.data?.message || 'Error al cargar permisos';
            dispatch(addToast({ text: message, type: toastType.ERROR }));
        });
};