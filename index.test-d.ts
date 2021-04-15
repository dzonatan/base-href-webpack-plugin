import * as webpack from 'webpack';
import { BaseHrefWebpackPlugin } from '.';

const config: webpack.Configuration = {
    plugins: [
        new BaseHrefWebpackPlugin({}),
        new BaseHrefWebpackPlugin({ baseHref: 'https://www.example.com' }),
        new BaseHrefWebpackPlugin({ baseHref: undefined }),
    ],
};
