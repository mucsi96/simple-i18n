import React, { useState } from "react";
import { t } from "./messages";
import { LanguageSwitch } from "./LanguageSwitch";
import { NameSwitch } from "./NameSwitch";

import "./styles.css";

const names = ["Tom", "Alex"];

export default function App() {
  const [name, setName] = useState(names[0]);

  return (
    <div className="App">
      <LanguageSwitch />
      <NameSwitch names={names} selectedName={name} onNameChange={setName} />
      <h1>{t("Greeting", { name })}</h1>
    </div>
  );
}
