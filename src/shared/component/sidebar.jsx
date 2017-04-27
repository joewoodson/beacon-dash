// @flow

import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Close from 'grommet/components/icons/base/Close'

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
      <Close
        onClick={handleClick}
      />
    </Sidebar>
  )
}

export default SidebarNav
