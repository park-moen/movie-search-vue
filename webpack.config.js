const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

module.exports = () => {
  return {
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '~': `${__dirname}/src`,
      },
    },
    entry: './src/main.js',
    output: {
      path: `${__dirname}/dist`,
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                additionalData: `
                  @use "sass:color";
                  @use "sass:list";
                  @use "sass:map";
                  @use "sass:math";
                  @use "sass:meta";
                  @use "sass:selector";
                  @use "sass:string";
                  @import "~/scss/_variables";
                  @import "~/scss/_reset";
                `,
              },
            },
          ],
        },
        // https://webpack.kr/guides/asset-modules/
        {
          test: /\.(png|jpe?g|svg|gif|webp)/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlPlugin({
        template: './src/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      }),
    ],
    devServer: {
      // port: 8080,
      historyApiFallback: true,
    },
  };
};
