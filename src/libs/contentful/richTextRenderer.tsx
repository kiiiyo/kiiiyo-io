import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

// FIXME: assign richText Type
export const richTextToReactComponents = (richText: any) => {
  const options = {
    renderNode: {
      // eslint-disable-next-line react/display-name
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        )
      }
      // eslint-disable-next-line react/display-name
      // [BLOCKS.UL_LIST]: (node: any) => {
      //   return (
      //     <>
      //       {node.content.length > 0 && (
      //         <ul>
      //           {node.content.map((list: any, idx: number) => {
      //             console.log(list)
      //             return <li key={idx}>{list.content[0].content[0].value}</li>
      //           })}
      //         </ul>
      //       )}
      //     </>
      //   )
      // }
    }
  }

  return documentToReactComponents(richText, options)
}
