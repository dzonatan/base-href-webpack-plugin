export class BaseHrefWebpackPlugin {
  constructor(options) {
    this.options = options;
   }

  apply(compiler) {
    if (!this.options.baseHref) {
      return;
    }

    compiler.hooks.compilation.tap('BaseHrefWebpackPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('BaseHrefWebpackPlugin', (data, callback) => {
        // Check if base tag already exists
        const baseTagRegex = /<base.*?>/i;
        const baseTagMatches = data.html.match(baseTagRegex);
        if (!baseTagMatches) {
          // Insert it in top of the head
          data.html = data.html.replace(/<head>/i, '$&' + `<base href="${this.options.baseHref}">`);
        } else {
          // Otherwise replace href attribute of current base tag
          const modifiedBaseTag = baseTagMatches[0].replace(/href="\S+"/i, `href="${this.options.baseHref}"`);
          data.html = data.html.replace(baseTagRegex, modifiedBaseTag);
        }

        callback(null, data);
      });
    });
  }
}
