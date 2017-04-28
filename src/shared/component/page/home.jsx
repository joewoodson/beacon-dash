// @flow

import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Helmet from 'react-helmet'
import Menu from 'grommet/components/icons/base/Menu'
import React from 'react'
import Split from 'grommet/components/Split'

import NavOpenButton from '../../container/nav-open-button'
import SidebarNav from '../../container/sidebar-nav'

import { APP_NAME } from '../../config'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <App centered={false}>
      <Split
        flex="right"
      >
        <SidebarNav />
        <Box
          colorIndex="light"
          full="vertical"
        >
          <Header
            pad={{ horizontal: 'small' }}
          >
            <NavOpenButton icon={<Menu />} />
          </Header>
        </Box>
      </Split>
    </App>
  </div>

export default HomePage
