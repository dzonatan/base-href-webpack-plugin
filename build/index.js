'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseHrefWebpackPlugin = exports.BaseHrefWebpackPlugin = function () {
  function BaseHrefWebpackPlugin(options) {
    _classCallCheck(this, BaseHrefWebpackPlugin);

    this.options = options;
  }

  _createClass(BaseHrefWebpackPlugin, [{
    key: 'apply',
    value: function apply(compiler) {
      var _this = this;

      if (!this.options.baseHref) {
        return;
      }

      compiler.plugin('compilation', function (compilation) {
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync('BaseHrefWebpackPlugin', function (htmlPluginData, callback) {
          // Check if base tag already exists
          var baseTagRegex = /<base.*?>/i;
          var baseTagMatches = htmlPluginData.html.match(baseTagRegex);
          if (!baseTagMatches) {
            // Insert it in top of the head
            htmlPluginData.html = htmlPluginData.html.replace(/<head>/i, '$&' + ('<base href="' + _this.options.baseHref + '">'));
          } else {
            // Otherwise replace href attribute of current base tag
            var modifiedBaseTag = baseTagMatches[0].replace(/href="\S+"/i, 'href="' + _this.options.baseHref + '"');
            htmlPluginData.html = htmlPluginData.html.replace(baseTagRegex, modifiedBaseTag);
          }

          callback(null, htmlPluginData);
        });
      });
    }
  }]);

  return BaseHrefWebpackPlugin;
}();
//# sourceMappingURL=index.js.map