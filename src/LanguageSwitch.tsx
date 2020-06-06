import React, { useCallback, ChangeEvent, FC } from "react";
import { locale as selectedLocale, setLocale, locales } from "./messages";

export const LanguageSwitch: FC = () => {
  const handleLocaleChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => setLocale(value),
    []
  );

  return (
    <p>
      Language:{" "}
      <select onChange={handleLocaleChange}>
        {locales.map(locale => (
          <option
            key={locale}
            selected={locale === selectedLocale}
            value={locale}
          >
            {locale}
          </option>
        ))}
      </select>
    </p>
  );
};
