// @flow

import Anchor from 'grommet/components/Anchor'
import Button from 'grommet/components/Button'
import Close from 'grommet/components/icons/base/Close'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import React from 'react'
import Sidebar from 'grommet/components/Sidebar'
import Title from 'grommet/components/Title'

type Props = {
  active: boolean,
  menuName: string,
  items: Object,
  handleClick: Function,
}

const SidebarNav = ({ active, menuName, items, handleClick }: Props) => {
  const links = items.map(page =>
    <Anchor key={page.get('label')} path={page.get('route')} label={page.get('label')} />,
  )

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
      <Menu
        primary
      >
        {links}
      </Menu>
    </Sidebar>
  )
}

export default SidebarNav
