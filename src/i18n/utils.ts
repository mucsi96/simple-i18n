let selectedLanguage: string;

export const getLanguage = (): string => {
  return selectedLanguage || "en";
};

export const setLanguage = (language: string): void => {
  selectedLanguage = language;
};

export const translate = (
  bundles: Record<string, Record<string, string>>,
  id: string,
  params: Record<string, string> = {}
): string => {
  const messages = bundles[getLanguage()] || {};
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{${key}}`, "g"), value);
  }, messages[id] || (bundles["en"] && bundles["en"][id]) || id);
};
