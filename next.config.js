/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  env: {
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_CDA_TOKEN: process.env.CONTENTFUL_CDA_TOKEN
  }
}
