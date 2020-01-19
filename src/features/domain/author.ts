import { EntryFields } from 'contentful'

export type Id = string

export type AuthorMetadata = {
  [key: string]: {
    url: string
    name: string
  }
  github: {
    url: string
    name: string
  }
  twitter: {
    url: string
    name: string
  }
}

export interface Entity {
  readonly id: Id
  readonly name: EntryFields.Text
  readonly description: EntryFields.RichText
  readonly imageUrl: EntryFields.Text
  readonly metadata: AuthorMetadata
}
