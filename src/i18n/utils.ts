export const getLanguage = (): string =>
  window.sessionStorage.getItem("language") || "en";

export const setLanguage = (language: string): void => {
  window.sessionStorage.setItem("language", language);
  window.location.reload();
};

export const translate = (
  bundles: Record<string, Record<string, string>>,
  id: string,
  params: Record<string, string> = {}
): string => {
  const messages = bundles[getLanguage()] || {};
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{${key}}`, "g"), value);
  }, messages[id]);
};
