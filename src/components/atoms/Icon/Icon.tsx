import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import { IconName, IconSize } from '../../../../@types/fortawesome'

library.add(fab, fas)

type IconProps = {
  size?: IconSize
  prefix: 'fas' | 'fab'
  name: IconName
}

export const IconPresenter = (props: IconProps) => {
  const { name, prefix, size } = props
  return (
    <FontAwesomeIcon
      icon={findIconDefinition({ prefix, iconName: name })}
      size={size || 'sm'}
    />
  )
}

export const Icon: React.SFC<IconProps> = ({ ...props }) => {
  return <IconPresenter {...props} />
}
