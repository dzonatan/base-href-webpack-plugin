export class BaseHrefWebpackPlugin {
  constructor(options) {
    this.options = options;
   }

  apply(compiler) {
    if (!this.options.baseHref) {
      return;
    }

    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
        // Check if base tag already exists
        const baseTagRegex = /<base.*?>/i;
        const baseTagMatches = htmlPluginData.html.match(baseTagRegex);
        if (!!baseTagMatches) {
          // Replace only href attribute
          const modifiedBaseTag = baseTagMatches[0].replace(/href="\S+"/i, `href="${this.options.baseHref}"`);
          htmlPluginData.html = htmlPluginData.html.replace(baseTagRegex, modifiedBaseTag);
        } else {
          // Otherwise insert it in top of the head
          htmlPluginData.html = htmlPluginData.html.replace(/<head>/i, '$&' + `<base href="${this.options.baseHref}">`);
        }

        callback(null, htmlPluginData);
      });
    });
  }
}