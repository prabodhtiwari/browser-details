# browser-details

JavaScript library of getting browser and os info

- npm (Node.js package manager)

```bash
npm install browser-details --save
```

### Usage

Modular include:

```javascript
const browserDetails = require('browser-details');
...
/**
 * @type {{os: string, browser: string, device: string}}
 */
const info = browserDetails();
```