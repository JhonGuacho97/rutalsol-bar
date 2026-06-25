export const validarCedula = (cedula) => {
    if (!/^\d{10}$/.test(cedula)) return false;

    const provincia = parseInt(cedula.substring(0, 2));
    if (provincia < 1 || provincia > 24) return false;

    const digitos = cedula.split("").map(Number);
    const verificador = digitos[9];
    const suma = digitos.slice(0, 9).reduce((acc, digit, i) => {
        const val = i % 2 === 0 ? digit * 2 : digit;
        return acc + (val > 9 ? val - 9 : val);
    }, 0);

    const residuo = suma % 10;
    return (residuo === 0 ? 0 : 10 - residuo) === verificador;
};

export const validarIdentificacion = (tipo, valor) => {
    if (tipo === "07") return null;

    const num = (valor || "").trim();
    if (!num) return null;

    if (tipo === "05") {
        if (!/^\d{10}$/.test(num)) return "La cédula debe tener exactamente 10 dígitos";
        if (!validarCedula(num)) return "La cédula ingresada no es válida";
    }

    if (tipo === "04") {
        if (!/^\d{13}$/.test(num)) return "El RUC debe tener exactamente 13 dígitos";
        if (num.slice(10) === "000") return "El RUC ingresado no es válido";
    }

    if (tipo === "06") {
        if (num.length < 5 || num.length > 20) return "El pasaporte debe tener entre 5 y 20 caracteres";
    }

    return null;
};

export const maxLengthPorTipo = (tipo) => {
    if (tipo === "04") return 13;
    if (tipo === "05") return 10;
    return 20;
};

export const placeholderPorTipo = (tipo) => ({
    "04": "Ej: 0912345678001 (13 dígitos)",
    "05": "Ej: 0987654321 (10 dígitos)",
    "06": "Ej: P1234567",
}[tipo] || "");

export const labelPorTipo = (tipo) => ({
    "04": "RUC:",
    "05": "Cédula:",
    "06": "Pasaporte:",
    "07": "Identificación:",
}[tipo] || "Identificación:");