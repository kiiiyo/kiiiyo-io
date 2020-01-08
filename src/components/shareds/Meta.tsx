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
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GA_TRACKING_ID}');
        `
        }}
      />
    </NextHead>
  )
}
