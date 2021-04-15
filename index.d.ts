import { Compiler, WebpackPluginInstance } from 'webpack';

declare interface BaseHrefWebpackPluginOptions {
  baseHref?: string
}

declare class BaseHrefWebpackPlugin implements WebpackPluginInstance {
  constructor(options: BaseHrefWebpackPluginOptions);

  apply: (compiler: Compiler) => void;
}
