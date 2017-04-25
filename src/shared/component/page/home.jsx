// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import Button from 'grommet/components/Button'

import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'goldenrod',
    borderColor: 'goldenrod',
    '&:hover': {
      backgroundColor: 'slategrey',
      borderColor: 'slategrey',
      color: 'white',
    },
  },
}

const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <h1>{APP_NAME}</h1>
    <h3>JSS</h3>
    <Button
      label="Say Hello"
      onClick={() => {
        // eslint-disable-next-line no-console
        console.log('Yo!')
      }
      }
    />
    <p className={classes.hoverMe}>Hover me.</p>
    <p className={classes.resizeMe}>Resize the window.</p>
    <button className={classes.specialButton}>Composition</button>
  </div>

export default injectSheet(styles)(HomePage)
