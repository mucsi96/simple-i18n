# react-simple-i18n

Minimalistic translation handling utility

## Features
- translation of keys based on SessionStorage
- parameter interpolation
- caching of first succesful retrieval from SessionStorage
- window reload on setting language for application logic simplification

## Usage

```typescript
setLanguage("fr"); // -> sets SessionStorage and reloads the page
```

```typescript
getLanguage() // -> 'fr'
```

```typescript
import en from "./messages_en.json"; // <- { "Greeting": "Hello {name}" }
import fr from "./messages_fr.json"; // <- { "Greeting": "Bonjour {name}" }
import { translate } from "./utils";

const t = (id: string, params: Record<string, string> = {}) =>
  translate({ en, fr }, id, params);
  
t('Greeting', { name: 'Alex' }); // -> 'Bonjour Alex'
```
