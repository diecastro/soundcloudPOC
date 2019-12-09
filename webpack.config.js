const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GenerateJsonPlugin = require('generate-json-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const PROD = process.env.NODE_ENV === 'production';

console.log(`Webpack Building Prod: ${PROD}`);

const gitRevisionPlugin = new GitRevisionPlugin();

const filename = `./dist/${PROD ? 'bundle' + gitRevisionPlugin.commithash() + '.js' : 'bundle.js'}`;
const cssFilename = `./dist/${PROD ? 'bundle' + gitRevisionPlugin.commithash() + '.css' : 'bundle.css'}`;

const plugIns = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.BROWSER': JSON.stringify(true)
  }),
  new MiniCssExtractPlugin({
    filename: cssFilename
  }),
  new GenerateJsonPlugin('../shop-version.json', {
    commit: gitRevisionPlugin.commithash()
  })
];

const optimizers = {
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        compress: false,
        ecma: 6,
        mangle: false
      },
      sourceMap: false
    })]
};


module.exports = {
  entry: ['./client/src/main.js'],
  plugins: plugIns,
  optimization: PROD ? optimizers : {},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: `${__dirname}/`,
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              data: `@import '${path.resolve(__dirname, 'client', 'src', 'styles').replace(/\\/g, '/')}/Variables';
                @import '${path.resolve(__dirname, 'client', 'src', 'styles').replace(/\\/g, '/')}/Mixins';`
            }
          }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|otf)$/,
        use: 'url-loader'
      },
    ],
  },
  output: {
    publicPath: !PROD ? '/' : `http://localhost:${8080}/`,
    path: path.resolve(__dirname, 'client'),
    filename: filename,
  }
};
