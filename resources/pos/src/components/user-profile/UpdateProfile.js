import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as EmailValidator from 'email-validator';
import ImagePicker from '../../shared/image-picker/ImagePicker';
import { updateProfile, fetchProfile } from '../../store/action/updateProfileAction';
import MasterLayout from '../MasterLayout';
import TabTitle from '../../shared/tab-title/TabTitle';
import { getAvatarName, getFormattedMessage, numValidate, placeholderText } from '../../shared/sharedMethod';
import user from '../../assets/images/avatar.png';
import TopProgressBar from "../../shared/components/loaders/TopProgressBar";
import '../user-profile/styles/UpdateProfileStyles.css';

const UpdateProfile = () => {
    const { userProfile } = useSelector(state => state);
    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const imageTitle = placeholderText('update-profile.input.change-image.label');

    const [profileValue, setProfileValue] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        image: '',
    });

    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    });

    const avtarName = getAvatarName(
        userProfile &&
        userProfile.attributes &&
        userProfile.attributes.image === '' &&
        userProfile.attributes.last_name &&
        userProfile.attributes.first_name + ' ' + userProfile.attributes.last_name
    );

    const newImg = userProfile && userProfile.attributes && userProfile.attributes.image === null && avtarName;
    const [imagePreviewUrl, setImagePreviewUrl] = useState(newImg && newImg);
    const [selectImg, setSelectImg] = useState(null);

    const disabled = selectImg ? false :
        userProfile.attributes &&
        userProfile.attributes.first_name === profileValue.first_name &&
        userProfile.attributes.last_name === profileValue.last_name &&
        userProfile.attributes.email === profileValue.email &&
        userProfile.attributes.phone === profileValue.phone &&
        userProfile.attributes.image === profileValue.image;

    useEffect(() => {
        if (userProfile) {
            setProfileValue({
                first_name: userProfile?.attributes?.first_name || '',
                last_name: userProfile?.attributes?.last_name || '',
                email: userProfile?.attributes?.email || '',
                phone: userProfile?.attributes?.phone || '',
                image: userProfile?.attributes?.image || '',
            });
            setImagePreviewUrl(userProfile?.attributes?.image || user);
        }
    }, [userProfile]);

    useEffect(() => {
        Dispatch(fetchProfile());
    }, []);

    const handleValidation = () => {
        let errorss = {};
        let isValid = false;
        if (!profileValue['first_name']) {
            errorss['first_name'] = 'Please enter first name';
        } else if (!profileValue['last_name']) {
            errorss['last_name'] = 'Please enter last name';
        } else if (!EmailValidator.validate(profileValue['email'])) {
            errorss['email'] = !profileValue['email']
                ? 'Enter email address'
                : 'Please enter valid email address';
        } else if (!profileValue['phone']) {
            errorss['phone'] = 'Please enter phone number';
        } else {
            isValid = true;
        }
        setErrors(errorss);
        return isValid;
    };

    const onChangeInput = (e) => {
        e.preventDefault();
        setProfileValue(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
        setErrors('');
    };

    const handleImageChanges = (e) => {
        e.preventDefault();
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type === 'image/jpeg' || file.type === 'image/png') {
                setSelectImg(file);
                const fileReader = new FileReader();
                fileReader.onloadend = () => setImagePreviewUrl(fileReader.result);
                fileReader.readAsDataURL(file);
                setErrors('');
            }
        }
    };

    const prepareFormData = (data) => {
        const formData = new FormData();
        formData.append('first_name', data.first_name);
        formData.append('last_name', data.last_name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        if (selectImg) formData.append('image', data.image);
        return formData;
    };

    const onEdit = (event) => {
        event.preventDefault();
        const Valid = handleValidation();
        if (!disabled && Valid) {
            profileValue.image = selectImg;
            setProfileValue(profileValue);
            Dispatch(updateProfile(prepareFormData(profileValue), navigate));
        }
    };

    const fullName = `${profileValue.first_name || ''} ${profileValue.last_name || ''}`.trim() || 'Tu Perfil';

    return (
        <MasterLayout>
            <TopProgressBar />
            <TabTitle title={placeholderText('update-profile.title')} />

            <div className="update-profile-container">
                <div className="card">
                    <div className="card-body">

                        {/* ── Header con avatar ── */}
                        <div className="profile-header">
                            <div className="profile-avatar-wrap">
                                {imagePreviewUrl && typeof imagePreviewUrl === 'string' && imagePreviewUrl.startsWith('data:') || (imagePreviewUrl && imagePreviewUrl !== avtarName) ? (
                                    <img
                                        src={imagePreviewUrl || user}
                                        alt="avatar"
                                        style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '3px solid #fff', boxShadow: '0 4px 16px rgba(99,102,241,0.2)' }}
                                    />
                                ) : (
                                    <div style={{
                                        width: 80, height: 80, borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#fff', fontSize: 28, fontWeight: 700,
                                        border: '3px solid #fff',
                                        boxShadow: '0 4px 16px rgba(99,102,241,0.2)',
                                        fontFamily: 'Poppins, sans-serif',
                                    }}>
                                        {avtarName?.[0] || '?'}
                                    </div>
                                )}

                                {/* Botón cámara */}
                                <label
                                    htmlFor="profile-image-input"
                                    style={{
                                        position: 'absolute', bottom: 0, right: 0,
                                        width: 26, height: 26,
                                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                        borderRadius: '50%', border: '2px solid #fff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        cursor: 'pointer', transition: 'opacity 0.18s',
                                    }}
                                >
                                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                        <circle cx="12" cy="13" r="4" />
                                    </svg>
                                </label>
                                <input
                                    id="profile-image-input"
                                    type="file"
                                    accept="image/jpeg,image/png"
                                    style={{ display: 'none' }}
                                    onChange={handleImageChanges}
                                />
                            </div>

                            <div>
                                <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1f2937', margin: '0 0 4px', fontFamily: 'Poppins, sans-serif' }}>
                                    {fullName}
                                </h2>
                                <p style={{ fontSize: 13, color: '#a78bfa', margin: 0, fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>
                                    {profileValue.email || 'Actualiza tu información'}
                                </p>
                            </div>
                        </div>

                        {/* ── Formulario ── */}
                        <Form>
                            <p className="profile-section-title">Información personal</p>

                            <div className="row">
                                {/* Nombre */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage("user.input.first-name.label")}
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={profileValue.first_name || ''}
                                        placeholder={placeholderText("user.input.first-name.placeholder.label")}
                                        className="form-control"
                                        autoFocus={true}
                                        onChange={onChangeInput}
                                    />
                                    <span className="text-danger d-block fw-400 fs-small mt-2">
                                        {errors['first_name'] || null}
                                    </span>
                                </div>

                                {/* Apellido */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage("user.input.last-name.label")}
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={profileValue.last_name || ''}
                                        placeholder={placeholderText("user.input.last-name.placeholder.label")}
                                        className="form-control"
                                        onChange={onChangeInput}
                                    />
                                    <span className="text-danger d-block fw-400 fs-small mt-2">
                                        {errors['last_name'] || null}
                                    </span>
                                </div>

                                {/* Email */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('user.input.email.label')}
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        value={profileValue.email || ''}
                                        placeholder={placeholderText('user.input.email.placeholder.label')}
                                        className="form-control"
                                        onChange={onChangeInput}
                                    />
                                    <span className="text-danger d-block fw-400 fs-small mt-2">
                                        {errors['email'] || null}
                                    </span>
                                </div>

                                {/* Teléfono */}
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">
                                        {getFormattedMessage('user.input.phone-number.label')}
                                        <span className="required" />
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={profileValue.phone || ''}
                                        placeholder={placeholderText('user.input.phone-number.placeholder.label')}
                                        className="form-control"
                                        pattern="[0-9]*"
                                        min={0}
                                        onKeyPress={numValidate}
                                        onChange={onChangeInput}
                                    />
                                    <span className="text-danger d-block fs-small mt-2 fw-400">
                                        {errors['phone'] || null}
                                    </span>
                                </div>

                                {/* Botones */}
                                <div className="col-12">
                                    <div style={{ borderTop: '1px solid #f0ebff', paddingTop: 24, marginTop: 8, display: 'flex', gap: 12 }}>
                                        {userProfile && (
                                            <div onClick={onEdit}>
                                                <input
                                                    className="btn btn-primary"
                                                    type="submit"
                                                    value={placeholderText('globally.save-btn')}
                                                    disabled={disabled}
                                                />
                                            </div>
                                        )}
                                        <Link to="/dashboard" className="btn btn-secondary">
                                            {getFormattedMessage('globally.cancel-btn')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </MasterLayout>
    );
};

export default UpdateProfile;