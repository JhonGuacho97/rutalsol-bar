import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MasterLayout from "../MasterLayout";
import { fetchLoginLogs } from "../../store/action/loginLogsActions";
import ReactDataTable from "../../shared/table/ReactDataTable";
import TabTitle from "../../shared/tab-title/TabTitle";
import {
    getFormattedMessage,
    getFormattedOptions,
    placeholderText,
} from "../../shared/sharedMethod";
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import { loginStatusOptions } from "../../constants";
import LoginLogDetailModal from "./shared/LoginLogDetailModal";

const LoginLogs = (props) => {

    const { fetchLoginLogs, loginLogs, totalRecord, isLoading } = props;

    const [showModal, setShowModal] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);
    const formattedLoginStatusOptions = getFormattedOptions(loginStatusOptions);

    useEffect(() => {
        fetchLoginLogs();
    }, []);
    const onChange = (filter) => {
        const formattedFilter = {
            ...filter,
            status: filter.login_status === "0" || !filter.login_status ? "" : filter.login_status,
        };
        fetchLoginLogs(formattedFilter, true);
    };

    const onVerDetalles = (row) => {
        setSelectedLog(row);
        setShowModal(true);
    };

    const itemsValue =
        loginLogs.length >= 0 &&
        loginLogs.map((log) => ({
            id: log.id,
            name: log.user
                ? `${log.user.first_name} ${log.user.last_name}`
                : "—",
            email: log.email,
            ip_address: log.ip_address,
            user_agent: log.user_agent,
            status: log.status,
            logged_at: log.logged_at,
        }));

    const columns = [
        {
            name: getFormattedMessage("users.title"),
            selector: (row) => row.name,
            sortField: "name",
            sortable: true,
            cell: (row) => (
                <div>
                    <div className="text-primary">{row.name}</div>
                    <div className="text-muted">{row.email}</div>
                </div>
            ),
        },
        {
            name: "IP",
            selector: (row) => row.ip_address,
            sortField: "ip_address",
            sortable: true,
        },
        {
            name: "Estado",
            selector: (row) => row.status,
            sortField: "status",
            sortable: true,
            cell: (row) => (
                <span
                    className={`badge ${row.status === "success"
                        ? "bg-light-success"
                        : "bg-light-danger"
                        }`}
                >
                    {row.status === "success" ? "Exitoso" : "Fallido"}
                </span>
            ),
        },
        {
            name: "Acciones",
            cell: (row) => (
                <div className="d-flex gap-2">
                    <button className="btn btn-primary btn-sm" onClick={() => onVerDetalles(row)}>Ver Detalles</button>
                </div>
            )
        }
    ];

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText("login-logs.title")} />

            <ReactDataTable
                columns={columns}
                items={itemsValue}
                onChange={onChange}
                isLoading={isLoading}
                totalRows={totalRecord}
                isShowFilterField
                isLoginStatus
                loginStatusOptions={formattedLoginStatusOptions}
            />

            <LoginLogDetailModal
                show={showModal}
                onHide={() => setShowModal(false)}
                log={selectedLog}
            />
        </MasterLayout>
    );
};

const mapStateToProps = (state) => {
    const { totalRecord, isLoading } = state;
    const loginLogs = state.loginLogs?.loginLogs || [];
    return { loginLogs, totalRecord, isLoading };
};

export default connect(mapStateToProps, { fetchLoginLogs })(LoginLogs);