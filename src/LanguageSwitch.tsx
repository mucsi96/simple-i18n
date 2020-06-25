import React, { ChangeEvent, FC, useCallback } from "react";
import { languages } from "./i18n/messages";
import { getLanguage } from "./i18n/utils";

export const LanguageSwitch: FC = () => {
  const handleLanguageChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLSelectElement>): void => {
      localStorage.setItem("language", value);
      window.location.reload();
    },
    []
  );
  const selectedLanguage = getLanguage();

  return (
    <p>
      Language:{" "}
      <select onChange={handleLanguageChange}>
        {languages.map((language) => (
          <option
            key={language}
            selected={language === selectedLanguage}
            value={language}
          >
            {language}
          </option>
        ))}
      </select>
    </p>
  );
};
