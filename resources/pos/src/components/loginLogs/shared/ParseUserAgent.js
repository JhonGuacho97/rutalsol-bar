export const parseUserAgent = (ua) => {
    if (!ua) return { device: "—", os: "—", browser: "—" };

    // Dispositivo
    let device = "Desktop";
    if (/mobile/i.test(ua)) device = "📱 Móvil";
    else if (/tablet|ipad/i.test(ua)) device = "📟 Tablet";
    else device = "🖥️ Desktop";

    // Sistema Operativo
    let os = "Desconocido";
    if (/windows nt 10/i.test(ua)) os = "Windows 10/11";
    else if (/windows nt 6.3/i.test(ua)) os = "Windows 8.1";
    else if (/windows nt 6.1/i.test(ua)) os = "Windows 7";
    else if (/windows/i.test(ua)) os = "Windows";
    else if (/mac os x/i.test(ua)) os = "macOS";
    else if (/android/i.test(ua)) {
        const match = ua.match(/android\s([\d.]+)/i);
        os = match ? `Android ${match[1]}` : "Android";
    }
    else if (/iphone|ipad/i.test(ua)) {
        const match = ua.match(/os\s([\d_]+)/i);
        os = match ? `iOS ${match[1].replace(/_/g, ".")}` : "iOS";
    }
    else if (/linux/i.test(ua)) os = "Linux";

    // Navegador
    let browser = "Desconocido";
    if (/edg\//i.test(ua)) browser = "Microsoft Edge";
    else if (/opr\//i.test(ua)) browser = "Opera";
    else if (/chrome\//i.test(ua) && !/chromium/i.test(ua)) {
        const match = ua.match(/chrome\/([\d.]+)/i);
        browser = match ? `Chrome ${match[1].split(".")[0]}` : "Chrome";
    }
    else if (/firefox\//i.test(ua)) {
        const match = ua.match(/firefox\/([\d.]+)/i);
        browser = match ? `Firefox ${match[1].split(".")[0]}` : "Firefox";
    }
    else if (/safari\//i.test(ua) && !/chrome/i.test(ua)) {
        const match = ua.match(/version\/([\d.]+)/i);
        browser = match ? `Safari ${match[1].split(".")[0]}` : "Safari";
    }

    return { device, os, browser };
};