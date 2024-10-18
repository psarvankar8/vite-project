import React from 'react';
import { useTheme } from './BGContext';
import '../../style/common/BGStyles.css';  // Import the CSS file

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, themeList } = useTheme();

  return (
    <div className="bg-switcher-container">
      <label htmlFor="bg-select" className="bg-switcher-label">
        Select Theme:
      </label>
      <select
        id="bg-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="bg-switcher-select"
        aria-label="Select a theme"
      >
        {themeList.map((themeOption) => (
          <option key={themeOption} value={themeOption} className="bg-switcher-option">
            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)} Mode
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSwitcher;
