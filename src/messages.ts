import en from "./messages_en.json";
import fr from "./messages_fr.json";

export const locales = ["en", "fr"];
export const locale = window.sessionStorage.getItem("locale") || "en";

export function setLocale(locale: string) {
  window.sessionStorage.setItem("locale", locale);
  window.location.reload();
}

const bundles = {
  en,
  fr
} as { [locale: string]: { [id: string]: string } };
const messages = bundles[locale];

export function t(id: string, params: object = {}) {
  return Object.entries(params).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{${key}}`, "g"), value);
  }, messages[id]);
}
