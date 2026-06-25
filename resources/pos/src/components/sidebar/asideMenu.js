import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
    ProSidebar, SidebarHeader, SidebarContent,
    MenuItem, Menu, SubMenu,
} from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import "react-pro-sidebar/dist/css/styles.css";
import { getFormattedMessage, placeholderText } from "../../shared/sharedMethod";
import { useIntl } from "react-intl";
import { Tokens } from "../../constants";
import { asideStyles } from "./styles/AsideMenuStyles";

const AsideMenu = (props) => {
    const {
        asideConfig, frontSetting, isResponsiveMenu,
        menuClick, menuIconClick, isMenuCollapse,
    } = props;

    const location = useLocation();
    const intl = useIntl();
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const updatedLanguage = localStorage.getItem(Tokens.UPDATED_LANGUAGE);

    useEffect(() => { updateMenu(); }, [updatedLanguage]);

    const updateMenu = () => {
        if (updatedLanguage === "ar") {
            var content = document.getElementsByClassName("pro-arrow-wrapper");
            for (let i = 0; i < content.length; i++) {
                content[i].style.textAlign = "end"; 
            }
        }
    };

    const filterMenu = (asideConfig, searchTerm) => {
        if (!searchTerm) return asideConfig;
        return asideConfig.filter((post) => {
            if (post.newRoute || post.subTitles) {
                const routes = post.newRoute || post.subTitles;
                return routes.map(p =>
                    intl.formatMessage({ id: `${p.title}` }).toLowerCase()
                ).some(name => name.includes(searchTerm.toLowerCase()));
            } else {
                return intl.formatMessage({ id: `${post.title}` })
                    .toLowerCase().includes(searchTerm.toLowerCase());
            }
        });
    };

    const filteredMenu = filterMenu(asideConfig, searchTerm);

    useEffect(() => {
        if (!filteredMenu) return;
        var element = document.getElementsByClassName("myDIV");
        var content = document.getElementsByClassName("pro-item-content");
        filteredMenu.map((SubMenus) => {
            for (let i = 0; i < element.length; i++) {
                if (SubMenus.newRoute && searchTerm.length > 0) {
                    element[i].lastChild.classList.remove("closed");
                    element[i].lastChild.style.height = "auto";
                    element[i].classList.add("open");
                    if (updatedLanguage === "ar") document.getElementsByClassName("pro-arrow-wrapper")[i].style.textAlign = "end";
                } else {
                    if (!searchTerm) {
                        element[i].lastChild.classList.add("closed");
                        element[i].classList.remove("open");
                    }
                }
            }
            for (let i = 0; i < content.length; i++) {
                if (SubMenus.newRoute && searchTerm.length) {
                    const postName = content[i].children[0]?.innerText.toLowerCase();
                    if (postName !== undefined) {
                        const hideEl = content[i].firstChild.parentElement.parentElement.parentElement;
                        if (postName.includes(searchTerm.toLowerCase()) || postName === "reports") {
                            hideEl.classList.remove("notShow");
                            hideEl.classList.add("d-flex");
                        } else {
                            hideEl.classList.remove("d-flex");
                            hideEl.classList.add("notShow");
                        }
                    }
                } else {
                    if (!searchTerm) {
                        const showEl = content[i].parentElement.parentElement;
                        showEl.classList.remove("notShow");
                    }
                }
            }
        });
    }, [filteredMenu && searchTerm.length]);

    useEffect(() => {
        var content = document.getElementsByClassName("pro-item-content");
        var element = document.getElementsByClassName("myDIV");
        for (let i = 0; i < content.length; i++) {
            const hideEl = content[i].firstChild.parentElement.parentElement.parentElement;
            if (hideEl.classList.value.includes("pro-menu-item d-flex flex-column active")) {
                let closedEl = hideEl.parentElement.parentElement.parentElement;
                closedEl.classList.add("openMenu");
                closedEl.parentElement.classList.add("pro-active-sub");
            }
        }
        for (let i = 0; i < element.length; i++) {
            if (element[i].classList.value.includes("pro-active-sub")) {
                let closeMenu = element[i].firstChild.lastChild.firstChild;
                if (closeMenu) {
                    closeMenu.style.transform = updatedLanguage === "ar" ? "rotate(-45deg)" : "rotate(45deg)";
                }
                element[i].addEventListener("click", () => {
                    let openEl = element[i].lastChild;
                    const val = openEl.classList.value;
                    if (val.includes("closed openMenu transitioning") || val.includes("openMenu transitioning closed") || val.includes("transitioning openMenu closed")) {
                        openEl.classList.toggle("closeMenu", "closeMenu");
                        openEl.classList.toggle("openMenu", "");
                        closeMenu.style.transform = updatedLanguage === "ar" ? "rotate(45deg)" : "rotate(-45deg)";
                    } else {
                        closeMenu.style.transform = updatedLanguage === "ar" ? "rotate(-45deg)" : "rotate(45deg)";
                        openEl.classList.toggle("closeMenu", "");
                        openEl.classList.toggle("openMenu", "openMenu");
                        openEl.classList.add("closed");
                    }
                });
            }
        }
    }, [location.pathname]);

    const isSubActive = (mainItems) => {
        const sp = mainItems?.subPath || {};
        return Object.values(sp).some(p => location.pathname === p);
    };

    return (
        <>
            <style>{asideStyles}</style>
            <ProSidebar
                collapsed={isMenuCollapse}
                className={`${isResponsiveMenu ? "open-menu" : "hide-menu"} aside-menu-container`}
            >
                {/* ── Logo ── */}
                <SidebarHeader className="aside-menu-container__aside-logo flex-column-auto pb-2 pt-3">
                    <a href="/" className="text-decoration-none sidebar-logo">
                        <div className={`${isMenuCollapse ? "d-none" : "image image-mini me-3"}`}>
                            <img
                                src={frontSetting.value?.logo}
                                className="img-fluid object-fit-contain"
                                alt="logo"
                            />
                        </div>
                        {!isMenuCollapse && frontSetting.value?.show_app_name_in_sidebar === "1"
                            ? frontSetting.value.company_name
                            : ""}
                    </a>
                    <button
                        type="button"
                        onClick={menuIconClick}
                        className="btn p-0 aside-menu-container__aside-menubar d-lg-block d-none sidebar-btn border-0"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </SidebarHeader>

                <SidebarContent className="sidebar-scrolling">
                    {/* ── Search ── */}
                    <div className={`d-flex position-relative aside-menu-container__aside-search search-control ${isMenuCollapse ? "d-none" : ""} py-3 mt-1`}>
                        <div className="position-relative d-flex w-100">
                            <input
                                className={`form-control ps-8 ${isMenuCollapse ? "d-none" : ""}`}
                                type="search"
                                id="search"
                                placeholder={placeholderText("react-data-table.searchbar.placeholder")}
                                aria-label="Search"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="position-absolute d-flex align-items-center top-0 bottom-0 left-0 text-gray-600 ms-3">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>

                    {/* ── Menu ── */}
                    <Menu>
                        {filteredMenu.length ? (
                            filteredMenu.map((mainItems, index) => {
                                return mainItems.newRoute ? (
                                    <SubMenu
                                        key={index}
                                        title={intl.formatMessage({ id: `${mainItems.title}` })}
                                        className={isSubActive(mainItems) ? "pro-active-sub myDIV" : "myDIV"}
                                        icon={mainItems.fontIcon}
                                    >
                                        {mainItems.newRoute.map((subItem, idx) => (
                                            <MenuItem
                                                key={idx}
                                                icon={subItem.fontIcon}
                                                className={`${!isMenuCollapse ? subItem.class : ""} flex-column `}
                                                active={
                                                    location.pathname === subItem.to ||
                                                    location.pathname === subItem.path ||
                                                    location.pathname.includes(subItem.to) ||
                                                    location.pathname === subItem.stockPath ||
                                                    location.pathname === subItem.productPath ||
                                                    location.pathname === subItem.purchasePath ||
                                                    location.pathname === subItem.topSellingPath ||
                                                    location.pathname === subItem.productQuantityAlertPath ||
                                                    location.pathname === subItem.stockDetailPath + "/" + id
                                                }
                                            >
                                                <Link to={subItem.to}>
                                                    {intl.formatMessage({ id: `${subItem.title}` })}
                                                </Link>
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                ) : (
                                    mainItems.to !== "/app/pos" && (
                                        <MenuItem
                                            key={index}
                                            icon={mainItems.fontIcon}
                                            className={`${!isMenuCollapse ? mainItems.class : ""} flex-column`}
                                            active={
                                                location.pathname === mainItems.to ||
                                                location.pathname === mainItems.path ||
                                                location.pathname === mainItems.mailSettingsPath ||
                                                location.pathname === mainItems.prefixesPath ||
                                                location.pathname === mainItems.profitLossReportPath ||
                                                location.pathname.includes(mainItems.to) ||
                                                location.pathname === mainItems.stockPath ||
                                                location.pathname === mainItems.productPath ||
                                                location.pathname === mainItems.purchasePath ||
                                                location.pathname === mainItems.topSellingPath ||
                                                location.pathname === mainItems.productQuantityAlertPath ||
                                                location.pathname === mainItems.supplierReportPath ||
                                                location.pathname === mainItems.customerReportPath ||
                                                location.pathname === mainItems.bestCustomerReportPath ||
                                                location.pathname === mainItems.registerReportPath ||
                                                location.pathname === mainItems.supplierReportDetailsPath + "/" + id ||
                                                location.pathname === mainItems.customerReportDetailsPath + "/" + id
                                            }
                                        >
                                            <Link to={mainItems.to}>
                                                {intl.formatMessage({ id: `${mainItems.title}` })}
                                            </Link>
                                        </MenuItem>
                                    )
                                );
                            })
                        ) : (
                            <div className="text-center">
                                {getFormattedMessage("side-menu.empty.message")}
                            </div>
                        )}
                    </Menu>
                </SidebarContent>
            </ProSidebar>

            <div
                className={`${isResponsiveMenu === true && "bg-overlay d-block"}`}
                onClick={menuClick}
            />
        </>
    );
};

export default AsideMenu;