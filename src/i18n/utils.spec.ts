import { clearCache, getLanguage, setLanguage, translate } from "./utils";

beforeEach(() => {
  clearCache();
  window.sessionStorage.removeItem("language");
  window.location.reload = jest.fn();
});

describe("utils", () => {
  describe("translate", () => {
    test("translates message key to text", () => {
      window.sessionStorage.setItem("language", "fr");
      const bundles = { fr: { GREETING: "Bonjour" } };
      expect(translate(bundles, "GREETING")).toEqual("Bonjour");
    });

    test("falls back to English if no language is set", () => {
      const bundles = { en: { GREETING: "Hello" } };
      expect(translate(bundles, "GREETING")).toEqual("Hello");
    });

    test("falls back to English if key is not found in set language bundle", () => {
      window.sessionStorage.setItem("language", "fr");
      const bundles = { en: { GREETING: "Hello" } };
      expect(translate(bundles, "GREETING")).toEqual("Hello");
    });

    test("falls back to key if its not found in English bundle neither", () => {
      window.sessionStorage.setItem("language", "fr");
      const bundles = {};
      expect(translate(bundles, "GREETING")).toEqual("GREETING");
    });

    describe("interpolation", () => {
      test("with params", () => {
        const bundles = { en: { GREETING: "Hello {name}" } };
        expect(translate(bundles, "GREETING", { name: "Tom" })).toEqual(
          "Hello Tom"
        );
      });

      test("with missing params", () => {
        const bundles = { en: { GREETING: "Hello {name}" } };
        expect(translate(bundles, "GREETING")).toEqual("Hello {name}");
      });

      test("with unnecessary params", () => {
        const bundles = { en: { GREETING: "Hello {name}" } };
        expect(
          translate(bundles, "GREETING", { name: "Tom", age: "21" })
        ).toEqual("Hello Tom");
      });
    });
  });

  describe("getLanguage", () => {
    test("return language set in session storage", () => {
      window.sessionStorage.setItem("language", "fr");
      expect(getLanguage()).toEqual("fr");
    });

    test("return English if no language is set in session storage", () => {
      expect(getLanguage()).toEqual("en");
    });

    test("caches language", () => {
      window.sessionStorage.setItem("language", "fr");
      expect(getLanguage()).toEqual("fr");
      window.sessionStorage.setItem("language", "en");
      expect(getLanguage()).toEqual("fr");
    });
  });

  describe("setLanguage", () => {
    test("sets language in session storage", () => {
      setLanguage("fr");
      expect(window.sessionStorage.getItem("language")).toEqual("fr");
    });

    test("reloads window on language change", () => {
      setLanguage("fr");
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
});
