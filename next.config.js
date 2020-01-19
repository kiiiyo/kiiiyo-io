/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

module.exports = {
  env: {
    DOMAIN_URL: process.env.DOMAIN_URL,
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE,
    CONTENTFUL_CDA_TOKEN: process.env.CONTENTFUL_CDA_TOKEN,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID
  }
}
