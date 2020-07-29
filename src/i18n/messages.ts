import en from "./messages_en.json";
import fr from "./messages_fr.json";
import { translate } from "./utils";

type ids = keyof typeof en;

const bundles = { en, fr };
export const languages = Object.keys(bundles);
export const t = (id: ids, params: Record<string, string> = {}) =>
  translate(bundles, id, params);
