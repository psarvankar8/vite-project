import i18n from './i18n';
 
// Function to dynamically load language
export const loadLanguage = async (language: string) => {
  try {
    const translation = await import(`./locale/${language}/translation.json`);
    i18n.addResources(language, 'translation', translation.default);
    i18n.changeLanguage(language);
  } catch (error) {
    console.error(`Error loading language ${language}:`, error);
  }
};
 