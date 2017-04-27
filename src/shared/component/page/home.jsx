// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Toast from 'grommet/components/icons/base/Toast'

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
    <Split
      fixed
      flex="right"
    >
      <SidebarNav />
      <Box
        align="center"
        colorIndex="light-2"
        justify="center"
        full="vertical"
        pad={{ horizontal: 'large' }}
      >
        <Headline>
          <Toast size="large" /> {APP_NAME}
        </Headline>
        <NavOpenButton />
      </Box>
    </Split>
  </div>

export default HomePage
