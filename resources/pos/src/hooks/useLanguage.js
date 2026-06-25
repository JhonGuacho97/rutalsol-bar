import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Tokens } from "../constants";
import { getFiles } from "../locales/index";

/**
 * useLanguage
 *
 * Centraliza toda la lógica de idioma que estaba dispersa en 5 useEffects
 * dentro de App.js. Devuelve el objeto `messages` listo para pasarlo
 * al <IntlProvider>.
 *
 * Lógica de prioridad (de mayor a menor):
 *   1. Mensajes editados manualmente por el usuario (userEditedMessage)
 *   2. Mensajes del idioma actualizado que coincide con el localStorage
 *   3. Mensajes del locale cargado desde los archivos
 *   4. Inglés como fallback
 */
const useLanguage = () => {
    const { updateLanguage, selectedLanguage, language } = useSelector((state) => state);
    const updatedLanguage = localStorage.getItem(Tokens.UPDATED_LANGUAGE);

    const [allLocales, setAllLocales]           = useState({});
    const [messages, setMessages]               = useState(() => getFiles()["en"]);
    const [userEditedMessage, setUserEditedMessage] = useState({});

    // El locale activo según localStorage o el selector del store
    const activeLocale = allLocales[updatedLanguage ?? selectedLanguage];

    // 1. Cargar todos los archivos de locale cuando cambia el idioma
    useEffect(() => {
        setAllLocales(getFiles());
    }, [language, updateLanguage?.lang_json_array]);

    // 2. Si el usuario editó mensajes en el idioma activo, capturarlos
    useEffect(() => {
        if (updateLanguage?.iso_code === updatedLanguage && updateLanguage?.lang_json_array) {
            setUserEditedMessage(updateLanguage.lang_json_array);
        }
    }, [language, updateLanguage?.lang_json_array, updatedLanguage]);

    // 3. Resolver qué messages usar según la prioridad
    useEffect(() => {
        if (Object.keys(userEditedMessage).length > 0) {
            // Prioridad 1: ediciones manuales del usuario
            setMessages(userEditedMessage);
        } else if (updateLanguage?.iso_code === updatedLanguage && updateLanguage?.lang_json_array) {
            // Prioridad 2: idioma actualizado que coincide con localStorage
            setMessages(updateLanguage.lang_json_array);
        } else if (activeLocale) {
            // Prioridad 3: locale cargado desde archivos
            setMessages(activeLocale);
        } else {
            // Prioridad 4: fallback inglés
            const fallback = allLocales["en"];
            if (fallback) setMessages(fallback);
        }
    }, [allLocales, userEditedMessage, updateLanguage?.lang_json_array, activeLocale]);

    return { messages, updatedLanguage, selectedLanguage };
};

export default useLanguage;
