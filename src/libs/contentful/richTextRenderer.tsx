import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// FIXME: assign richText Type
export const richTextToReactComponents = (richText: any) => {
  return documentToReactComponents(richText)
}
