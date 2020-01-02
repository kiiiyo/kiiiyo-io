/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.resolve(__dirname, '.env'),
        systemvars: true
      })
    ]

    return config
  }
}
