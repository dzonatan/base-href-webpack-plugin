// Minimum TypeScript Version: 3.7
import { Compiler, WebpackPluginInstance } from 'webpack';

export interface BaseHrefWebpackPluginOptions {
    baseHref?: string;
}

export class BaseHrefWebpackPlugin implements WebpackPluginInstance {
    constructor(options: BaseHrefWebpackPluginOptions);

    apply: (compiler: Compiler) => void;
}
