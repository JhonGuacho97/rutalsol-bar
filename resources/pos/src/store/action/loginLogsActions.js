import { apiBaseURL, loginLogsActionType } from "../../constants";
import requestParam from "../../shared/requestParam";
import { setLoading } from "./loadingAction";
import { setTotalRecord } from "./totalRecordAction";
import _ from "lodash";
import apiConfig from "../../config/apiConfig";

export const fetchLoginLogs =
    (filter = {}, isLoading = true) =>
        async (dispatch) => {
            if (isLoading) {
                dispatch(setLoading(true));
            }

            let url = apiBaseURL.LOGIN_LOGS;

            if (
                !_.isEmpty(filter) &&
                (filter.page ||
                    filter.pageSize ||
                    filter.search ||
                    filter.order_By ||
                    filter.status)
            ) {
                url += requestParam(filter, null, null, null, url);
            }

            apiConfig
                .get(url)
                .then((response) => {
                    dispatch({
                        type: loginLogsActionType.FETCH_LOGIN_LOGS_SUCCESS,
                        payload: response.data.data,
                    });
                    dispatch(
                        setTotalRecord(response.data.total)
                    );
                    if (isLoading) {
                        dispatch(setLoading(false));
                    }
                })
                .catch(({ response }) => {
                    console.error("Error:", response);
                    dispatch({
                        type: loginLogsActionType.FETCH_LOGIN_LOGS_FAILURE,
                    });
                });
        };