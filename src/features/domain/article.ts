import { EntryFields } from 'contentful'
//
import { Domain } from '../../features'

export type Id = string
export type Text = EntryFields.Text
export type RichText = EntryFields.RichText

export type Image = {
  id?: string
  title?: string
  url?: string
}
export type Author = Domain.Author.Entity

export interface Entity {
  readonly id: Id
  readonly title: Text
  readonly slug: Text
  readonly description: Text
  readonly body: RichText
  readonly image?: Image
  readonly author: Author
  //readonly tags?: [{}]
  //readonly categories?: [{}]
  //readonly image: {}
  readonly publishedAt: string
}
