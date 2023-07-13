const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const URL = import.meta.env.VITE_MFE_REACT_APP_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '',
    publicPath: '',
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
