// @flow

import Box from 'grommet/components/Box'
import Helmet from 'react-helmet'
import React from 'react'

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
    />
  </div>

export default HomePage
