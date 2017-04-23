// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { HOME_PAGE_ROUTE } from '../../routes'

const title = 'Page Not Found!'

const NotFoundPage = () =>
  <div>
    <Helmet title={title} />
    <h1>{title}</h1>
    <div><Link to={HOME_PAGE_ROUTE}>Go to the homepage</Link>.</div>
  </div>

export default NotFoundPage
