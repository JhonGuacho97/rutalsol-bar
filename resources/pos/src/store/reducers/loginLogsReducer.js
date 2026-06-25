import { loginLogsActionType } from "../../constants";

const initialState = {
    loginLogs: [],
};

const loginLogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case loginLogsActionType.FETCH_LOGIN_LOGS_REQUEST:
            return {
                ...state,
            };

        case loginLogsActionType.FETCH_LOGIN_LOGS_SUCCESS:
            return {
                ...state,
                loginLogs: action.payload, // 👈 aquí guardas los datos
            };

        case loginLogsActionType.FETCH_LOGIN_LOGS_FAILURE:
            return {
                ...state,
                loginLogs: [],
            };

        default:
            return state;
    }
};

export default loginLogsReducer;