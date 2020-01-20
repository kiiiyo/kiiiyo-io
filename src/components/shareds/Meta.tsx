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
      <meta
        property="og:title"
        content={title ? `${title} - ${defaultTitle}` : defaultTitle}
      />
      <meta property="og:image" content="/assets/image/share.png" />

      <link
        rel="shortcut icon"
        href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmY3MTliOS04YTU4LTRhZTItYmIxOC0yNzAxZWUwNTI5ZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzE3M0VFRjQzM0I1MTFFQTgzQzBENDk2RUVGMURGM0MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzE3M0VFRjMzM0I1MTFFQTgzQzBENDk2RUVGMURGM0MiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphYTA2NDc1OS03ZGIxLTQzYWMtODE1Zi05ZmU3NTk4NDM1YTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YmJmNzE5YjktOGE1OC00YWUyLWJiMTgtMjcwMWVlMDUyOWY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+agtyJgAAARxJREFUeNrUzwkSwiAQRFG8OZwctaxKNBKWYZbuf4L3H7XWRFspJVXacs7vCW496cCpZxz40dMNXPVcAw090UBbzzJwq6cY6OnxBwZ68IGxHnlgSg87MKvHHFjQAw6s6dEGlvVQAxI9zoBQDzIg1yMMbOnDB3b1sQMK+sABHX3UgJo+ZEBT7z+grHce0Nd7Dpjo3Qas9D4DhnqHAVu99YC53nTAQ2834KQ3GvDTWwy46tUHvPW6AwF6xYEYvdZAmF5lIFK/PxCs3xyI1+8MQOjFAyh62QCQXjCApV8dgNMvDSDq5wdA9ZMDuPqZAWj9cABd3x8g0HcGOPR3AzT65gCT/n+ATH8Z4NN/D1DqjwFW/WeAWP+KW5/SU4ABAGLqMHjR5ZqTAAAAAElFTkSuQmCC"
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
