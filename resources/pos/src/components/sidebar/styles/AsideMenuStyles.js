/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
export const asideStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Poppins:wght@400;500;600&display=swap');

  /* ── Sidebar contenedor ── */
  .aside-menu-container .pro-sidebar-inner {
    background: #ffffff !important;
    box-shadow: 4px 0 24px rgba(99,102,241,0.08) !important;
    font-family: 'Poppins', sans-serif !important;
    border-right: 1px solid #f0f0f8;
  }

  /* ── Forzar fondo blanco en TODO el sidebar y submenús ── */
  .aside-menu-container .pro-sidebar,
  .aside-menu-container .pro-sidebar > .pro-sidebar-inner,
  .aside-menu-container .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout,
  .aside-menu-container .pro-sub-menu > .pro-inner-list-item,
  .aside-menu-container .pro-sub-menu > .pro-inner-list-item > div,
  .aside-menu-container .pro-sub-menu > .pro-inner-list-item > div > ul,
  .aside-menu-container .react-slidedown {
    background: #ffffff !important;
    background-color: #ffffff !important;
  }

  /* Eliminar el fondo oscuro que pone pro-sidebar por defecto */
  .aside-menu-container .pro-sub-menu .pro-inner-list-item {
    background-color: #ffffff !important;
    padding-left: 0 !important;
  }

  .aside-menu-container .pro-sub-menu .pro-inner-list-item > div > ul {
    padding: 4px 8px !important;
    background: #ffffff !important;
  }

  /* ── Header del sidebar (logo) ── */
  .aside-menu-container .aside-menu-container__aside-logo {
    background: #fff !important;
    border-bottom: 1px solid #f0f0f8 !important;
    padding: 14px 20px !important;
    min-height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .aside-menu-container .sidebar-logo {
    font-family: 'Nunito', sans-serif !important;
    font-weight: 800 !important;
    font-size: 17px !important;
    background: linear-gradient(135deg, #6366f1, #a855f7) !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-decoration: none !important;
    display: flex !important;
    align-items: center !important;
    gap: 10px !important;
  }

  .aside-menu-container .sidebar-btn {
    width: 32px; height: 32px;
    border-radius: 8px !important;
    background: #f5f3ff !important;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.18s !important;
  }
  .aside-menu-container .sidebar-btn:hover { background: #ede9fe !important; }
  .aside-menu-container .sidebar-btn .svg-inline--fa { color: #6366f1 !important; font-size: 14px !important; }

  /* ── Search bar ── */
  .aside-menu-container .aside-menu-container__aside-search {
    padding: 12px 14px !important;
    background: #fff;
    border-bottom: 1px solid #f0f0f8;
  }

  .aside-menu-container .aside-menu-container__aside-search .form-control {
    background: #f5f3ff !important;
    border: 1.5px solid transparent !important;
    border-radius: 10px !important;
    font-size: 13px !important;
    font-family: 'Poppins', sans-serif !important;
    color: #374151 !important;
    padding: 9px 12px 9px 36px !important;
    transition: border-color 0.18s, box-shadow 0.18s !important;
  }
  .aside-menu-container .aside-menu-container__aside-search .form-control:focus {
    border-color: #6366f1 !important;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.1) !important;
    background: #fff !important;
    outline: none !important;
  }
  .aside-menu-container .aside-menu-container__aside-search .form-control::placeholder {
    color: #c4b5fd !important;
  }
  .aside-menu-container .aside-menu-container__aside-search .svg-inline--fa {
    color: #a78bfa !important;
    font-size: 13px !important;
  }

  /* ── Menu items ── */
  .aside-menu-container .pro-menu {
    padding: 10px 10px !important;
  }

  .aside-menu-container .pro-menu-item {
    border-radius: 10px !important;
    margin-bottom: 2px !important;
    transition: background 0.15s !important;
  }

  .aside-menu-container .pro-menu-item > .pro-inner-item {
    padding: 10px 14px !important;
    border-radius: 10px !important;
    color: #6b7280 !important;
    font-size: 13.5px !important;
    font-weight: 500 !important;
    transition: color 0.15s, background 0.15s !important;
  }

  .aside-menu-container .pro-menu-item > .pro-inner-item:hover {
    background: #f5f3ff !important;
    color: #6366f1 !important;
  }

  .aside-menu-container .pro-menu-item > .pro-inner-item:hover .pro-icon-wrapper .svg-inline--fa {
    color: #6366f1 !important;
  }

  /* Item activo */
  .aside-menu-container .pro-menu-item.active > .pro-inner-item,
  .aside-menu-container .pro-menu-item.pro-active-sub > .pro-inner-item {
    background: linear-gradient(135deg,#667eea,#764ba2) !important;
    color: #fff !important;
    border-radius: 10px !important;
    box-shadow: 0 4px 14px rgba(99,102,241,0.3) !important;
  }
    

  .aside-menu-container .pro-menu-item.active > .pro-inner-item .pro-item-content,
  .aside-menu-container .pro-menu-item.active > .pro-inner-item .svg-inline--fa,
  .aside-menu-container .pro-menu-item.pro-active-sub > .pro-inner-item .pro-item-content,
  .aside-menu-container .pro-menu-item.pro-active-sub > .pro-inner-item .svg-inline--fa {
    color: #fff !important;
  }

  .aside-menu-container .pro-menu-item.active > .pro-inner-item .pro-arrow {
    border-color: #fff !important;
  }

  /* Iconos del menú */
  .aside-menu-container .pro-icon-wrapper {
    background: transparent !important;
    width: 30px !important; height: 30px !important;
    min-width: 30px !important;
    border-radius: 8px !important;
    margin-right: 10px !important;
    display: flex; align-items: center; justify-content: center;
  }

  .aside-menu-container .pro-inner-item .svg-inline--fa {
    color: #a78bfa !important;
    font-size: 14px !important;
    transition: color 0.15s !important;
  }

  /* SubMenu */
  .aside-menu-container .pro-sub-menu > .pro-inner-list-item {
    background: #fafafa !important;
    border-radius: 10px !important;
    padding-left: 8px !important;
    margin-top: 2px !important;
  }

  .aside-menu-container .pro-sub-menu .pro-menu-item > .pro-inner-item {
    padding-left: 20px !important;
    font-size: 13px !important;
  }

  /* Flecha del submenu */
  .aside-menu-container .pro-arrow {
    border-color: #c4b5fd !important;
    border-width: 0 2px 2px 0 !important;
  }

  /* Links dentro de menu items */
  .aside-menu-container .pro-item-content a {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    display: block;
    width: 100%;
  }

  /* Sidebar colapsado */
  .aside-menu-container .pro-sidebar.collapsed .pro-menu-item > .pro-inner-item {
    justify-content: center !important;
    padding: 10px !important;
  }

  .aside-menu-container .pro-sidebar.collapsed .pro-icon-wrapper {
    margin-right: 0 !important;
  }

  /* Scrollbar del sidebar */
  .aside-menu-container .sidebar-scrolling::-webkit-scrollbar {
    width: 4px;
  }
  .aside-menu-container .sidebar-scrolling::-webkit-scrollbar-track {
    background: transparent;
  }
  .aside-menu-container .sidebar-scrolling::-webkit-scrollbar-thumb {
    background: #e9d5ff;
    border-radius: 4px;
  }
  .aside-menu-container .sidebar-scrolling::-webkit-scrollbar-thumb:hover {
    background: #a78bfa;
  }

  /* Empty message */
  .aside-menu-container .text-center {
    color: #9ca3af !important;
    font-size: 13px !important;
    padding: 16px 0 !important;
    font-family: 'Poppins', sans-serif !important;
  }

  /* ── SubMenu header activo (solo el padre) ── */
.aside-menu-container .pro-sub-menu.pro-active-sub > .pro-inner-item {
  background: linear-gradient(135deg,#667eea,#764ba2) !important;
  color: #fff !important;
  border-radius: 10px !important;
  box-shadow: 0 4px 14px rgba(99,102,241,0.3) !important;
}

.aside-menu-container .pro-sub-menu.pro-active-sub > .pro-inner-item .pro-item-content,
.aside-menu-container .pro-sub-menu.pro-active-sub > .pro-inner-item .svg-inline--fa,
.aside-menu-container .pro-sub-menu.pro-active-sub > .pro-inner-item .pro-arrow {
  color: #fff !important;
  border-color: #fff !important;
}

/* ── Subitems: forzar fondo blanco aunque el padre sea activo ── */
.aside-menu-container .pro-sub-menu.pro-active-sub .pro-inner-list-item .pro-menu-item > .pro-inner-item {
  background: transparent !important;
  color: #6b7280 !important;
  box-shadow: none !important;
}

/* ── Subitem activo (la ruta actual) ── */
.aside-menu-container .pro-sub-menu.pro-active-sub .pro-inner-list-item .pro-menu-item.active > .pro-inner-item {
  background: #f5f3ff !important;
  color: #6366f1 !important;
  box-shadow: none !important;
}

.aside-menu-container .pro-sub-menu.pro-active-sub .pro-inner-list-item .pro-menu-item.active > .pro-inner-item .pro-item-content,
.aside-menu-container .pro-sub-menu.pro-active-sub .pro-inner-list-item .pro-menu-item.active > .pro-inner-item .svg-inline--fa {
  color: #6366f1 !important;
}
`;
