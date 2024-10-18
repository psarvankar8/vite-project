import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {  loadLanguage} from '../../i18nLoader';
import '../../style/Dropdown.css'

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const handleLanguageChange = async(event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedLanguage = event.target.value;
      await loadLanguage(selectedLanguage);
      };

      useEffect(() => {
        const initializeLanguage = async () => {
            await loadLanguage(i18n.language); // Load the current language on mount
        };
        initializeLanguage();
    }, []);
    
      return (
        <div className="dropdown-container">
        <label htmlFor="language-selector" className="dropdown-label">{i18n.t("Select Language :")}</label>
        <select onChange={handleLanguageChange} defaultValue={i18n.language} className="dropdown-select">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">French</option>
        </select>
        </div>
      );
}
export default LanguageSelector;