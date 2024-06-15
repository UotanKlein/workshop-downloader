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

const config = {
    entry: {
        addonList: path.resolve(__dirname, './src/addonList/addonListEntry.js'),
        addonSite: path.resolve(__dirname, './src/addonSite/addonSiteEntry.js'),
        addonMain: path.resolve(__dirname, './src/addonMain/addonMainEntry.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '../',
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
        new HtmlWebpackPlugin({
            filename: `addonList.html`,
            template: path.resolve(__dirname, `src/addonList/addonList.html`),
            chunks: ['addonList'],
            publicPath: '../',
        }),
        new HtmlWebpackPlugin({
            filename: `addonSite.html`,
            template: path.resolve(__dirname, `src/addonSite/addonSite.html`),
            chunks: ['addonSite'],
            publicPath: '../../',
        }),
        new HtmlWebpackPlugin({
            filename: `addonMain.html`,
            template: path.resolve(__dirname, `src/addonMain/addonMain.html`),
            chunks: ['addonMain'],
            publicPath: '/',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        ...(isProduction ? [new WorkboxWebpackPlugin.GenerateSW()] : []),
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
    config.mode = isProduction ? 'production' : 'development';
    return config;
};
