const HtmlWebpackPlugin = require('html-webpack-plugin');

export class BaseHrefWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  processTags(data, callback) {
    // Check if base tag already exists
    const baseTagRegex = /<base.*?>/i;
    const baseTagMatches = data.html.match(baseTagRegex);
    if (!baseTagMatches) {
      // Insert it in top of the head
      data.html = data.html.replace(
        /<head>/i,
        '$&' + `<base href="${this.options.baseHref}">`
      );
    } else {
      // Otherwise replace href attribute of current base tag
      const modifiedBaseTag = baseTagMatches[0].replace(
        /href="\S+"/i,
        `href="${this.options.baseHref}"`
      );
      data.html = data.html.replace(baseTagRegex, modifiedBaseTag);
    }

    callback(null, data);
  }

  apply(compiler) {
    if (!this.options.baseHref) {
      return;
    }

    // HtmlWebpackPlugin version 4.0.0-beta.5 and upper
    if (HtmlWebpackPlugin.getHooks) {
      compiler.hooks.compilation.tap('BaseHrefWebpackPlugin', compilation => {
        HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
          'BaseHrefWebpackPlugin',
          this.processTags.bind(this)
        );
      });
    } else {
      // HtmlWebpackPlugin version 3.2.0
      compiler.hooks.compilation.tap('BaseHrefWebpackPlugin', compilation => {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
          'BaseHrefWebpackPlugin',
          this.processTags.bind(this)
        );
      });
    }
  }
}
