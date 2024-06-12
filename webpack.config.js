import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { fileURLToPath } from 'url';

const expressPort = 3000;
const webpackPort = 9000;

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

const createHtmlPlugins = (pages) => {
    return pages.map(
        (page) =>
            new HtmlWebpackPlugin({
                filename: `${page}.html`,
                template: path.resolve(__dirname, `src/${page}/${page}.html`),
                chunks: [page],
            }),
    );
};

const config = {
    entry: {
        addonList: path.resolve(__dirname, './src/addonList/addonListEntry.js'),
        addonSite: path.resolve(__dirname, './src/addonSite/addonSiteEntry.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: webpackPort,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    },
    plugins: [
        ...createHtmlPlugins(['addonList', 'addonSite']),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][query][ext]',
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    resolve: {
        alias: {},
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

export default () => {
    if (isProduction) {
        config.mode = 'production';
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    } else {
        config.mode = 'development';
    }
    return config;
};
