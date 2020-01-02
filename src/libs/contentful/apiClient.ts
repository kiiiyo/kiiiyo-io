import { createClient } from 'contentful'

const space = process.env.CONTENTFUL_SPACE || ''
const cdaToken = process.env.CONTENTFUL_CDA_TOKEN || ''

export const apiClient = createClient({
  space: space,
  accessToken: cdaToken
})
