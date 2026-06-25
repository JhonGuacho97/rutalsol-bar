import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap-v5";
import * as EmailValidator from "email-validator";
import { loginAction } from "../../store/action/authAction";
import TabTitle from "../../shared/tab-title/TabTitle";
import { fetchFrontSetting } from "../../store/action/frontSettingAction";
import { Tokens } from "../../constants";
import { createBrowserHistory } from "history";
import {
    getFormattedMessage,
    placeholderText,
} from "../../shared/sharedMethod";
import { loginStyles } from "./styles/LoginStyles";
import { EyeIcon, EyeOffIcon, LockIcon } from "./styles/icons";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const history = createBrowserHistory();
    const { frontSetting } = useSelector((state) => state);
    const [loading, setLoading] = useState(false);
    const [showPw, setShowPw] = useState(false);
    const token = localStorage.getItem(Tokens.ADMIN);

    const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    useEffect(() => {
        dispatch(fetchFrontSetting());
        if (token) history.push(window.location.pathname);
    }, []);

    const handleValidation = () => {
        let errorss = {};
        let isValid = false;
        if (!EmailValidator.validate(loginInputs["email"])) {
            errorss["email"] = !loginInputs["email"]
                ? getFormattedMessage("globally.input.email.validate.label")
                : getFormattedMessage("globally.input.email.valid.validate.label");
        } else if (!loginInputs["password"]) {
            errorss["password"] = getFormattedMessage("user.input.password.validate.label");
        } else {
            isValid = true;
        }
        setErrors(errorss);
        setLoading(false);
        return isValid;
    };

    const prepareFormData = () => {
        const formData = new FormData();
        formData.append("email", loginInputs.email);
        formData.append("password", loginInputs.password);
        formData.append("language_code", localStorage.getItem("updated_language"));
        return formData;
    };

    const onLogin = async (e) => {
        e.preventDefault();
        const valid = handleValidation();
        if (valid) {
            setLoading(true);
            dispatch(loginAction(prepareFormData(loginInputs), navigate, setLoading));
            setLoginInputs({ email: "", password: "" });
        }
    };

    const handleChange = (e) => {
        e.persist();
        setLoginInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
        setErrors("");
    };

    const logoSrc = frontSetting?.value?.logo;

    return (
        <>
            <style>{loginStyles}</style>
            <TabTitle title={placeholderText("login-form.login-btn.label")} />

            <div className="lp-root">
                {/* Fondo animado */}
                <div className="lp-bg">
                    <div className="lp-bg-blob" />
                </div>

                {/* ── Panel izquierdo ── */}
                <aside className="lp-aside">
                    {logoSrc
                        ? <Image src={logoSrc} className="lp-aside-logo" alt="logo" />
                        : <div className="lp-brand-name">JhonSport</div>
                    }

                    <h1 className="lp-hero-title">
                        Gestiona tu<br />
                        negocio con<br />
                        <span>total control</span>
                    </h1>

                    <p className="lp-hero-sub">
                        Ventas, compras, inventario y reportes en una sola plataforma. Rápida, confiable y siempre disponible.
                    </p>

                    <div className="lp-stats">
                        <div className="lp-stat">
                            <div className="lp-stat-num">360°</div>
                            <div className="lp-stat-label">Gestión total</div>
                        </div>
                        <div className="lp-stat">
                            <div className="lp-stat-num">POS</div>
                            <div className="lp-stat-label">Punto de venta</div>
                        </div>
                        <div className="lp-stat">
                            <div className="lp-stat-num">∞</div>
                            <div className="lp-stat-label">Productos</div>
                        </div>
                    </div>
                </aside>

                {/* ── Panel derecho ── */}
                <main className="lp-main">
                    <div className="lp-card">

                        {logoSrc && (
                            <Image src={logoSrc} className="lp-card-logo" alt="logo" />
                        )}

                        <div className="lp-card-icon">
                            <LockIcon />
                        </div>

                        <h2 className="lp-heading">
                            {getFormattedMessage("login-form.title")}
                        </h2>
                        <p className="lp-sub">Ingresa tus credenciales para continuar</p>

                        <form onSubmit={onLogin} noValidate>

                            {/* Email */}
                            <div className="lp-field">
                                <div className="lp-field-header">
                                    <label className="lp-label" htmlFor="lp-email">
                                        {getFormattedMessage("globally.input.email.label")}
                                    </label>
                                </div>
                                <div className="lp-input-wrap">
                                    <input
                                        id="lp-email"
                                        className={`lp-input${errors["email"] ? " lp-input--error" : ""}`}
                                        type="text"
                                        name="email"
                                        placeholder={placeholderText("globally.input.email.placeholder.label")}
                                        required
                                        value={loginInputs.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errors["email"] && (
                                    <span className="lp-error-msg">{errors["email"]}</span>
                                )}
                            </div>

                            {/* Password */}
                            <div className="lp-field">
                                <div className="lp-field-header">
                                    <label className="lp-label" htmlFor="lp-password">
                                        {getFormattedMessage("user.input.password.label")}
                                    </label>
                                    <Link to="/forgot-password" className="lp-forgot">
                                        {getFormattedMessage("login-form.forgot-password.label")}
                                    </Link>
                                </div>
                                <div className="lp-input-wrap">
                                    <input
                                        id="lp-password"
                                        className={`lp-input${errors["password"] ? " lp-input--error" : ""}`}
                                        type={showPw ? "text" : "password"}
                                        name="password"
                                        placeholder={placeholderText("user.input.password.placeholder.label")}
                                        required
                                        autoComplete="off"
                                        value={loginInputs.password}
                                        onChange={handleChange}
                                        style={{ paddingRight: 44 }}
                                    />
                                    <button
                                        type="button"
                                        className="lp-pw-toggle"
                                        onClick={() => setShowPw((v) => !v)}
                                        aria-label={showPw ? "Ocultar contraseña" : "Mostrar contraseña"}
                                    >
                                        {showPw ? <EyeOffIcon /> : <EyeIcon />}
                                    </button>
                                </div>
                                {errors["password"] && (
                                    <span className="lp-error-msg">{errors["password"]}</span>
                                )}
                            </div>

                            {/* Submit */}
                            <button type="submit" className="lp-btn" disabled={loading}>
                                <span className="lp-btn-inner">
                                    {loading && <span className="lp-spinner" />}
                                    <span>
                                        {loading
                                            ? getFormattedMessage("globally.loading.label")
                                            : getFormattedMessage("login-form.login-btn.label")
                                        }
                                    </span>
                                </span>
                            </button>

                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Login;
