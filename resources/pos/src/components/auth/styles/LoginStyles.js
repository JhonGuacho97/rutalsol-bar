/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
export const loginStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Poppins:wght@300;400;500;600&display=swap');

  .lp-root *, .lp-root *::before, .lp-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .lp-root {
    min-height: 100vh;
    display: flex;
    font-family: 'Poppins', sans-serif;
    background: #f0f2ff;
    position: relative;
    overflow: hidden;
  }

  /* Fondo animado con burbujas de gradiente */
  .lp-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    overflow: hidden;
  }

  .lp-bg::before {
    content: '';
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    top: -200px;
    left: -200px;
    opacity: 0.25;
    animation: lpFloat 8s ease-in-out infinite;
  }

  .lp-bg::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    bottom: -150px;
    right: -100px;
    opacity: 0.2;
    animation: lpFloat 10s ease-in-out infinite reverse;
  }

  .lp-bg-blob {
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
    bottom: 10%;
    left: 5%;
    opacity: 0.15;
    animation: lpFloat 12s ease-in-out infinite 2s;
  }

  @keyframes lpFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50%       { transform: translateY(-30px) scale(1.05); }
  }

  /* ── Panel izquierdo ── */
  .lp-aside {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 60px 64px;
    position: relative;
    z-index: 1;
  }

  .lp-aside-logo {
    max-height: 72px;
    width: auto;
    object-fit: contain;
    margin-bottom: 48px;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
  }

  .lp-brand-name {
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 48px;
    background: linear-gradient(135deg, #6366f1, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.3px;
  }

  .lp-hero-title {
    font-family: 'Nunito', sans-serif;
    font-size: 46px;
    font-weight: 800;
    line-height: 1.15;
    color: #1e1b4b;
    letter-spacing: -1px;
    margin-bottom: 20px;
  }

  .lp-hero-title span {
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lp-hero-sub {
    font-size: 15px;
    color: #6b7280;
    font-weight: 400;
    line-height: 1.6;
    max-width: 380px;
    margin-bottom: 48px;
  }

  /* Stats decorativos */
  .lp-stats {
    display: flex;
    gap: 24px;
  }

  .lp-stat {
    background: white;
    border-radius: 16px;
    padding: 16px 24px;
    box-shadow: 0 4px 24px rgba(99,102,241,0.12);
    min-width: 120px;
  }

  .lp-stat-num {
    font-family: 'Nunito', sans-serif;
    font-size: 26px;
    font-weight: 800;
    background: linear-gradient(135deg, #6366f1, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 4px;
  }

  .lp-stat-label {
    font-size: 11px;
    color: #9ca3af;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ── Panel derecho (card) ── */
  .lp-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 48px;
    position: relative;
    z-index: 1;
  }

  .lp-card {
    width: 100%;
    max-width: 420px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(20px);
    border-radius: 28px;
    padding: 44px 40px;
    box-shadow:
      0 20px 60px rgba(99,102,241,0.15),
      0 4px 20px rgba(0,0,0,0.06),
      inset 0 1px 0 rgba(255,255,255,0.8);
    animation: lpSlideIn 0.6s cubic-bezier(.22,.61,.36,1) both;
    border: 1px solid rgba(255,255,255,0.6);
  }

  @keyframes lpSlideIn {
    from { opacity: 0; transform: translateY(28px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  /* Logo en móvil */
  .lp-card-logo {
    display: none;
    max-height: 44px;
    width: auto;
    object-fit: contain;
    margin: 0 auto 24px;
  }

  /* Icono decorativo en la card */
  .lp-card-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    box-shadow: 0 8px 20px rgba(99,102,241,0.35);
  }

  .lp-heading {
    font-family: 'Nunito', sans-serif;
    font-size: 28px;
    font-weight: 800;
    color: #1e1b4b;
    letter-spacing: -0.5px;
    margin-bottom: 4px;
  }

  .lp-sub {
    font-size: 13.5px;
    color: #9ca3af;
    font-weight: 400;
    margin-bottom: 32px;
  }

  /* ── Campo ── */
  .lp-field { margin-bottom: 18px; }

  .lp-field-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 7px;
  }

  .lp-label {
    font-size: 12px;
    font-weight: 600;
    color: #374151;
    letter-spacing: 0.3px;
  }

  .lp-forgot {
    font-size: 12px;
    font-weight: 500;
    color: #6366f1;
    text-decoration: none;
    transition: color 0.18s;
  }
  .lp-forgot:hover { color: #a855f7; }

  .lp-input-wrap { position: relative; }

  .lp-input {
    width: 100%;
    padding: 12px 16px;
    font-size: 14.5px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #1f2937;
    background: #f8f7ff;
    border: 2px solid #e5e7f0;
    border-radius: 12px;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }
  .lp-input::placeholder { color: #c4c4d4; }
  .lp-input:focus {
    background: #fff;
    border-color: #6366f1;
    box-shadow: 0 0 0 4px rgba(99,102,241,0.12);
  }
  .lp-input--error {
    border-color: #ef4444 !important;
    background: #fff8f8 !important;
    box-shadow: 0 0 0 4px rgba(239,68,68,0.08) !important;
  }

  .lp-pw-toggle {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #9ca3af;
    padding: 2px;
    display: flex;
    align-items: center;
    transition: color 0.18s;
  }
  .lp-pw-toggle:hover { color: #6366f1; }

  .lp-error-msg {
    font-size: 11.5px;
    color: #ef4444;
    margin-top: 5px;
    display: block;
    font-weight: 500;
  }

  /* ── Botón ── */
  .lp-btn {
    width: 100%;
    margin-top: 10px;
    padding: 14px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    border: none;
    border-radius: 12px;
    cursor: pointer;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
    box-shadow: 0 8px 24px rgba(99,102,241,0.4);
    position: relative;
    overflow: hidden;
  }

  .lp-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .lp-btn:hover:not(:disabled)::before { opacity: 1; }
  .lp-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(99,102,241,0.45);
  }
  .lp-btn:active:not(:disabled) { transform: translateY(0); }
  .lp-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .lp-btn span { position: relative; z-index: 1; }
  .lp-btn-inner {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    z-index: 1;
  }

  .lp-spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255,255,255,0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: lpSpin 0.7s linear infinite;
    flex-shrink: 0;
  }
  @keyframes lpSpin { to { transform: rotate(360deg); } }

  /* Divider */
  .lp-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px 0 0;
  }
  .lp-divider::before, .lp-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #e5e7eb;
  }
  .lp-divider span {
    font-size: 11.5px;
    color: #d1d5db;
    font-weight: 500;
  }

  /* Footer de la card */
  .lp-card-footer {
    text-align: center;
    margin-top: 20px;
    font-size: 12.5px;
    color: #9ca3af;
  }
  .lp-card-footer a {
    color: #6366f1;
    font-weight: 600;
    text-decoration: none;
  }
  .lp-card-footer a:hover { color: #a855f7; }

  /* ── Responsive ── */
  @media (max-width: 768px) {
    .lp-aside { display: none; }
    .lp-main  { padding: 24px 20px; }
    .lp-card  { padding: 36px 28px; border-radius: 24px; }
    .lp-card-logo { display: block; }
  }
`;


export const ForgotPasswordStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

    .forgot-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background: #f5f3ff;
        font-family: 'Poppins', sans-serif;
    }

    .forgot-logo-wrap {
        margin-bottom: 2rem;
        text-align: center;
    }

    .forgot-logo-wrap img {
        max-height: 48px;
        object-fit: contain;
    }

    .forgot-card {
        background: #ffffff;
        border-radius: 16px;
        border: 1px solid #ede9fe;
        padding: 2.5rem 2rem;
        width: 100%;
        max-width: 420px;
        box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08);
    }

    .forgot-icon-circle {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: #f5f3ff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.25rem;
    }

    .forgot-icon-circle svg {
        width: 26px;
        height: 26px;
        stroke: #6366f1;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    .forgot-title {
        font-size: 20px;
        font-weight: 600;
        color: #111827;
        text-align: center;
        margin-bottom: 0.4rem;
    }

    .forgot-subtitle {
        font-size: 13.5px;
        color: #6b7280;
        text-align: center;
        margin-bottom: 1.75rem;
        line-height: 1.6;
    }

    .forgot-success-box {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        border-radius: 10px;
        padding: 12px 14px;
        font-size: 13px;
        color: #15803d;
        margin-bottom: 1.25rem;
        text-align: center;
    }

    .forgot-field-label {
        font-size: 13px;
        font-weight: 500;
        color: #374151;
        margin-bottom: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .forgot-field-label .forgot-back-link {
        font-size: 12.5px;
        color: #6366f1;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.15s;
    }

    .forgot-field-label .forgot-back-link:hover {
        text-decoration: underline;
        opacity: 0.85;
    }

    .forgot-input-wrap {
        position: relative;
        margin-bottom: 0.5rem;
    }

    .forgot-input-icon {
        position: absolute;
        left: 13px;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 15px;
        color: #a78bfa;
        pointer-events: none;
    }

    .forgot-input-wrap input {
        width: 100%;
        padding: 10px 14px 10px 38px;
        border-radius: 10px;
        border: 1.5px solid #e5e7eb;
        background: #fafafa;
        font-size: 13.5px;
        color: #111827;
        font-family: 'Poppins', sans-serif;
        transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
        outline: none;
    }

    .forgot-input-wrap input:focus {
        border-color: #6366f1;
        box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        background: #ffffff;
    }

    .forgot-input-wrap input::placeholder {
        color: #c4b5fd;
    }

    .forgot-error {
        font-size: 12px;
        color: #e24b4a;
        margin-top: 5px;
        margin-bottom: 1rem;
        min-height: 18px;
    }

    .forgot-btn {
        width: 100%;
        padding: 11px;
        border-radius: 10px;
        border: none;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: #ffffff;
        font-size: 14px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: opacity 0.18s, transform 0.12s;
        letter-spacing: 0.01em;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-top: 0.5rem;
    }

    .forgot-btn:hover:not(:disabled) {
        opacity: 0.92;
    }

    .forgot-btn:active:not(:disabled) {
        transform: scale(0.98);
    }

    .forgot-btn:disabled {
        opacity: 0.55;
        cursor: not-allowed;
        transform: none;
    }

    .forgot-spinner {
        width: 14px;
        height: 14px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: forgotSpin 0.7s linear infinite;
    }

    @keyframes forgotSpin {
        to { transform: rotate(360deg); }
    }
`;