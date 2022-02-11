# base-href-webpack-plugin (extension)

[![npm version](https://badge.fury.io/js/base-href-webpack-plugin.svg)](https://badge.fury.io/js/base-href-webpack-plugin)

Extension for [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin) to programmatically insert or update `<base href="" />` tag.

# Deprecation notice ⚠️

You probably don't need this plugin as `html-webpack-plugin` supports this [feature natively](https://github.com/jantimon/html-webpack-plugin#base-tag).

# Prerequisites

This plugin is an extension of [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).  
So make sure you have installed `npm i --save-dev html-webpack-plugin`.

# Installation

For webpack v5 use latest (^3.0.0):  
`npm i --save-dev base-href-webpack-plugin`

For webpack v4 use ^2.0.0:  
`npm i --save-dev base-href-webpack-plugin@2`

For webpack v3 use ^1.0.0:  
`npm i --save-dev base-href-webpack-plugin@1`

# Usage

```javascript
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

// Add to plugins
plugins: [
  new HtmlWebpackPlugin(), // Required dependency
  new BaseHrefWebpackPlugin({ baseHref: '/' })
]
```

Plugin **leaves your template untouched** if `baseHref` option is not provided.

# Contribution

Feel free to contribute to this project by submitting issues and/or pull requests.

# License

MIT
