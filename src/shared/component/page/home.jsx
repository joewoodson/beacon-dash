// @flow

import App from 'grommet/components/App'
import React from 'react'
import Helmet from 'react-helmet'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Menu from 'grommet/components/icons/base/Menu'

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
          align="start"
          colorIndex="light-2"
          justify="start"
          full="vertical"
          pad="small"
        >
          <NavOpenButton icon={<Menu />} />
        </Box>
      </Split>
    </App>
  </div>

export default HomePage
