import { createClient } from 'contentful'

const space = process.env.contentful_space || ''
const cdaToken = process.env.contentful_cda_token || ''

export const apiClient = createClient({
  space: space,
  accessToken: cdaToken
})
