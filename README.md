# base-href-webpack-plugin

[![Dependency Status](https://gemnasium.com/badges/github.com/dzonatan/base-href-webpack-plugin.svg)](https://gemnasium.com/github.com/dzonatan/base-href-webpack-plugin)
[![npm version](https://badge.fury.io/js/base-href-webpack-plugin.svg)](https://badge.fury.io/js/base-href-webpack-plugin)

**Webpack plugin** for inserting **base href tag** in head block.

# Prerequisites

This plugin is based on and only works together with [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).
So make sure you have installed and used it.

# Instalation

`npm install --save-dev base-href-webpack-plugin`

# Usage

```javascript
// Import package
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin'); // Or `import 'base-href-webpack-plugin';` if using typescript

// Add to plugins
plugins: [
  new BaseHrefWebpackPlugin({ baseHref: '/' })
]
```

Plugin **does nothing** if `null` is passed to `baseHref` option.

# Contribution

Feel free to contribute to this project by submitting issues and/or pull requests.

# License

MIT
