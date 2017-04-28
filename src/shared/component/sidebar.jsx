// @flow

import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Close from 'grommet/components/icons/base/Close'
import Button from 'grommet/components/Button'

type Props = {
  active: boolean,
  handleClick: Function,
}

const SidebarNav = ({ active, handleClick }: Props) => {
  let sidebarClassNames = active ? 'show' : 'hide'
  sidebarClassNames += ' sidebar-nav'

  return (
    <Sidebar
      className={sidebarClassNames}
      size="small"
      colorIndex="brand"
      align="end"
      pad="small"
    >
      <Button onClick={handleClick} icon={<Close />} />
    </Sidebar>
  )
}

export default SidebarNav
