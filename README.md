# base-href-webpack-plugin

Webpack plugin for inserting base href tag in head block.

# Instalation

`npm install --save base-href-webpack-plugin`

# Prerequisites

This plugin is based on and only works together with [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).
So keep sure you have installed and used it.

# Usage

```javascript
const {BaseHrefWebpackPlugin} = require('base-href-webpack-plugin')
//...
plugins: [
  new BaseHrefWebpackPlugin({
    baseHref: '/'
  })
]
```

If `null` is passed to baseHref then plugin **nothing does** (template is untouched).

# Contribution

Feel free to contribute to this project by submitting issues and/or pull requests.

# License

MIT
