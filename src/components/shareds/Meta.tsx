import { FC } from 'react'
import NextHead from 'next/head'

/**
 * Interface
 */

type StateProps = {
  title?: string
  description?: string
  image?: string
}

interface MetaProps {
  state: StateProps
}
const domain = process.env.DOMAIN_URL || ''

const defaultTitle = "Kiiiyo's IO"
const defaultDescription = "@Kiiiyo's Weblog です。"

export const Meta: FC<MetaProps> = props => {
  const {
    state: { title, description, image }
  } = props

  const pageTitle = title ? `${title} - ${defaultTitle}` : defaultTitle
  const metaTitle = pageTitle
  const metaDescription = description ? description : defaultDescription
  const metaImage = image ? image : `${domain}/assets/image/share.png`
  const gaTrackingId = process.env.GA_TRACKING_ID
  const gaScriptUrl = `https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@kiiiyo" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <link
        rel="shortcut icon"
        href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmY3MTliOS04YTU4LTRhZTItYmIxOC0yNzAxZWUwNTI5ZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjgxMDNFRjAzNDczMTFFQTgxRUJCN0Y5RkM0QURCRDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjgxMDNFRUYzNDczMTFFQTgxRUJCN0Y5RkM0QURCRDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NGEwN2M5Yi0yOTYzLTRkMWMtYTNhMC00NzQxY2IxZjNhYTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YmJmNzE5YjktOGE1OC00YWUyLWJiMTgtMjcwMWVlMDUyOWY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QGI3IAAAAGxJREFUeNrs2UEKwCAMBEBX+v8vxw8oeGgp4uwx5DKQQ0hSVe3k9HZ4AAAAAAAAAAAAAAAAAAAAAP7Js9OUZFpf3ZS+7jdCAAAAAK8l/gMAdiG7kBECAAAAAAAAAAAAAAAAAAAAAAC4DjAEGACbOhh9CNU6agAAAABJRU5ErkJggg=="
      />
      <script async src={gaScriptUrl} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaTrackingId}');
        `
        }}
      />
    </NextHead>
  )
}
