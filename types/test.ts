// Minimum TypeScript Version: 4.1
import * as webpack from 'webpack';
import { BaseHrefWebpackPlugin } from "base-href-webpack-plugin";

const config: webpack.Configuration = {
    plugins: [
        new BaseHrefWebpackPlugin({}),
        new BaseHrefWebpackPlugin({ baseHref: "https://www.example.com" }),
        new BaseHrefWebpackPlugin({ baseHref: undefined }),
    ],
};
