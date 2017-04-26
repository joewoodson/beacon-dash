// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Button from 'grommet/components/Button'

import { APP_NAME } from '../../config'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <h1>{APP_NAME}</h1>
    <Button
      label="Say Hello"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log('Yo!')
      }
      }
    />
  </div>

export default HomePage
