import { setLanguage, translate } from "./utils";

test("translates message key to text", () => {
  setLanguage("fr");
  const bundles = { fr: { GREETING: "Bonjour" } };
  expect(translate(bundles, "GREETING")).toEqual("Bonjour");
});

test("falls back to English if no language is set", () => {
  setLanguage("");
  const bundles = { en: { GREETING: "Hello" } };
  expect(translate(bundles, "GREETING")).toEqual("Hello");
});

test("falls back to English if key is not found in set language bundle", () => {
  setLanguage("fr");
  const bundles = { en: { GREETING: "Hello" } };
  expect(translate(bundles, "GREETING")).toEqual("Hello");
});

test("falls back to key if its not found in English bundle neither", () => {
  setLanguage("fr");
  const bundles = {};
  expect(translate(bundles, "GREETING")).toEqual("GREETING");
});

test("interpolates with params", () => {
  setLanguage("en");
  const bundles = { en: { GREETING: "Hello {name}" } };
  expect(translate(bundles, "GREETING", { name: "Tom" })).toEqual("Hello Tom");
});

test("interpolates with missing params", () => {
  setLanguage("en");
  const bundles = { en: { GREETING: "Hello {name}" } };
  expect(translate(bundles, "GREETING")).toEqual("Hello {name}");
});

test("interpolates with unnecessary params", () => {
  setLanguage("en");
  const bundles = { en: { GREETING: "Hello {name}" } };
  expect(translate(bundles, "GREETING", { name: "Tom", age: "21" })).toEqual(
    "Hello Tom"
  );
});
