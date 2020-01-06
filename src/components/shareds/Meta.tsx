import { FC } from 'react'
import NextHead from 'next/head'

/**
 * Interface
 */

type StateProps = {
  title?: string
  description?: string
}

interface MetaProps {
  state: StateProps
}

const defaultTitle = "Kiiiyo's IO"
const defaultDescription = "@Kiiiyo's Weblog です。"

export const Meta: FC<MetaProps> = props => {
  const {
    state: { title, description }
  } = props
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <link
        href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII="
        rel="icon"
        type="image/x-icon"
      />
    </NextHead>
  )
}
