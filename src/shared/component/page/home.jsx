// @flow

import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Helmet from 'react-helmet'
import Menu from 'grommet/components/icons/base/Menu'
import React from 'react'

import NavOpenButton from '../../container/nav-open-button'

import { APP_NAME } from '../../config'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
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
  </div>

export default HomePage
