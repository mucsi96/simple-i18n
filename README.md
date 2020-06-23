# simple-i18n

Minimalistic translation handling utility

## Features

- translation of keys based on SessionStorage
- parameter interpolation
- language caching on first succesful retrieval from SessionStorage
- window reload on setting language for application logic simplification

## FAQ

### Why not store selected language and bundles in Redux or React state?

Normally users are not changing language so frequently. Normally they do that once during initial application setup.
So I see no point of optimizing the user experience around language change use case.
Designing the application for language change use case by putting the selected language in React state or Redux makes a lot of complexity for basically no gain.
It makes the translation handling tightly coupled to React / Redux which offten results in unnecessarly complex components.

### Why not store selected language just in a variable?

We expect that the utility is can be used in both application and shared components. If by any chance the application is using a different version of utility the bundler will bundle two instances of utility. With that the selected language in application may differ from selected language in shared component.

### Why SessionStorage?

We can use also a global variable, but in case of SessionStorage there is less chance for variable collision. Also it's much easier to debug the state in Dev Tools.

### Why reload the page on language change?

As users change the language very rarely we can make the application simpler instead of optimizing for language change use case. With page reload we don't need to think what we have to refetch for newly selected language. We don't even need to listen for language change event. Also we can use the selected in plain javascript functions without the need to inject React / Redux state.

### Why call a function "t"?

Normally the translation function is the most frequently used function in application. It has to be used any time we want to display any text on the screen. So choosing a very short name can reduce the noise in source code. So developers can focus more on message keys instead of function name. One of the most popular internationalization-framework called i18next is also using "t" function for translation function.

## Usage

```typescript
import { setLanguage } from "./utils";

setLanguage("fr"); // -> sets SessionStorage and reloads the page
```

```typescript
import { getLanguage } from "./utils";

getLanguage(); // -> 'fr'
```

```typescript
import { translate } from "./utils";

const bundles = { fr: { Greeting: "Bonjour" } };
translate(bundles, "Greeting"); // -> 'Bonjour'
```

```typescript
import en from "./messages_en.json"; // <- { "Greeting": "Hello {name}!" }
import fr from "./messages_fr.json"; // <- { "Greeting": "Bonjour {name}!" }
import { translate } from "./utils";

export const t = (id: string, params: Record<string, string> = {}) =>
  translate({ en, fr }, id, params);

t("Greeting", { name: "Alex" }); // -> 'Bonjour Alex!'
```
