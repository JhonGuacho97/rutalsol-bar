import React, { useEffect, useState } from 'react';
import TabTitle from '../../shared/tab-title/TabTitle';
import * as EmailValidator from 'email-validator';
import { forgotPassword } from '../../store/action/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFrontSetting } from '../../store/action/frontSettingAction';
import { getFormattedMessage, placeholderText } from '../../shared/sharedMethod';
import { Image } from 'react-bootstrap-v5';
import { Link } from 'react-router-dom';
import { ForgotPasswordStyles } from './styles/LoginStyles';
import { LockIcon, MailIcon } from './styles/icons';

const ForgotPassword = () => {
    const { loginUser, frontSetting } = useSelector((state) => state);
    const [disable, setDisable] = useState(true);
    const Dispatch = useDispatch();
    const [forgotValue, setForgotValue] = useState({ email: '' });
    const [errors, setErrors] = useState({ email: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        clearEmail();
        Dispatch(fetchFrontSetting());
        if (!loginUser.errorMessage) {
            if (loginUser) {
                setLoading(false);
                setForgotValue({ email: '' });
            }
        } else {
            setLoading(false);
        }
    }, [loginUser, forgotPassword]);

    const handleChange = (e) => {
        e.persist();
        setForgotValue((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
        setDisable(e.target.value.trim() === '');
        setErrors('');
    };

    const prepareFormData = () => {
        const formData = new FormData();
        formData.append('email', forgotValue.email);
        return formData;
    };

    const handleValidation = () => {
        let errorss = {};
        let isValid = false;
        if (!EmailValidator.validate(forgotValue['email'])) {
            if (!forgotValue['email']) {
                errorss['email'] = getFormattedMessage('globally.input.email.validate.label');
            } else {
                errorss['email'] = getFormattedMessage('globally.input.email.valid.validate.label');
            }
        } else {
            isValid = true;
        }
        setErrors(errorss);
        return isValid;
    };

    const clearEmail = () => {
        if (loginUser && loginUser === 'We have emailed your password reset link!') {
            setForgotValue({ email: '' });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const valid = handleValidation();
        if (!valid) {
            setLoading(false);
            return;
        }
        Dispatch(forgotPassword(prepareFormData(forgotValue)));
        setDisable(true);
    };

    const successMessage =
        loginUser && loginUser === 'We have emailed your password reset link!';

    return (
        <div className="forgot-page">
            <style>{ForgotPasswordStyles}</style>
            <TabTitle title="Forgot Password" />

            {/* Logo */}
            <div className="forgot-logo-wrap">
                {frontSetting?.value?.logo && (
                    <Image
                        className="login-company-logo"
                        src={frontSetting.value.logo}
                        alt="logo"
                    />
                )}
            </div>

            {/* Card */}
            <div className="forgot-card">
                {/* Ícono */}
                <div className="forgot-icon-circle">
                    <LockIcon />
                </div>

                <h1 className="forgot-title">
                    {getFormattedMessage('login-form.forgot-password.label')}
                </h1>
                <p className="forgot-subtitle">
                    Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
                </p>

                {/* Mensaje de éxito */}
                {successMessage && (
                    <div className="forgot-success-box">
                        ¡Te enviamos el enlace de recuperación! Revisa tu bandeja de entrada.
                    </div>
                )}

                <form onSubmit={onSubmit}>
                    {/* Label + link */}
                    <div className="forgot-field-label">
                        <span>
                            {getFormattedMessage('globally.input.email.label')}
                            <span className="required" />
                        </span>
                        <Link to="/login" className="forgot-back-link">
                            {getFormattedMessage('login-form.go-to-sign-in.label')}
                        </Link>
                    </div>

                    {/* Input */}
                    <div className="forgot-input-wrap">
                        <MailIcon />
                        <input
                            placeholder={placeholderText('globally.input.email.placeholder.label')}
                            required
                            value={forgotValue.email}
                            type="text"
                            name="email"
                            autoComplete="on"
                            onChange={handleChange}
                        />
                    </div>

                    {/* Error */}
                    <p className="forgot-error">
                        {errors['email'] || null}
                    </p>

                    {/* Botón */}
                    <button
                        className="forgot-btn"
                        type="submit"
                        disabled={disable}
                    >
                        {loading ? (
                            <>
                                <span className="forgot-spinner" />
                                {getFormattedMessage('globally.loading.label')}
                            </>
                        ) : (
                            getFormattedMessage('forgot-password-form.reset-link-btn.label')
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;