// @flow

import Button from 'grommet/components/Button'
import Close from 'grommet/components/icons/base/Close'
import Header from 'grommet/components/Header'
import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Title from 'grommet/components/Title'

type Props = {
  active: boolean,
  menuName: string,
  handleClick: Function,
}

const SidebarNav = ({ active, menuName, handleClick }: Props) => {
  let sidebarClassNames = active ? 'show' : 'hide'
  sidebarClassNames += ' sidebar-nav'

  return (
    <Sidebar
      className={sidebarClassNames}
      colorIndex="neutral-3-a"
    >
      <Header
        colorIndex="brand"
        justify="between"
        pad={{ horizontal: 'medium' }}
      >
        <Title>{menuName}</Title>
        <Button onClick={handleClick} icon={<Close />} a11yTitle="Close Menu" />
      </Header>
    </Sidebar>
  )
}

export default SidebarNav
