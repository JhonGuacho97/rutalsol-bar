import React, { useEffect, useState } from 'react';
import { Image, Nav, Navbar } from 'react-bootstrap-v5';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Tokens } from '../../constants/index';
import { logoutAction } from '../../store/action/authAction';
import ChangePassword from '../auth/change-password/ChangePassword';
import { getAvatarName, getFormattedMessage } from '../../shared/sharedMethod';
import { updateLanguage } from '../../store/action/updateLanguageAction';
import User from '../../assets/images/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMaximize, faMinimize, faUser,
    faLock, faRightFromBracket, faAngleDown,
    faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { productQuantityReportAction } from '../../store/action/paymentQuantityReport';
import { Filters } from '../../constants';
import LanguageModel from '../user-profile/LanguageModel';
import PosRegisterModel from '../posRegister/PosRegisterModel.js';
import { headerStyles } from './styles/HeaderStyles.js';

/* ── Componente ── */
const Header = (props) => {
    const {
        logoutAction, newRoutes, updateLanguage,
        selectedLanguage, productQuantityReportAction,
    } = props;

    const navigate = useNavigate();
    const users            = localStorage.getItem(Tokens.USER);
    const firstName        = localStorage.getItem(Tokens.FIRST_NAME);
    const lastName         = localStorage.getItem(Tokens.LAST_NAME);
    const token            = localStorage.getItem(Tokens.ADMIN);
    const imageUrl         = localStorage.getItem(Tokens.USER_IMAGE_URL);
    const image            = localStorage.getItem(Tokens.IMAGE);
    const updatedEmail     = localStorage.getItem(Tokens.UPDATED_EMAIL);
    const updatedFirstName = localStorage.getItem(Tokens.UPDATED_FIRST_NAME);
    const updatedLastName  = localStorage.getItem(Tokens.UPDATED_LAST_NAME);

    const [deleteModel,          setDeleteModel]          = useState(false);
    const [languageModel,        setLanguageModel]        = useState(false);
    const [isFullscreen,         setIsFullscreen]         = useState(false);
    const [warehouseValue]                                = useState({ label: 'All', value: null });
    const [totalRecords,         setTotalRecords]         = useState(0);
    const [showPosRegisterModel, setShowPosRegisterModel] = useState(false);

    const { allConfigData } = useSelector(state => state);

    useEffect(() => {
        let isLoading;
        productQuantityReportAction(warehouseValue.value, Filters.OBJ, isLoading = false, setTotalRecords);
    }, []);

    const fullName  = (updatedFirstName && updatedLastName)
        ? `${updatedFirstName} ${updatedLastName}`
        : `${firstName} ${lastName}`;
    const avatarSrc = imageUrl || image || null;

    const onLogOut       = () => { logoutAction(token, navigate); navigate('/login'); };
    const onProfileClick = () => { window.location.href = '#/app/profile/edit'; };
    const fullScreen     = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const hasPosPermission = newRoutes
        .map(r => r.permission)
        .some(p => p === 'manage_pos_screen');

    return (
        <>
            <style>{headerStyles}</style>

            <Navbar collapseOnSelect expand='lg' className='hdr-navbar align-items-center ms-auto py-0'>

                {/* POS */}
                {hasPosPermission && (
                    <div className='me-2'>
                        {allConfigData?.open_register === true ? (
                            <button onClick={() => setShowPosRegisterModel(true)} className='hdr-pos-btn'>
                                {getFormattedMessage('header.pos.title')} 
                            </button>
                        ) : (
                            <Link to='/app/pos' className='hdr-pos-btn'>
                                {getFormattedMessage('header.pos.title')}
                            </Link>
                        )}
                    </div>
                )}

                {/* Fullscreen */}
                <div className='hdr-icon-btn' onClick={fullScreen} title={isFullscreen ? 'Salir pantalla completa' : 'Pantalla completa'}>
                    <FontAwesomeIcon icon={isFullscreen ? faMinimize : faMaximize} style={{ fontSize: 14 }} />
                </div>

                {/* User dropdown */}
                <Dropdown align='end'>
                    <Dropdown.Toggle as='div' className='hdr-user-trigger hide-arrow' id='hdr-user-dropdown'>
                        {avatarSrc ? (
                            <img src={avatarSrc} className='hdr-avatar-img' alt='avatar' />
                        ) : (
                            <div className='hdr-avatar-initials'>{getAvatarName(fullName)}</div>
                        )}
                        <span className='hdr-user-name d-none d-sm-block'>{fullName}</span>
                        <FontAwesomeIcon icon={faAngleDown} className='hdr-chevron d-none d-sm-block' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='hdr-dropdown-menu'>
                        {/* Info usuario */}
                        <div className='hdr-dropdown-header'>
                            {avatarSrc ? (
                                <img src={avatarSrc} className='hdr-dropdown-avatar' alt='avatar' />
                            ) : (
                                <div className='hdr-dropdown-initials'>{getAvatarName(fullName)}</div>
                            )}
                            <div className='hdr-dropdown-name'>{fullName}</div>
                            <div className='hdr-dropdown-email'>{updatedEmail || users}</div>
                        </div>

                        <Dropdown.Item onClick={onProfileClick} className='hdr-dropdown-item'>
                            <div className='hdr-item-icon'><FontAwesomeIcon icon={faUser} /></div>
                            {getFormattedMessage('header.profile-menu.profile.label')}
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => setDeleteModel(true)} className='hdr-dropdown-item'>
                            <div className='hdr-item-icon'><FontAwesomeIcon icon={faLock} /></div>
                            {getFormattedMessage('header.profile-menu.change-password.label')}
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => setLanguageModel(true)} className='hdr-dropdown-item'>
                            <div className='hdr-item-icon'><FontAwesomeIcon icon={faLanguage} /></div>
                            {getFormattedMessage('header.profile-menu.change-language.label')}
                        </Dropdown.Item>

                        <div className='hdr-divider' />

                        <Dropdown.Item onClick={onLogOut} className='hdr-dropdown-item hdr-dropdown-item--logout'>
                            <div className='hdr-item-icon'><FontAwesomeIcon icon={faRightFromBracket} /></div>
                            {getFormattedMessage('header.profile-menu.logout.label')}
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>

            {deleteModel && (
                <ChangePassword deleteModel={deleteModel} onClickDeleteModel={() => setDeleteModel(false)} />
            )}
            {languageModel && (
                <LanguageModel languageModel={languageModel} onClickLanguageModel={() => setLanguageModel(false)} />
            )}
            <PosRegisterModel
                showPosRegisterModel={showPosRegisterModel}
                onClickshowPosRegisterModel={() => setShowPosRegisterModel(false)}
            />
        </>
    );
};

const mapStateToProps = (state) => {
    const { selectedLanguage, productQuantityReport } = state;
    return { selectedLanguage, productQuantityReport };
};

export default connect(mapStateToProps, { logoutAction, updateLanguage, productQuantityReportAction })(Header);