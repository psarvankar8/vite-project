import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
      };
      return (
        <div>
        <label htmlFor="language-selector">{i18n.t("Select Language")}</label>
        <select onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>
        </div>
      );
}
export default LanguageSelector;