import React from "react";
import { render } from "react-dom";
import App from "./App";
import { setLanguage } from "./i18n/utils";

setLanguage(localStorage.getItem("language") || "");

const rootElement = document.getElementById("root");
render(<App />, rootElement);
