// @flow

import React from 'react'
import Button from 'grommet/components/Button'
import Sidebar from 'grommet/components/Sidebar'

type Props = {
  label: string,
  active: boolean,
  handleClick: Function,
}

const SidebarNav = ({ label, active, handleClick }: Props) => {
  const sidebarClassNames = active ? 'show' : 'hide'

  return (
    <Sidebar
      className={sidebarClassNames}
      size="small"
      colorIndex="brand"
      align="center"
      justify="center"
      full="vertical"
      pad={{ horizontal: 'medium' }}
    >
      <Button
        label={label}
        onClick={handleClick}
      />
    </Sidebar>
  )
}

export default SidebarNav
