const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const URL = process.env.VITE_MFE_REACT_APP_DOMAIN || 'http://localhost:3001';

const prodConfig = {
  entry: './src/main.js',
  mode: 'production',
  output: {
    filename: '[name].js',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        reactApp: `reactApp@${URL}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
