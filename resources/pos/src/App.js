import React, { useEffect, useState } from "react";
import { Route, useLocation, Navigate, Routes } from "react-router-dom";
import "../../pos/src/assets/sass/style.react.scss";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { settingsKey, Tokens } from "./constants";
import Toasts from "./shared/toast/Toasts";
import { fetchFrontSetting } from "./store/action/frontSettingAction";
import { fetchConfig } from "./store/action/configAction";
import { addRTLSupport } from "./shared/sharedMethod";
import Login from "./components/auth/Login";
import ResetPassword from "./components/auth/ResetPassword";
import ForgotPassword from "./components/auth/ForgotPassword";
import AdminApp from "./AdminApp";
import useLanguage from "./hooks/useLanguage";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const token = localStorage.getItem(Tokens.ADMIN);
    const { config } = useSelector((state) => state);

    // ─── Idioma ───────────────────────────────────────────────────────────────
    const { messages, updatedLanguage, selectedLanguage } = useLanguage();

    // ─── CSS según dirección del idioma ──────────────────────────────────────
    useEffect(() => {
        if (updatedLanguage === "ar") {
            require("./assets/css/custom.rtl.css");
            require("./assets/css/style.rtl.css");
            require("./assets/css/frontend.rtl.css");
        } else {
            require("./assets/css/custom.css");
            require("./assets/css/style.css");
            require("./assets/css/frontend.css");
        }
    }, [location.pathname]);

    // ─── Soporte RTL ─────────────────────────────────────────────────────────
    useEffect(() => {
        addRTLSupport(updatedLanguage ?? selectedLanguage);
    }, [updatedLanguage, selectedLanguage]);

    // ─── Carga inicial de datos ───────────────────────────────────────────────
    useEffect(() => {
        if (token) {
            dispatch(fetchConfig());
            dispatch(fetchFrontSetting());
        }
    }, []);

    // ─── Redirección según permisos ───────────────────────────────────────────
    const [redirectTo, setRedirectTo] = useState("/app/dashboard");

    useEffect(() => {
        if (!config?.length) return;
        if (config.includes("manage_dashboard")) {
            setRedirectTo("/app/dashboard");
        } else {
            const entity = config[0].split("_")[1];
            setRedirectTo(`/app/${entity}`);
        }
    }, [config]);

    return (
        <div className="d-flex flex-column flex-root">
            <IntlProvider
                locale={settingsKey.DEFAULT_LOCALE}
                messages={messages}
            >
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route 
                        path="reset-password/:token/:email"
                        element={<ResetPassword />}
                    />
                    <Route
                        path="forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="app/*"
                        element={<AdminApp config={config} />}
                    />
                    <Route
                        path="/"
                        element={
                            <Navigate
                                replace
                                to={token ? redirectTo : "/login"}
                            />
                        }
                    />
                    <Route path="*" element={<Navigate replace to={"/"} />} />
                </Routes>
                <Toasts
                    language={updatedLanguage ?? selectedLanguage}
                />
            </IntlProvider>
        </div>
    );
}

export default App;