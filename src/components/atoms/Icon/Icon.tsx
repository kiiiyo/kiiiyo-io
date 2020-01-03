import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { findIconDefinition, library } from '@fortawesome/fontawesome-svg-core'
import { IconName, IconSize } from '../../../../@types/fortawesome'

library.add(fas)

type IconProps = {
  size?: IconSize
  name: IconName
}

export const StyledIcon = (props: IconProps) => {
  const { name, size } = props
  return (
    <FontAwesomeIcon
      icon={findIconDefinition({ prefix: 'fas', iconName: name })}
      size={size || 'sm'}
    />
  )
}

export const Icon: React.SFC<IconProps> = ({ ...props }) => {
  return <StyledIcon {...props} />
}
