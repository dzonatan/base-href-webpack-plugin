declare module 'base-href-webpack-plugin' {
  import { Plugin } from 'webpack';

  interface BaseHrefWebpackPluginOptions {
    baseHref?: string
  }

  class BaseHrefWebpackPlugin extends Plugin {
    constructor(options: BaseHrefWebpackPluginOptions);
  }
}
