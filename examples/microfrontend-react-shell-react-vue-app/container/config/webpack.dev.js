const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  entry: './src/main',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        // vite-plugin-federation require promise import to work
        reactApp: `promise import("http://localhost:3001/assets/remoteEntry.js")`,
        vueApp: `promise import("http://localhost:3002/assets/remoteEntry.js")`,
        // if we are using webpack & module federation in react-app, the import would be:
        // reactApp: `reactApp@http://localhost:3001/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
