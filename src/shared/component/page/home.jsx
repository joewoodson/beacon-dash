// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Split from 'grommet/components/Split'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Headline from 'grommet/components/Headline'
import Toast from 'grommet/components/icons/base/Toast'

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
      <Box
        colorIndex="brand"
        justify="center"
        full="vertical"
        pad={{ horizontal: 'medium' }}
        size="small"
      >
        <Button
          label="Test Button"
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('Yo!')
          }}
        />
      </Box>
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
      </Box>
    </Split>
  </div>

export default HomePage
